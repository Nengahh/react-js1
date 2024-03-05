import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function QuizEdit() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // Call API to create or update quiz
    await axios.post('/api/quiz', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Add input fields for quiz details */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default QuizEdit;
