import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class';

const TaskComoponent = ({task}) => {
  return (
    <div>
        <h2>
            Nombre: {task.name}
        </h2>
        <h3>
            Description: {task.description}
        </h3>
        <h4>
            Level: {task.level}
        </h4>
        <h5>
            this task is: { task.completed ? 'COMPLETED':'PENDING' }
        </h5>
    </div>
  );
};

TaskComoponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComoponent
