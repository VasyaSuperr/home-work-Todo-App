import * as yup from 'yup';

export const TASKS_VALIDATION_SCHEMA = yup.object({
  tasksInfo: yup
    .string()
    .min(2, 'Task must be at least 2 characters long')
    .max(100, 'Task must be less than 100 characters'),
});
