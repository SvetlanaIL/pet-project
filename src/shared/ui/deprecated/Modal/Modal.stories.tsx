import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from 'shared/ui/deprecated/Modal/Modal';
import { Theme } from 'shared/const/theme';

const meta: Meta<typeof Modal> = {
    title: 'Shared/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
    },
};

export const Dark: Story = {
    args: {
        ...Primary.args,
    },
};

Dark.decorators = ThemeDecorator(Theme.DARK);
