import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchQuizData = createAsyncThunk('quiz/fetchQuizData', async () => {
  const response = await axios.get('http://localhost:8000/quiz/all');
  return response.data.data;
});