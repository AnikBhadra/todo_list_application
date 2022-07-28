import React, { useState } from 'react'
import './App.css'


function App() {

  const [todoList, setTodoList] = useState([])
  const [currentTask, setCurrentTask] = useState("")

  const addTask = () => {
    setTodoList([...todoList, currentTask])
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input type="text " placeholder='Task..'
          onChange={(event) => {
            setCurrentTask(event.target.value)
          }}
        />
        <button onClick={addTask}>Add Task</button>
        <hr />
        <ul>
          {todoList.map((val, key) => {
            return <li key={key}>{val}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
