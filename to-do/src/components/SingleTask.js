import { FaTimes } from 'react-icons/fa'

const SingleTask = ({task, onDelete, onToggle}) =>{
  const dateDisplay = (dataString) => {
    const date = new Date(dataString)
    const formattedDate = `${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} at ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
    return formattedDate
  } 
  return(
    <div className = {`bg-blue-200 py-2 my-2 px-4 cursor-pointer rounded ${task.reminder ? 'border-l-8 border-blue-800' : ''}`}  onDoubleClick={()=>onToggle(task.id)}>
        <h3 className="flex items-center justify-between font-bold text-lg text-[#000000]">{task.text}
            <FaTimes className='text-red-600 pointer' onClick={()=>onDelete(task.id)}/>
        </h3>
        <p>{dateDisplay(task.day)}</p>
    </div>
  )  
}
export default SingleTask

