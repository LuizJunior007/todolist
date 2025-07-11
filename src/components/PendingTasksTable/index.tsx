import { useTasks } from "../../context/TaskContext";
import { dateFormat } from "../../helpers";

const PendingTasksTable = () => {

    const { tasks, removeTask, checkedTask } = useTasks();

    return(
        <div className="table-responsive mt-4 rounded">
            <table className="table align-middle shadow-sm">
                <thead>
                    <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Data de início</th>
                        <th scope="col">Status</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        tasks.length !== 0
                        ?
                        tasks.map((t, i) => 
                            <tr key={i}>
                                <td>{t.title}</td>
                                <td>{t.description}</td>
                                <td>{dateFormat(t.date)}</td>
                                <td>
                                    <span className={`badge rounded-pill ${t.status === 'realizado' ? 'text-bg-success' : (t.status === 'pendente' ? 'text-bg-warning' : '')}`}>{t.status}</span>
                                </td>
                                <td>
                                    <button type="button" className="btn" title="Marcar como realizada" onClick={() => checkedTask(i)}>
                                        <i className="bi bi-check text-success"></i>
                                    </button>

                                    <button type="button" className="btn" title="Remover" onClick={() => removeTask(i)}>
                                        <i className="bi bi-trash text-danger"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                        : 
                        <tr>
                            <td colSpan={5}>Nenhuma tarefa foi encontrada</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );

}

export default PendingTasksTable;