import { connect } from 'react-redux';
import TasksListItem from './TasksListItem';
import { removeTask, completedTask } from '../../store/slices/tasksSlice';
import styles from './TasksList.module.sass';

function TasksList ({ tasks, remove, toggleCompletedTask }) {
  const mapTasks = t => (
    <TasksListItem
      key={t.id}
      task={t}
      remove={remove}
      toggleCompletedTask={toggleCompletedTask}
    />
  );

  return (
    <section className={styles.tasksListWrapper}>
      <ul>{tasks.map(mapTasks)}</ul>
    </section>
  );
}

const mapStateToProps = ({ tasksList }) => tasksList;

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeTask(id)),
  toggleCompletedTask: id => dispatch(completedTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
