import { IoTrashOutline } from 'react-icons/io5';
import styles from './TasksListItem.module.sass';

function TasksListItem ({ task: { id, tasksInfo }, remove }) {
  return (
    <li className={styles.taskItem}>
      <p className={styles.taskInfo}>{tasksInfo}</p>
      <button onClick={() => remove(id)}>
        <IoTrashOutline />
      </button>
    </li>
  );
}

export default TasksListItem;
