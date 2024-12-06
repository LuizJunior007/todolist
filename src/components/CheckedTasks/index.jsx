import Title from "../Title";
import P from 'prop-types';

const CheckedTasks = ({ checkedTasks, deleteCheckedTask }) => {

    const reversedTasks = checkedTasks.reverse();

    return(
        <div className="table-responsive bg-white p-3 rounded shadow">

            <Title title={'Realizadas'} />

            <table className="table align-middle table-striped">
                <thead>
                    <tr>
                        <th scope="col">Descrição</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {checkedTasks.length > 0 ? reversedTasks.map((t, i) => 
                        <tr key={i}>
                            <td>{t}</td>
                            <td>
                                <button type="button" className="btn btn-outline-danger rounded-circle" onClick={() => deleteCheckedTask(i)} title="Remover"><i className="bi bi-trash3"></i></button>
                            </td>
                        </tr>
                    ) : 
                    <tr>
                        <td colSpan={2}>Nenhum tarefa foi encontrada</td>
                    </tr>
                    }
                </tbody>
            </table>
        </div>
    );

}

CheckedTasks.protoTypes = {
    checkedTasks: P.array.isRequired,
    deleteCheckedTask: P.array
}

export default CheckedTasks;