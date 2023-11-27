/* eslint-disable no-unused-vars */
import React from 'react'
import './TaskItem.css'

const TaskItem = ({task, deleteTask}) => {
  return (
    <div className='task-item'>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <span>{task.createAt}</span>
        <button style={{
          height = '30px'
        }} className='btn-item' onClick={ () => deleteTask(task.id)}>Finalizar</button>
    </div>
  )
}

export default TaskItem