import { useState } from "react";
import { Tasks } from "../interfaces";

type UseTaskManagerProps = {
    createTask: (newTask: Tasks) => void,
    updateTask: (id: string, task: Tasks) => void,
    deleteTask: (id: string) => void,
    tasks: Tasks[]
}

export const useTaskManager = (): UseTaskManagerProps => {
    const [tasks, setTasks] = useState<Tasks[]>([]);

    const createTask = (newTask: Tasks) => {
        return setTasks(prevState => [...prevState, newTask])
    }

    const updateTask = (id: string, task: Tasks) => {
        const taskReference = tasks.findIndex(task => task.uuid === id);
        const tasksClone = tasks.map(i => i);

        tasksClone[taskReference].isCompleted = task.isCompleted;
        tasksClone[taskReference].title = task.title;

        return setTasks(tasksClone);
    }

    const deleteTask = (id: string) => {
        return setTasks(prevState => prevState.filter(task => task.uuid !== id))
    }

    return {
        createTask,
        updateTask,
        deleteTask,
        tasks
    }
};