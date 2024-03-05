// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchQuizData } from "../../../service/quiz/quizSlice";

// const CardComponent = () => {
//   const dispatch = useDispatch();
//   const quizData = useSelector((state) => state.quiz.data);
//   const status = useSelector((state) => state.quiz.status);
//   const error = useSelector((state) => state.quiz.error);

//   useEffect(() => {
//     dispatch(fetchQuizData());
//   }, [dispatch]);

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (status === "failed") {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       {quizData.map((quiz) => (
//         <div key={quiz.ID}>
//           <h3>{quiz.Judul}</h3>
//           <p>{quiz.Deskripsi}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardComponent;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CardComponent = () => {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/quiz/all");
      setQuizData(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(quizData) || quizData.length === 0) {
    return <div>No quiz data available</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {quizData.map((quiz) => (
        <div key={quiz.ID} className="bg-white p-4 shadow-md rounded-md">
          <h3 className="text-xl font-bold mb-2">{quiz.Judul}</h3>
          <p className="mb-4">{quiz.Deskripsi}</p>
          <Link to={`/question/${quiz.ID}`} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Daftar Pertanyaan
          </Link>
        </div>
      ))}
    </div>
  );
};
export default CardComponent;