import React, { useState } from 'react';
import axios from 'axios';

function EditQuiz() {
  const [quizData, setQuizData] = useState({
    id: '',
    judul: '',
    deskripsi: '',
    waktu_mulai: '',
    waktu_selesai: '',
  });

  const handleChange = (e) => {
    setQuizData({
      ...quizData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put('http://localhost:8000/quiz/update', quizData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form className="p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">ID:</label>
          <input className="w-full px-3 py-2 leading-tight text-white bg-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="number" name="id" onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Judul:</label>
          <input className="w-full px-3 py-2 leading-tight text-white bg-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" name="judul" onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Deskripsi:</label>
          <input className="w-full px-3 py-2 leading-tight text-white bg-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" name="deskripsi" onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Waktu Mulai:</label>
          <input className="w-full px-3 py-2 leading-tight text-white bg-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="datetime-local" name="waktu_mulai" onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Waktu Selesai:</label>
          <input className="w-full px-3 py-2 leading-tight text-white bg-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="datetime-local" name="waktu_selesai" onChange={handleChange} />
        </div>
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" type="submit">Update Quiz</button>
      </form>
    </div>
  );
}

export default EditQuiz;