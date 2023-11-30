import {render, screen} from "@testing-library/react";
import {Button, ThemeButton} from "shared/ui/Button/Button";

describe('Button', () => {
    test('render the button', () => {
        render(<Button>Test</Button>)
        expect(screen.getByTestId('button')).toBeInTheDocument();
    });

    test('tests clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
        expect(screen.getByTestId('button')).toHaveClass('clear');
        screen.debug();
    });
});