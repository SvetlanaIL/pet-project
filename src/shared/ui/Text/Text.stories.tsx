import type {Meta, StoryObj} from '@storybook/react';
import {Text, TextTheme} from "shared/ui/Text/Text";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta<typeof Text> = {
    title: 'Shared/Text',
    component: Text,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Error',
        text: 'Введены неверные логин или пароль'
    },
};

export const Error: Story = {
    args: {
        ...Primary.args,
        theme: TextTheme.ERROR,
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Error',
    },
};

export const onlyText: Story = {
    args: {
        text: 'Введены неверные логин или пароль'
    },
};

export const PrimaryDark: Story = {
    args: {
        ...Primary.args
    },
};

PrimaryDark.decorators = ThemeDecorator(Theme.DARK);

export const onlyTitleDark: Story = {
    args: {
        ...onlyTitle.args
    },
};

onlyTitleDark.decorators = ThemeDecorator(Theme.DARK);

export const onlyTextDark: Story = {
    args: {
        ...onlyText.args
    },
};

onlyTextDark.decorators = ThemeDecorator(Theme.DARK);

