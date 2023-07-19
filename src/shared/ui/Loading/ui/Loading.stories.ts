import type { Meta, StoryObj } from '@storybook/react';

import { EnumVariantTheme } from 'app/theme';
import Loading from './Loading';
import Theme from '../../../../../.storybook/decorators/Themes';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'shared/Loading',
    component: Loading,
    parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
    args: {
        on: true,
    },
};
export const Dark: Story = {
    args: {
        on: true,
    },
};

Light.decorators = [
    Theme(EnumVariantTheme.LIGHT),
];
Dark.decorators = [
    Theme(EnumVariantTheme.DARK),
];
