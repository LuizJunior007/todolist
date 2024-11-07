import Title from "../Title";

const Tasks = ({ tasks, deleteTask, checkTask }) => {

    const reversedTasks = tasks.reverse();

    return(
        <div className="table-responsive bg-white p-3 rounded shadow">

            <Title title={'Pendentes'} />

            <table className="table align-middle table-striped">
                <thead>
                    <tr>
                        <th scope="col">Descrição</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {tasks.length> 0 ? reversedTasks.map((t, i) => 
                        <tr key={i}>
                            <td>{t}</td>
                            <td>
                                <button type="button" className="btn btn-outline-success rounded-circle me-2" onClick={() => checkTask(i)} title="Marcar como realizada"><i className="bi bi-check2"></i></button>
                                <button type="button" className="btn btn-outline-danger rounded-circle" onClick={() => deleteTask(i)} title="Remover"><i className="bi bi-trash3"></i></button>
                            </td>
                        </tr>
                    ) : 
                    
                    <tr>
                        <td colSpan={2}>Nenhuma tarefa foi encontrada</td>
                    </tr>}
                </tbody>
            </table>
        </div>
    );

}

export default Tasks;