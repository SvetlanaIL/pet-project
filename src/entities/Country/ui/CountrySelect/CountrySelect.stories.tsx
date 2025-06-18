import type {Meta, StoryObj} from '@storybook/react';
import {CountrySelect} from "entities/Country";

const meta: Meta<typeof CountrySelect> = {
    title: 'Features/CurrencySelect',
    component: CountrySelect,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Primary: Story = {
    args: {},
};
