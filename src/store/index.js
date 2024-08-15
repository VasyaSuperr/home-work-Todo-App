import { configureStore } from '@reduxjs/toolkit';
import tasksReduser from './slices/tasksSlice';

const store = configureStore({
  reducer: {
    tasksList: tasksReduser,
  },
});

export default store;
