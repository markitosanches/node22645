import SingleTask from "./SingleTask"

const ManyTasks = ({tasks, onDelete, onToggle}) => {
    return(
        <>
        {tasks.length > 0 ?( 
            tasks.map((task)=>(
                <SingleTask task={task} key={task.id} onDelete={onDelete} onToggle={onToggle}/>
            ))
        ):(
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 font-bold">Empty list</div>
          )}
        </>
    )
}
export default ManyTasks