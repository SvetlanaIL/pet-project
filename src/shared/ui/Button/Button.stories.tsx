import type {Meta, StoryObj} from '@storybook/react';

import {Button, ThemeButton} from './Button';
import {Theme} from "app/providers/ThemeProvider";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof Button> = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Button'
    },
};

export const ClearTheme: Story = {
    args: {
        ...Primary.args,
        theme: ThemeButton.CLEAR,
    },
};

export const OutlinedTheme: Story = {
    args: {
        ...Primary.args,
        theme: ThemeButton.OUTLINED,
    },
};

export const OutlinedDarkTheme: Story = {
    args: {
        ...OutlinedTheme.args,
    },
};
OutlinedDarkTheme.decorators = ThemeDecorator(Theme.DARK);
