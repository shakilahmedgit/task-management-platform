
import PropTypes from 'prop-types';
import TaskItem from "../TaskItem/TaskItem";


const TaskList = ({ tasks, status, onDrop }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const task = JSON.parse(e.dataTransfer.getData('task'));
    onDrop(task);
  };

  return (
    <div
      className="task-list"
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e)}
    >
      <h2>{status.charAt(0).toUpperCase() + status.slice(1)}</h2>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </div>
  );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    status: PropTypes.string.isRequired,
    onDrop: PropTypes.func.isRequired,
};

export default TaskList;
