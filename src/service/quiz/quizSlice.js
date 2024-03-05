// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Membuat async action untuk mengambil quiz dari server
// export const fetchQuizzes = createAsyncThunk(
//   'quiz/fetchQuizzes',
//   async () => {
//     const response = await fetch('http://localhost:8000/quiz/all');
//     const data = await response.json();
//     return data;
//   }
// );

// const initialState = {
//   quizzes: [],
//   status: 'idle',
//   error: null
// };

// export const quizSlice = createSlice({
//   name: "quiz",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchQuizzes.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchQuizzes.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.quizzes = action.payload;
//       })
//       .addCase(fetchQuizzes.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default quizSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchQuizData = createAsyncThunk('quiz/fetchQuizData', async () => {
  const response = await axios.get('http://localhost:8000/quiz/all');
  return response.data;
});

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuizData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchQuizData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quizSlice.reducer;