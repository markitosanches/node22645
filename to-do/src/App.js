import Header from "./components/Header";
import ManyTasks from "./components/ManyTasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import { useState, useEffect }  from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [tasks, setTasks] = useState([{
    "id": 1,
    "text": "Buy groceries",
    "day": "2023-12-12 16:30:00",
    "reminder": false
  },
  {
    "id": 2,
    "text": "Exercise for 30 minutes",
    "day": "2023-12-19 08:15:00",
    "reminder": true
  },
  {
    "id": 3,
    "text": "Read a book",
    "day": "2024-01-01 00:01:00",
    "reminder": true
  },
  {
    "id": 4,
    "text": "Write in a journal",
    "day": "2024-01-16 12:45:00",
    "reminder": true
  }])


  const deleteTask = async (id) => {
    //console.log(id)

    setTasks(tasks.filter((task)=>task.id!==id))

  }
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder:!task.reminder} : task))
  }

  const addTask = (task) => {
    const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0
    const id = lastId + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  const [showAddTask, setShowAddTask] = useState(false)
  return (
    <BrowserRouter basename="/react">
      <div className="font-sans min-h-screen">
        <div className="container mx-auto p-8 border-4 border-blue-200 rounded-lg mt-16 max-w-screen-md">
          <Header toggleForm={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>  
          { showAddTask && <AddTask onAdd={addTask}/>}
          <Routes>
            <Route path="/" element={<ManyTasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>}/>
            <Route path="/about" element={<About setShowAddTask={setShowAddTask}/>}/>
          </Routes>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

