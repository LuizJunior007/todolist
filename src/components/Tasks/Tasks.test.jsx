import { render } from '@testing-library/react';
import Tasks from '.';
import "@testing-library/jest-dom";

describe('tasks component', () => {

    it('should render tasks', () => {

        render(<Tasks tasks={['task1', 'task2']} />);
        const el = document.querySelector('.table-responsive');
        expect(el).toBeInTheDocument();
    })

});