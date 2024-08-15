import { ErrorMessage, Field, Form, Formik } from 'formik';
import { TASKS_VALIDATION_SCHEMA } from '../../utils/validationSchemas';

function TasksForm () {
  const initialValues = {
    task: '',
  };

  const submitHandler = (value, { resetForm }) => {
    console.log(value);
    resetForm();
  };

  return (
    <section>
      <h2>TasksForm</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={TASKS_VALIDATION_SCHEMA}
      >
        <Form>
          <Field
            type='text'
            name='task'
            placeholder='Create a new todo...'
            autoFocus
          />
          <ErrorMessage name='task' component='div' />
        </Form>
      </Formik>
    </section>
  );
}

export default TasksForm;
