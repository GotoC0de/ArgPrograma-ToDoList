/* eslint-disable no-unused-vars */
import React from 'react'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({tasks, deleteTask, search, currentTasks}) => {
  return (
    <div>
        {
            tasks.length == 0 && <h2>Aun no has ingresado tareas</h2>
        }
        {
            tasks.length != 0 && search != '' && currentTasks.length == 0 && <h2>No hay tareas que coincidan con ese filtro</h2>
        }

        {currentTasks.map(task =>(
            <TaskItem task = {task} key={task.id} deleteTask = {deleteTask}/> 
        ))}
        
    </div>
  )
}

export default TaskList