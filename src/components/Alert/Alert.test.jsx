import Alert from ".";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("Alert component", () => {

    it('should be render alert it correct text', () => {
        render(<Alert msg="Minha mensagem" />);
        const alertElement = screen.getByRole('alert');
        expect(alertElement).toBeInTheDocument();
    })

});