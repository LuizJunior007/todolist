import Title from '.';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";

describe('Title component', () => {

    it('should render the title component', () => {

        const msg = 'mensagem';

        render(<Title title={msg} />);
        const el = screen.getByText(msg);
        expect(el).toBeInTheDocument();

    })

})