import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please insert a text')
            return
        }

        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange ={(e) =>setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="datetime-local" placeholder="Day & Time" value={day}  onChange ={(e) =>setDay(e.target.value)}/>
            </div>
            <div className="form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} onChange = {(e) => setReminder(e.target.checked)}/>
            </div>
            <input type="submit" className="btn btn-gray btn-block mt-4" value="Save Task"/>
        </form>
    )
}
export default AddTask