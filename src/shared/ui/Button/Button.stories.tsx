import type {Meta, StoryObj} from '@storybook/react';

import {Button, ButtonSize, ButtonTheme} from './Button';
import {Theme} from "app/providers/ThemeProvider";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof Button> = {
    title: 'Shared/Button',
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
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearInverted: Story = {
    args: {
        ...Primary.args,
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const OutlinedTheme: Story = {
    args: {
        ...Primary.args,
        theme: ButtonTheme.OUTLINED,
    },
};

export const OutlinedDarkTheme: Story = {
    args: {
        ...OutlinedTheme.args,
    },
};
OutlinedDarkTheme.decorators = ThemeDecorator(Theme.DARK);

export const OutlinedSizeL: Story = {
    args: {
        ...Primary.args,
        theme: ButtonTheme.OUTLINED,
        size: ButtonSize.L
    },
};

export const OutlinedSizeXL: Story = {
    args: {
        ...Primary.args,
        theme: ButtonTheme.OUTLINED,
        size: ButtonSize.XL
    },
};

export const BackgroundTheme: Story = {
    args: {
        ...Primary.args,
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInvertedTheme: Story = {
    args: {
        ...Primary.args,
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL
    },
};


