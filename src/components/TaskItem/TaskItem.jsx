
import PropTypes from 'prop-types';

const TaskItem = ({ task }) => {
  return (
    <div className="task-item bg-gray-100 p-4 rounded shadow mb-4" draggable onDragStart={(e) => {
      e.dataTransfer.setData('task', JSON.stringify(task));
    }}>
      <h3 className="text-lg font-semibold">{task?.title}</h3>
      <p className="text-sm mb-2">{task?.description}</p>
      <p className="text-xs">Deadline: {task?.deadline}</p>
      <p className="text-xs">Priority: {task?.priority}</p>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  }),
};

export default TaskItem;