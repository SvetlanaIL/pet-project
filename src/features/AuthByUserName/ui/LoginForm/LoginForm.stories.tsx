import type {Meta, StoryObj} from '@storybook/react';
import LoginForm from "./LoginForm";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof LoginForm> = {
    title: 'Features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {},
};

Primary.decorators = StoreDecorator({
    login: {username: 'admin', password: '123'}
});

export const withError: Story = {
    args: {},
};

withError.decorators = StoreDecorator({
    login: {username: 'admin', password: '123', error: 'error'}
});

export const loading: Story = {
    args: {},
};

loading.decorators = StoreDecorator({
    login: {isLoading: true}
});
