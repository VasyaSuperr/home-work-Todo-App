import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tasks: [
    {
      id: uuidv4(),
      isDone: false,
      tasksInfo: 'Make the bad',
    },
    {
      id: uuidv4(),
      isDone: false,
      tasksInfo: 'Have a breakfast',
    },
  ],
};

const tasksSlice = createSlice({
  initialState,
  name: 'tasks',
  reducers: {
    removeTask: (state, { payload }) => {
      const foundTaskIndex = state.tasks.findIndex(t => t.id === payload);
      if (foundTaskIndex !== -1) {
        state.tasks.splice(foundTaskIndex, 1);
      }
    },
    createTask: (state, { payload }) => {
      state.tasks.push({
        ...payload,
        isDone: false,
        id: uuidv4(),
      });
    },
    completedTask: (state, { payload }) => {
      const findTask = state.tasks.find(t => t.id === payload);
      if (findTask) {
        findTask.isDone = !findTask.isDone;
      }
    },
  },
});

const { reducer, actions } = tasksSlice;

export const { removeTask, createTask, completedTask } = actions;

export default reducer;
