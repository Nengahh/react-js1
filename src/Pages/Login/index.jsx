import React from "react";
import * as jwt_decode from 'jwt-decode';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../service/auth/authSlice";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import jwt_decode from 'jwt-decode';



export default function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const onSubmit = (data) => {
  //   dispatch(login(data));
  //   localStorage.setItem("isAuthenticated", true);
  //   localStorage.setItem("user", JSON.stringify(data));
  //   navigate("/");
  // };

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
  });
   // tambahkan ini di bagian atas

   const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post('/user/login', {
        email: data.email,
        password: data.password,
        role: data.role,
      });
  
      if (response.data) {
        dispatch(login(response.data));
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/admin");
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Network error', error);
    }
  };


  // const onSubmit = async (data) => {
  //   try {
  //     const response = await axiosInstance.post('/user/login', {
  //       email: data.email, // Ganti dengan nama field email jika berbeda
  //       password: data.password,
  //       role: data.role, // Anda perlu mengisi ini sesuai kebutuhan
  //     });
  
  //     if (response.data) {
  //       const decodedToken = jwt_decode(response.data.token); // dekode token
  //       dispatch(login(response.data));
  //       localStorage.setItem("isAuthenticated", true);
  //       localStorage.setItem("user", JSON.stringify(response.data));
  //       localStorage.setItem("token", response.data.token); // simpan token di localStorage
  //       if (decodedToken.role === 'admin') { // cek role pengguna
  //         navigate("/admin"); // jika admin, arahkan ke halaman admin
  //       } else {
  //         navigate("/student"); // jika bukan admin, arahkan ke halaman student
  //       }
  //     } else {
  //       // Tampilkan pesan kesalahan jika ada
  //       console.error('Login failed');
  //     }
  //   } catch (error) {
  //     // Tangani kesalahan jaringan
  //     console.error('Network error', error);
  //   }
  // };

  // return (
  //   <div className="flex justify-center items-center w-full h-screen">
  //     <form onSubmit={handleSubmit(onSubmit)}>
  //       <label className="form-control w-full max-w-xs">
  //         <div className="label">
  //           <span className="label-text">Username</span>
  //         </div>
  //         <input
  //           type="text"
  //           placeholder="username"
  //           {...register("username", { required: true, maxLength: 20 })}
  //           className="input input-bordered w-full max-w-xs"
  //         />
  //         {/* <div className="label">
  //         <span className="label-text-alt">Bottom Left label</span>
  //       </div> */}
  //       </label>

  //       <label className="form-control w-full max-w-xs">
  //         <div className="label">
  //           <span className="label-text">Password</span>
  //         </div>
  //         <input
  //           type="password"
  //           placeholder="password"
  //           {...register("password", { required: true, maxLength: 20 })}
  //           className="input input-bordered w-full max-w-xs"
  //         />
  //         {/* <div className="label">
  //         <span className="label-text-alt">Bottom Left label</span>
  //       </div> */}
  //       </label>

  //       <button type="submit" className="mt-10 w-full btn btn-primary">
  //         Login
  //       </button>
  //     </form>
  //   </div>
  // );

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            placeholder="email"
            {...register("email", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
  
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            placeholder="password"
            {...register("password", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Role</span>
          </div>
          <input
            type="role"
            placeholder="role"
            {...register("role", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
  
  
        <button type="submit" className="mt-10 w-full btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );



}
