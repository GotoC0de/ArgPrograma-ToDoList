/* eslint-disable no-unused-vars */
import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import './TaskList.css'

const TaskList = ({tasks, deleteTask, search, currentTasks}) => {
  return (
    <div className='item-container'>
        {
            tasks.length == 0 && <h2 style={{color: 'white'}}>Ingrese una tarea...</h2>
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