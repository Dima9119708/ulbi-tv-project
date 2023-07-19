import type { Meta, StoryObj } from '@storybook/react';

import { EnumVariantTheme } from 'app/theme';
import {
    BaseDARK, BaseLight, OutlineDark, OutlineLight,
} from 'shared/ui/Button/ui/Button.stories';
import Sidebar from './Sidebar';
import Theme from '../../../../../.storybook/decorators/Themes';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'left',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
    args: {
        className: 'h-[300px]',
    },
};
export const Dark: Story = {
    args: {
        className: 'h-[300px]',
    },
};

Light.decorators = [
    Theme(EnumVariantTheme.LIGHT),
];
Dark.decorators = [
    Theme(EnumVariantTheme.DARK),
];
