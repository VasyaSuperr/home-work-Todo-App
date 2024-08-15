import React from 'react';
import styles from './TasksPage.module.sass';
import TasksForm from '../../components/TasksForm';
import TasksList from '../../components/TasksList';

function TasksPage () {
  return (
    <div className={styles.pageContainer}>
      <header>Page Header</header>
      <main className={styles.mainPage}>
        <h1>TasksPage</h1>
        <TasksForm />
        <TasksList />
      </main>
      <footer>Page Footer</footer>
    </div>
  );
}

export default TasksPage;
