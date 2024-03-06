import {render, screen} from "@testing-library/react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

describe('Button', () => {
    test('render the button', () => {
        render(<Button>Test</Button>)
        expect(screen.getByTestId('button')).toBeInTheDocument();
    });

    test('tests clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>)
        expect(screen.getByTestId('button')).toHaveClass('clear');
        screen.debug();
    });
});