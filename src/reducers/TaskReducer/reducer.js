const reducer = (state, action) => {

    switch(action.type){

        case 'GETALLTASKS':

            return{
                ...state, tasks: [...state.tasks, ...action.payload.tasks], checkedTasks: [...state.checkedTasks, ...action.payload.checkedTasks]
            }

        case 'ADD':
            return{
                ...state, tasks: [...state.tasks, action.payload]
            }
        case 'DEL':
            
            const removed = state.tasks.filter((t, i) => {
                return action.payload !== i;
            });

            return{
                ...state, tasks: removed
            }

        case 'CHECK':
            const removedEl = state.tasks.filter((t, i) => {
                return action.payload !== i;
            });

            const checked = state.tasks.filter((t, i) => {
                return action.payload === i;
            });

            return{
                ...state, tasks: removedEl,  checkedTasks: [...state.checkedTasks, ...checked]
            }

        case 'DELCHECKED':
        
            const removedChecked = state.checkedTasks.filter((t, i) => {
                return action.payload !== i;
            });

            return{
                ...state, checkedTasks: removedChecked
            }

        default:
            throw new Error('Type inválido !');
    }
}

export default reducer;