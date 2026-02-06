import TodoItem from "./TodoItem"

const TodoList = (props) => {
    const {
        tasks = [],
        onDeleteTaskButtonClick,
        onTaskCompleteChange,
        filteredTasks,
        firstIncompleteTaskId,
        firstIncompleteTaskRef,
    } = props


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
                    ref={id === firstIncompleteTaskId ? firstIncompleteTaskRef : null}
                    onDeleteTaskButtonClick={onDeleteTaskButtonClick}
                    onTaskCompleteChange={onTaskCompleteChange}
                />
            ))}
      </ul>
    )
}

export default TodoList