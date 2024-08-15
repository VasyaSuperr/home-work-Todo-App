import { connect } from 'react-redux';
import TasksListItem from './TasksListItem';
import { removeTask } from '../../store/slices/tasksSlice';

function TasksList ({ tasks, remove }) {
  const mapTasks = t => <TasksListItem key={t.id} task={t} remove={remove} />;

  return (
    <section>
      <h2>Tasks List</h2>
      <ul>{tasks.map(mapTasks)}</ul>
    </section>
  );
}

const mapStateToProps = ({ tasksList }) => tasksList;

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
