import {useState, useEffect, useRef, useMemo, useCallback} from 'react'
import taskAPI from '../api/tasksAPI'

const useTasks = () => {

    const [tasks, setTasks] = useState([])

    const [newTaskTitle, setNewTaskTitle] = useState('')    
    const [searchQuery, setSearchQuery] = useState('')

    const newTaskInputRef = useRef(null)

    const deleteAllTasks = useCallback(() => {
        const isConfirmed = confirm('Are you sure you want to delete all?')

        if (isConfirmed){
            taskAPI.deleteAll(tasks).then(() => setTasks([]))
        }
    }, [tasks])
    
    const deleteTask = useCallback((taskId) => {

        taskAPI.delete(taskId)
            .then(() => {
                setTasks(
                    tasks.filter((task) => task.id !== taskId)
                )
            })
    }, [tasks])
    
    const toggleTaskComplete = useCallback((taskId, isDone) => {
        taskAPI.toggleComplete(taskId, isDone)
            .then(()=>{
                setTasks(
                tasks.map((task) => {
                    if (task.id === taskId) {
                        return { ...task, isDone }
                    }

                    return task
                })
        )
            })
    }, [tasks])

    const addTask = useCallback((title) => {
        const newTask = {
            title,
            isDone: false,
        }

        taskAPI.add(newTask)
            .then((addedTask) => {
                setTasks((prevTasks) => [...prevTasks, addedTask])
                setNewTaskTitle('')
                setSearchQuery('')
                newTaskInputRef.current.focus()
            })
        
    }, [])

    const filteredTasks = useMemo(() => {
        const clearSearchQuery = searchQuery.trim().toLowerCase()
        return clearSearchQuery.length > 0
        ? tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery))
        : null
    }, [searchQuery, tasks])

    useEffect( ()=> {
        newTaskInputRef.current.focus()

        taskAPI.getAll().then(setTasks)
    }, [])

    return {
        tasks,
        filteredTasks,
        deleteAllTasks, 
        deleteTask, 
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask
    }
}
export default useTasks