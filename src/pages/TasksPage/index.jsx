import React from 'react';
import TasksForm from '../../components/TasksForm';
import TasksList from '../../components/TasksList';

function TasksPage () {
  return (
    <div>
      <header>Page Header</header>
      <main>
        <h1>TasksPage</h1>
        <TasksForm />
        <TasksList />
      </main>
      <footer>Page Footer</footer>
    </div>
  );
}

export default TasksPage;
