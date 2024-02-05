import React from 'react'
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComoponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

  return (
    <div>
      <div>
        Your Tasks:
      </div>
      <TaskComoponent task={defaultTask} ></TaskComoponent>
    </div>
  )
}


export default TaskListComponent;

