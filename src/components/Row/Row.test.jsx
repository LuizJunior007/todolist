import Row from '.';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckedTasks from '../CheckedTasks';

describe('row component', () => {

    it('should render row component', () => {

        render(
            <Row tasks={['task1', 'task2']} checkedTasks={['task1', 'task2']}><CheckedTasks checkedTasks={['task1', 'task2']} /></Row>);
        const el = document.querySelector('.row');
        expect(el).toBeInTheDocument();
    })

});