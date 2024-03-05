import React, { useState } from 'react';
import axios from 'axios';

function ScoreById() {
  const [id, setId] = useState('');
  const [scoreData, setScoreData] = useState(null);

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8000/jawaban-peserta/${id}`);
      setScoreData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form className="p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Search by ID:</label>
          <input className="w-full px-3 py-2 leading-tight text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="number" name="id" onChange={handleChange} />
        </div>
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" type="submit">Search</button>
        {scoreData && (
          <div className="mt-4">
            <h2 className="text-xl font-bold text-gray-700">Score Details:</h2>
            <p><strong>ID:</strong> {scoreData.data.ID}</p>
            <p><strong>ID User:</strong> {scoreData.data.IDUser}</p>
            <p><strong>ID Quiz:</strong> {scoreData.data.IDQuiz}</p>
            <p><strong>ID Pertanyaan:</strong> {scoreData.data.IDPertanyaan}</p>
            <p><strong>Jawaban Peserta:</strong> {scoreData.data.JawabanPeserta}</p>
            <p><strong>Skor:</strong> {scoreData.data.Skor}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default ScoreById;