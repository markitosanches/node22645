const AddTask = () => {
    return(
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task"/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="date-time-local" placeholder="Day & Time"/>
            </div>
            <div className="form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox"/>
            </div>
            <input type="submit" className="btn btn-gray btn-block mt-4" value="Save Task"/>
        </form>
    )
}
export default AddTask