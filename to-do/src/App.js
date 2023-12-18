import Header from "./components/Header";
import ManyTasks from "./components/ManyTasks";
import AddTask from "./components/AddTask";
import { useState }  from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        "id": 1,
        "text": "Buy groceries",
        "day": "2023-12-12 16:30:00",
        "reminder": true
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
        "reminder": false
    },
    {
        "id": 4,
        "text": "Write in a journal",
        "day": "2024-01-16 12:45:00",
        "reminder": false
    }    
])

const deleteTask = (id) => {
  //console.log(id)
  setTasks(tasks.filter((task)=>task.id!==id))

}
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=>task.id === id ? {...task, reminder:!task.reminder} : task))
}
  return (
    <div className="font-sans min-h-screen">
      <div className="container mx-auto p-8 border-4 border-blue-200 rounded-lg mt-16 max-w-screen-md">
        <Header/> 
        <AddTask/>
        {tasks.length > 0 ?(  
        <ManyTasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        ):(
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 font-bold">Empty list</div>
        )}
      </div>
    </div>
  );
}

export default App;

