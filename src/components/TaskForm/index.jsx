const TaskForm = ({ task, changedValue, addTask, taskInput }) => {

    return(
        <form onSubmit={addTask}>
            <div className="row">
                <div className="col-12">
                    <div>
                        <input type="text" id="task" ref={taskInput} value={task} onChange={(e) => changedValue(e.target.value)} placeholder="Descreva sua tarefa" autoComplete="off" className="inputs" />
                    </div>

                    <div>
                        <button type="submit" className="btns">Adicionar</button>
                    </div>
                </div>
            </div>
        </form>
    );

}

export default TaskForm;