import CheckedTasks from ".";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

describe('checked tasks component', () => {

    it('should render checked tasks on screen', () => {

        render(<CheckedTasks checkedTasks={['tarefa1', 'tarefa2']} />);
        const el = document.querySelector('.table-responsive');
        expect(el).toBeInTheDocument();
    })

});