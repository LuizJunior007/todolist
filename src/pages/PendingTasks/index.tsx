import PendingTasksTable from "../../components/PendingTasksTable";
import { appName } from "../../config";

const PendingTasks = () => {

    document.title = 'Tarefas | ' + appName;

    return(
        <section>
            <h1 className="fs-4">
                Tarefas
            </h1>

            <PendingTasksTable />
        </section>
    );

}

export default PendingTasks;