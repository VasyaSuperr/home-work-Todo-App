import { ErrorMessage, Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { TASKS_VALIDATION_SCHEMA } from '../../utils/validationSchemas';
import { createTask } from './../../store/slices/tasksSlice';
import styles from './TasksForm.module.sass';

function TasksForm ({ create }) {
  const initialValues = {
    tasksInfo: '',
  };

  const submitHandler = (value, { resetForm }) => {
    create(value);
    resetForm();
  };

  return (
    <section className={styles.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={TASKS_VALIDATION_SCHEMA}
      >
        <Form>
          <div className={styles.inputErrorWrapper}>
            <Field
              className={styles.inputTask}
              type='text'
              name='tasksInfo'
              placeholder='Create a new todo...'
              autoFocus
            />
            <ErrorMessage
              className={styles.errorMessage}
              name='tasksInfo'
              component='span'
            />
          </div>
        </Form>
      </Formik>
    </section>
  );
}

const mapDispatchToProps = dispatch => ({
  create: value => dispatch(createTask(value)),
});

export default connect(null, mapDispatchToProps)(TasksForm);
