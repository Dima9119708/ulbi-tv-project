import type { Meta, StoryObj } from '@storybook/react';

import { EnumVariantTheme } from 'app/theme';
import Navbar from './Navbar';
import Theme from '../../../../.storybook/decorators/Themes';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'top',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
    args: {
        className: '',
    },
};
export const Dark: Story = {
    args: {
        className: '',
    },
};

Light.decorators = [
    Theme(EnumVariantTheme.LIGHT),
];
Dark.decorators = [
    Theme(EnumVariantTheme.DARK),
];
