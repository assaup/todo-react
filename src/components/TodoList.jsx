import TodoItem from "./TodoItem"

const TodoList = (props) => {
    const {
        tasks = [],
        onDeleteTaskButtonClick,
        onTaskCompleteChange,
    } = props


    const hasTasks = true
    
    if (!hasTasks){
         return <div className="todo__empty-message"></div>
    }
    
    
    return (
        <ul className="todo__list">
            {tasks.map(({id, title, isDone})=>(
                <TodoItem 
                    className="todo__item"
                    key={id}
                    id={id}
                    title={title}
                    isDone={isDone}
                    onDeleteTaskButtonClick={onDeleteTaskButtonClick}
                    onTaskCompleteChange={onTaskCompleteChange}
                />
            ))}
      </ul>
    )
}

export default TodoList