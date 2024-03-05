// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Header() {
//   const navigate = useNavigate();

//   const isAuth = localStorage.getItem("isAuthenticated");

//   const handleLogout = () => {
//     localStorage.removeItem("isAuthenticated");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <div className="flex py-5 justify-between items-center">
//       <Link to={"/"}>
//         <h1 className="text-2xl font-bold text-blue-500">Toko Saya</h1>
//       </Link>
//       <div>
//         {isAuth ? (
//           <div className="flex space-x-10">
//             <Link to={"/profile"}>
//               <h1>Profile</h1>
//             </Link>
//             <button onClick={() => handleLogout()}>Logout</button>
//           </div>
//         ) : (
//           <button onClick={() => navigate("./login")}>Login</button>
//         )}
//       </div>
//     </div>
//   );
// }



import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const isAuth = localStorage.getItem("isAuthenticated");

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const navigation = [
    { name: 'Buat Quiz', href: '/admin/createquiz', current: true },
    { name: 'Edit Quiz', href: '/admin/editquiz', current: false },
    { name: 'Buat Pertanyaan', href: '/admin/Pertanyaan', current: false },
    { name: 'Edit Pertanyaan', href: '/admin/editpertanyaan', current: false },
    { name: 'Skor', href: '/admin/skor', current: false },
  ];

  return (
    <div className="flex py-5 justify-between items-center">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold text-blue-500">Learning</h1>
      </Link>
      <div>
        {isAuth ? (
          <div className="flex space-x-10">
            {navigation.map((item) => (
              <Link to={item.href} key={item.name}>
                <h1 className={item.current ? 'current' : ''}>{item.name}</h1>
              </Link>
            ))}
            <button onClick={() => handleLogout()}>Logout</button>
          </div>
        ) : (
          <button onClick={() => navigate("./login")}>Login</button>
        )}
      </div>
    </div>
  );
}