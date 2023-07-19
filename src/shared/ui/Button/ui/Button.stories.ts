import type { Meta, StoryObj } from '@storybook/react';

import { EnumVariantTheme } from 'app/theme';
import Button, { EnumVariantButton } from './Button';
import Theme from '../../../../../.storybook/decorators/Themes';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BaseLight: Story = {
    args: {
        children: 'Base',
    },
};

export const BaseDARK: Story = {
    args: {
        children: 'Base',
    },
};

export const OutlineLight: Story = {
    args: {
        variant: EnumVariantButton.OUTLINE,
        children: 'Outline',
    },
};

export const OutlineDark: Story = {
    args: {
        variant: EnumVariantButton.OUTLINE,
        children: 'Outline',
    },
};

BaseLight.decorators = [
    Theme(EnumVariantTheme.LIGHT),
];
BaseDARK.decorators = [
    Theme(EnumVariantTheme.DARK),
];
OutlineLight.decorators = [
    Theme(EnumVariantTheme.LIGHT),
];
OutlineDark.decorators = [
    Theme(EnumVariantTheme.DARK),
];
