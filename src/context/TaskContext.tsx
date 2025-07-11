import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Task = {
    title: string;
    description: string;
    date: string;
    status: string;
}

type TaskContextType = {
    tasks: Task[];
    addTask: (data : Task) => void
    removeTask: (index: number) => void;
    checkedTask: (index: number) => void;
}

type Props = {
    children: ReactNode;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: Props) => {

    const [ tasks , setTasks ] = useState<Task[]>([]);

    useEffect(() => {

        const storedTasks = localStorage.getItem('tasks');

        if(storedTasks){

            setTasks(JSON.parse(storedTasks));
        }

    }, []);

    const addTask = (data: Task) => {

        data.status = 'pendente';

        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = [data, ...storedTasks];
        
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
    }

    const checkedTask = (index: number) => {

        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        storedTasks[index].status = 'realizado';

        localStorage.setItem('tasks', JSON.stringify(storedTasks));
        setTasks(storedTasks);

    }

    const removeTask = (index: number) => {

        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.splice(index, 1);

        localStorage.setItem('tasks', JSON.stringify(storedTasks));
        setTasks(storedTasks);

    }

    return(
        <TaskContext.Provider value={{ tasks, addTask, removeTask, checkedTask }}>
            { children }
        </TaskContext.Provider>
    );
}

export const useTasks = () => {

    const context = useContext(TaskContext);

    if(!context){

        throw new Error('Contexto não está disponivel');

    }

    return context;
}