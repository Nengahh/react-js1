// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const QuestionList = ({ match }) => {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/question/${match.params.id}`);
//       setQuestions(response.data.data);
//       setLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!Array.isArray(questions) || questions.length === 0) {
//     return <div>No questions available for this quiz</div>;
//   }

//   return (
//     <div>
//       {questions.map((question) => (
//         <div key={question.id}>
//           <h3>{question.pertanyaan}</h3>
//           <p>{question.opsi_jawaban}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QuestionList;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});


  const handleAnswerClick = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };


  



  
  const { id } = useParams();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/question/${id}`);
      setQuestions(response.data.data);
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

  if (!Array.isArray(questions) || questions.length === 0) {
    return <div>No questions available for this quiz</div>;
  }
  return (
    <div>
      {questions.map((question) => (
        <div key={question.ID} className="p-4 border rounded shadow mb-4">
          <h3 className="text-xl font-bold mb-2">{question.Pertanyaan}</h3>
          {question.OpsiJawaban.split(',').map((answer, index) => {
            const option = String.fromCharCode(97 + index);
            const isCorrectAnswer = index === question.JawabanBenar - 1;
            const isSelected = selectedAnswers[question.ID] === index;
            return (
              <button 
                key={option} 
                onClick={() => handleAnswerClick(question.ID, index)}
                className={`mb-1 block w-full text-left ${isSelected ? 'bg-blue-500 text-white' : 'bg-white'} ${isCorrectAnswer ? 'font-bold' : ''}`}
              >
                {`${option}. ${answer.trim()}`}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );



};

export default QuestionList;