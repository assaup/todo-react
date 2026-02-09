import { useContext } from "react"
import TodoItem from "./TodoItem"
import { TasksContext } from "../context/TasksContext"

const TodoList = () => {
    const {
        tasks,
        filteredTasks
    } = useContext(TasksContext)


    const hasTasks = tasks.length > 0
    const isEmptyFilteredTasks = filteredTasks?.length === 0
    
    if (!hasTasks){
        return <div className="todo__empty-message">There are no tasks yet</div>
    }
    
    if (hasTasks && isEmptyFilteredTasks) {
        return <div className="todo__empty-message">Tasks not found</div>
    }
    
    return (
        <ul className="todo__list">
            {(filteredTasks ?? tasks).map(({id, title, isDone})=>(
                <TodoItem 
                    className="todo__item"
                    key={id}
                    id={id}
                    title={title}
                    isDone={isDone}
                />
            ))}
      </ul>
    )
}

export default TodoList