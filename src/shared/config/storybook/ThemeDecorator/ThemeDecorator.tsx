import {Decorator} from '@storybook/react';
import {Theme, ThemeProvider} from 'app/providers/ThemeProvider';
import themeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story/>
        </div>
    </ThemeProvider>

);