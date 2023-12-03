/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './TaskItem.css'

const TaskItem = ({task, deleteTask}) => {
  return (
    <div className='task-item'>
        <h3>{task.title}</h3>
        <p>Descripción: {task.description}</p>
        <span>Creacion: {task.createAt}</span>
        <button className='btn-item' onClick={ () => deleteTask(task.id)}>Finalizar</button>
    </div>
  )
}

export default TaskItem