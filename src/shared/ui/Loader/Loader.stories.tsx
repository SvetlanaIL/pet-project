import type {Meta, StoryObj} from '@storybook/react';

import {Theme} from "app/providers/ThemeProvider";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Loader} from "shared/ui/Loader/Loader";

const meta: Meta<typeof Loader> = {
    title: 'Shared/Loader',
    component: Loader,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};

Dark.decorators = ThemeDecorator(Theme.DARK);
