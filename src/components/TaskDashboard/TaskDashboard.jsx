
import { useState } from 'react';
import TaskList from '../TaskList/TaskList';

const TaskDashboard = () => {
  const [tasks, setTasks] = useState({
    todo: [],
    ongoing: [],
    completed: []
  });

  const handleDrop = (task, status) => {
    const newTasks = { ...tasks };
    newTasks[status] = [...newTasks[status], task];
    setTasks(newTasks);
  };

  return (
    <div className="task-dashboard flex flex-col md:flex-row justify-center items-center md:items-start">
      <TaskList
        tasks={tasks.todo}
        status="todo"
        onDrop={(task) => handleDrop(task, 'todo')}
      />
      <TaskList
        tasks={tasks.ongoing}
        status="ongoing"
        onDrop={(task) => handleDrop(task, 'ongoing')}
      />
      <TaskList
        tasks={tasks.completed}
        status="completed"
        onDrop={(task) => handleDrop(task, 'completed')}
      />
    </div>
  );
};

export default TaskDashboard;
