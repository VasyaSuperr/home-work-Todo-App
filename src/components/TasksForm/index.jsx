import { ErrorMessage, Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { TASKS_VALIDATION_SCHEMA } from '../../utils/validationSchemas';
import { createTask } from './../../store/slices/tasksSlice';

function TasksForm ({ create }) {
  const initialValues = {
    tasksInfo: '',
  };

  const submitHandler = (value, { resetForm }) => {
    create(value);
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
            name='tasksInfo'
            placeholder='Create a new todo...'
            autoFocus
          />
          <ErrorMessage name='tasksInfo' component='div' />
        </Form>
      </Formik>
    </section>
  );
}

const mapDispatchToProps = dispatch => ({
  create: value => dispatch(createTask(value)),
});

export default connect(null, mapDispatchToProps)(TasksForm);
