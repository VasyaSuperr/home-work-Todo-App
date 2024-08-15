import { connect } from 'react-redux';
import TasksListItem from './TasksListItem';

function TasksList ({ tasks }) {
  const mapTasks = t => <TasksListItem key={t.id} task={t} />;

  return (
    <section>
      <h2>Tasks List</h2>
      <ul>{tasks.map(mapTasks)}</ul>
    </section>
  );
}

const mapStateToProps = ({ tasksList }) => tasksList;

export default connect(mapStateToProps)(TasksList);
