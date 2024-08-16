import { IoTrashOutline } from 'react-icons/io5';
import classNames from 'classnames';
import styles from './TasksListItem.module.sass';

function TasksListItem ({
  task: { id, tasksInfo, isDone },
  remove,
  toggleCompletedTask,
}) {
  const taskIsDone = classNames(styles.taskInfo, { [styles.taskDone]: isDone });

  return (
    <li className={styles.taskItem}>
      <input
        type='checkbox'
        checked={isDone}
        onChange={() => toggleCompletedTask(id)}
      />
      <p className={taskIsDone}>{tasksInfo}</p>
      <button onClick={() => remove(id)}>
        <IoTrashOutline />
      </button>
    </li>
  );
}

export default TasksListItem;
