/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './App.css'
import './Components/index'
import { TaskForm, TaskList } from './Components/index'

function App() {
  const [search, setSearch] = useState('')
  const [currentTasks, setCurrentTasks] = useState([])
  const [tasks, setTask] = useState([])
  const addTask = (task) => {
    setTask([...tasks, task])
  }
  const deleteTask = (taskId) => {
    setTask(tasks.filter(task => task.id != taskId))
  }
  const handleFilterChange = (e) => {
    setSearch(e.target.value)
  }
  
  useEffect(() => {
    setCurrentTasks(tasks.filter(task => task.title.toLowerCase().includes(search.toLocaleLowerCase())))
  }, [search, tasks])

  return (
    <>
      <input placeholder='Busca la tarea...' value={search} onChange={handleFilterChange} />
      <TaskForm addTask = {addTask}/>
      <TaskList currentTasks = {currentTasks} tasks = {tasks} search = {search} deleteTask = {deleteTask}/>
    </>
  )
}

export default App
