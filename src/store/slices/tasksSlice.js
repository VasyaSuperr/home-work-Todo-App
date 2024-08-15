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
  reducers: {},
});

const { reducer } = tasksSlice;

export default reducer;
