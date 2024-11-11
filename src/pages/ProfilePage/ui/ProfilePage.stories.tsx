import type {Meta, StoryObj} from '@storybook/react';
import {Theme} from "app/providers/ThemeProvider";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ProfilePage from "pages/ProfilePage/ui/ProfilePage";

const meta: Meta<typeof ProfilePage> = {
    title: 'Pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};

Dark.decorators = ThemeDecorator(Theme.DARK);
