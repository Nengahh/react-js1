import React, { useState } from 'react';
import axios from 'axios';

function EditQuestion() {
  const [questionData, setQuestionData] = useState({
    pertanyaan: '',
    opsi_jawaban: '',
    jawaban_benar: '',
    id_quiz: '',
  });

  const handleChange = (e) => {
    setQuestionData({
      ...questionData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put('http://localhost:8000/question/update', questionData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form className="p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Pertanyaan:</label>
          <input className="w-full px-3 py-2 leading-tight text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" name="pertanyaan" onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Opsi Jawaban:</label>
          <input className="w-full px-3 py-2 leading-tight text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" name="opsi_jawaban" onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Jawaban Benar:</label>
          <input className="w-full px-3 py-2 leading-tight text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="number" name="jawaban_benar" onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">ID Quiz:</label>
          <input className="w-full px-3 py-2 leading-tight text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="number" name="id_quiz" onChange={handleChange} />
        </div>
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" type="submit">Update Pertanyaan</button>
      </form>
    </div>
  );
}

export default EditQuestion;