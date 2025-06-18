import type {Meta, StoryObj} from '@storybook/react';
import {Avatar} from "shared/ui/Avatar/Avatar";
import AvatarImg from "./storybook.jpg"

const meta: Meta<typeof Avatar> = {
    title: 'Shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};

export const Small: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
};

