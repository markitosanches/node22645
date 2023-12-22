import Header from "./components/Header";
import ManyTasks from "./components/ManyTasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import { useState, useEffect }  from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [tasks, setTasks] = useState([])

  const fetchTasks = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }

  useEffect(() =>{
    const getTasks  = async () => {
      const taskFromServer = await fetchTasks('http://localhost:5000/tasks')
      setTasks(taskFromServer)
    }
    getTasks()
  },[])

  const deleteTask = async (id) => {
    //console.log(id)
    await  fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'delete',
    })
    setTasks(tasks.filter((task)=>task.id!==id))

  }
  const toggleReminder = async (id) => {
    const taskToggle = await fetchTasks(`http://localhost:5000/tasks/${id}`)
    const updTask = {...taskToggle, reminder: !taskToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'put',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })
    const data = await res.json()
    setTasks(tasks.map((task)=>task.id === id ? {...task, reminder:data.reminder} : task))
  }

  const addTask = async (task) => {
    // const lastId = tasks.length > 0 ? tasks[tasks.length -1].id : 0
    // const id = lastId + 1
    const res = await fetch('http://localhost:5000/tasks',{
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const newTask = await res.json()
    setTasks([...tasks, newTask])
  }
  const [showAddTask, setShowAddTask] = useState(false)
  return (
    <BrowserRouter>
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

