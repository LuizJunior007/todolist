import { useEffect, useReducer, useRef, useState } from "react";
import TaskForm from "../../components/TaskForm";
import reducer from '../../reducers/TaskReducer/reducer';
import Alert from "../../components/Alert";
import Row from "../../components/Row";

const Home = () => {

    const [ task, setTask ] = useState('');
    const [ msg, setMsg ] = useState({});
    const [ state, dispatch ] = useReducer(reducer, { task: '', tasks: [], checkedTasks: [] });
    const taskInput = useRef(null);

    const handleChangeValue = (e) => {

        setTask(e);
    }

    const handleFirstLetterUpper = (string) => {

        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleAddTask = (e) => {

        e.preventDefault();
        
        
        if(task.length > 3){

            taskInput.current.classList.remove('input-error');
            dispatch({ type: 'ADD', payload: handleFirstLetterUpper(task) });
            setTask('');
            setMsg({
                status: 'success',
                text: 'Adicionado com sucesso',
                show: true
            });
            
        } else{

            setMsg({
                status: 'error',
                text: 'Mínimo 4 caracteres',
                show: true
            });

            taskInput.current.focus();
            taskInput.current.classList.add('input-error')
        }

    }

    const handleDeleteTask = (index) => {

        dispatch({ type: 'DEL', payload: index });
        setMsg({
            status: 'success',
            text: 'Removido com sucesso',
            show: true
        });

    }

    const handleCheckedTask = (index) => {

        dispatch({ type: 'CHECK', payload: index });
        setMsg({
            status: 'success',
            text: 'Marcada como realizada',
            show: true
        });
    }

    const handleDeleteCheckedTask = (index) => {

        dispatch({ type: 'DELCHECKED', payload: index });
        setMsg({
            status: 'success',
            text: 'Removido com sucesso',
            show: true
        });

    }

    useEffect(() => {

        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const checkedTasks = JSON.parse(localStorage.getItem('checkedTasks'));

        dispatch({ type: 'GETALLTASKS', payload: { tasks: tasks, checkedTasks: checkedTasks } });

    }, []);

    useEffect(() => {

        localStorage.setItem('tasks', JSON.stringify(state.tasks));
        localStorage.setItem('checkedTasks', JSON.stringify(state.checkedTasks));

    }, [state.tasks, state.checkedTasks]);

    return(
        <div className="m-3">
            <TaskForm task={task} taskInput={taskInput} changedValue={handleChangeValue} addTask={handleAddTask} />
            {msg.show && <Alert msg={msg} />}
            <Row tasks={state.tasks} checkTask={handleCheckedTask} deleteTask={handleDeleteTask} checkedTasks={state.checkedTasks} deleteCheckedTask={handleDeleteCheckedTask} />
        </div>
    );

}

export default Home;