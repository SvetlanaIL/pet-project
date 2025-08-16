import type {Meta, StoryObj} from '@storybook/react';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "shared/const/theme";

const meta: Meta<typeof AppLink> = {
    title: 'Shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
    args: {
        to: '/',
    }
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        ...Primary.args,
        theme: AppLinkTheme.SECONDARY,
    },
};

export const PrimaryDarkTheme: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.PRIMARY,
    },
};
PrimaryDarkTheme.decorators = ThemeDecorator(Theme.DARK);

export const SecondaryDarkTheme: Story = {
    args: {
        ...Primary.args,
        theme: AppLinkTheme.SECONDARY,
    },
};
SecondaryDarkTheme.decorators = ThemeDecorator(Theme.DARK);
