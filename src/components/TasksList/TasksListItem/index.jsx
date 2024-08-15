function TasksListItem ({ task: { tasksInfo } }) {
  return (
    <li>
      <p>{tasksInfo}</p>
    </li>
  );
}

export default TasksListItem;
