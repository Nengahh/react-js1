// import React from 'react'

// function DetailQuiz() {
//   return (
//     <div>DetailQuiz</div>
//   )
// }

// export default DetailQuiz


import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailQuiz() {
  const [quiz, setQuiz] = useState({});
  let { quizId } = useParams();
  let navigate = useNavigate();

  const getQuiz = useCallback(() => {
    fetch(`http://localhost:8000/quiz/${quizId}`)
      .then((res) => res.json())
      .then((data) => setQuiz(data));
  }, [quizId]);

  useEffect(() => {
    getQuiz();
  }, [getQuiz]);

  // {
  //   "id": 1,
  //   "judul": "Quiz Matematika",
  //   "deskripsi": "Quiz tentang matematika dasar",
  //   "waktu_mulai": "2022-03-04T10:00:00Z",
  //   "waktu_selesai": "2022-03-04T11:00:00Z"
  // }

  return (
    <div className="px-[20%] py-20">
      <button className="mb-10" onClick={() => navigate(-1)}>
        back
      </button>
      <div className="pt-20">
        <h2 className="text-2xl font-bold">{quiz.judul}</h2>
        <p>{quiz.deskripsi}</p>
        <p>Waktu Mulai: {quiz.waktu_mulai}</p>
        <p>Waktu Selesai: {quiz.waktu_selesai}</p>
      </div>
    </div>
  );
}