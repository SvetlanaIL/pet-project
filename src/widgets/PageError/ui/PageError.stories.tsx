import type {Meta, StoryObj} from '@storybook/react';

import {Theme} from "app/providers/ThemeProvider";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {PageError} from "widgets/PageError/ui/PageError";

const meta: Meta<typeof PageError> = {
    title: 'Widgets/PageError',
    component: PageError,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};

Dark.decorators = ThemeDecorator(Theme.DARK);
