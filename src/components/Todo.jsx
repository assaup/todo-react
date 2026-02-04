import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
    const tasks = [
        {id: 'task-1', title: 'Купить молоко', isDone: false },
        {id: 'task-2', title: 'Покормить собаку', isDone: true },
    ]

    const deleteAllTasks = () => {
        console.log('delete')
    }
    
    const deleteTask = (taskId) => {
        console.log(`delete ${taskId}`)
    }
    
    const toggleTaskComplete = (taskId, isDone) => {
        console.log(`task ${taskId} ${isDone ? 'done' : 'dont done'}`)
    }

    const filterTask = (query) => {
        console.log(`Поиск ${query}`)
    }

    const addTask = () => {
        console.log('Задача добавлена!')
    }

    return (
        <div className="todo">
        <h1 className="todo__title">To Do List</h1>
            <AddTaskForm addTask={addTask}/>
            <SearchTaskForm onSearchInput={filterTask}/>
            <TodoInfo 
                total={tasks.length}
                done={tasks.filter(({ isDone }) => isDone).length}
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <TodoList 
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo