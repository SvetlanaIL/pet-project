import type {Meta, StoryObj} from '@storybook/react';
import {CurrencySelect} from "entities/Currency/ui/CurrencySelect/CurrencySelect";

const meta: Meta<typeof CurrencySelect> = {
    title: 'Features/CurrencySelect',
    component: CurrencySelect,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {
    args: {},
};
