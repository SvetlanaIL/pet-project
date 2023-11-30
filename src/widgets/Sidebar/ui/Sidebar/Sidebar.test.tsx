import {fireEvent, screen} from "@testing-library/react";
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import {renderWithTranslation} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe('Sidebar', () => {
    test('render sidebar', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle sidebar', () => {
        renderWithTranslation(<Sidebar/>)
        const toggleButton = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});