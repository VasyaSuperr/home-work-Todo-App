import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tasks: [
    {
      id: uuidv4(),
      tasksInfo: 'Make the bad',
    },
    {
      id: uuidv4(),
      tasksInfo: 'Have a breakfast',
    },
  ],
};

const tasksSlice = createSlice({
  initialState,
  name: 'tasks',
  reducers: {
    removeTask: (state, { payload }) => {
      const foundTaskIndex = state.tasks.findIndex(c => c.id === payload);
      if (foundTaskIndex !== -1) {
        state.tasks.splice(foundTaskIndex, 1);
      }
    },
    createTask: (state, { payload }) => {
      state.tasks.push({
        ...payload,
        id: uuidv4(),
      });
    },
  },
});

const { reducer, actions } = tasksSlice;

export const { removeTask, createTask } = actions;

export default reducer;
