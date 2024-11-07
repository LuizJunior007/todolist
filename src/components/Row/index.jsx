import CheckedTasks from "../CheckedTasks";
import Tasks from "../Tasks";

const Row = ({ tasks, deleteTask, checkTask, checkedTasks, deleteCheckedTask }) => {

    return(
        <div className="row">
            <div className="col-md-6">
                <Tasks tasks={tasks} deleteTask={deleteTask} checkTask={checkTask} />
            </div>

            <div className="col-md-6 mt-3 mt-md-0">
                <CheckedTasks checkedTasks={checkedTasks} deleteCheckedTask={deleteCheckedTask} />
            </div>
        </div>
    );

}

export default Row;