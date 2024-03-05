import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const res = await axios.get('/api/quiz');
      setQuizzes(res.data);
    };

    fetchQuizzes();
  }, []);

  return (
    <div>
      {quizzes.map((quiz) => (
        <div key={quiz.id}>
          <h2>{quiz.judul}</h2>
          <p>{quiz.deskripsi}</p>
          {/* Add more details and edit/delete buttons */}
        </div>
      ))}
    </div>
  );
}

export default QuizList;