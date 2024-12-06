import CheckedTasks from "../CheckedTasks";
import Tasks from "../Tasks";
import P from 'prop-types';

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

Row.propTypes = {
    tasks: P.array.isRequired,
    deleteTask: P.func.isRequired,
    checkTask: P.func.isRequired,
    checkedTasks: P.array,
    deleteCheckedTask: P.array
}

export default Row;