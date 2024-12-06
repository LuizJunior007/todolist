import TaskForm from ".";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('task form component', () => {

    it('should render the task form', () => {

        render(<TaskForm task="teste" />);
        const el = document.querySelector('form');
        expect(el).toBeInTheDocument();
    })

});