import { createContext, useMemo } from "react";
import useTasks from "./useTasks";
import useIncompleteTaskScroll from "./useIncomleteTaskScroll";

export const TasksContext = createContext({});

export const TasksProvider = (props) => {
  const { children } = props;

  const {
    tasks,
    filteredTasks,
    deleteAllTasks,
    deleteTask,
    toggleTaskComplete,
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTask,
    disapperingTaskId,
    apperingTaskId,
  } = useTasks();

  const { firstIncompleteTaskRef, firstIncompleteTaskId } =
    useIncompleteTaskScroll(tasks);

  const value = useMemo(
    () => ({
      tasks,
      filteredTasks,
      deleteAllTasks,
      deleteTask,
      toggleTaskComplete,
      searchQuery,
      setSearchQuery,
      newTaskInputRef,
      addTask,
      disapperingTaskId,
      apperingTaskId,
      firstIncompleteTaskRef,
      firstIncompleteTaskId,
    }),
    [
      tasks,
      filteredTasks,
      deleteAllTasks,
      deleteTask,
      toggleTaskComplete,
      searchQuery,
      setSearchQuery,
      newTaskInputRef,
      addTask,
      disapperingTaskId,
      apperingTaskId,
      firstIncompleteTaskRef,
      firstIncompleteTaskId,
    ],
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
