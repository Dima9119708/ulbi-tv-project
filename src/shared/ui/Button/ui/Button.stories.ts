import type { Meta, StoryObj } from '@storybook/react';

import { EnumVariantTheme } from 'app/theme';
import Button, { EnumSizeButton, EnumVariantButton } from './Button';
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

export const OutlineSizeM: Story = {
    args: {
        variant: EnumVariantButton.OUTLINE,
        size: EnumSizeButton.M,
        children: 'Outline',
    },
};

export const OutlineSizeL: Story = {
    args: {
        variant: EnumVariantButton.OUTLINE,
        size: EnumSizeButton.L,
        children: 'Outline',
    },
};

export const OutlineSizeXL: Story = {
    args: {
        variant: EnumVariantButton.OUTLINE,
        size: EnumSizeButton.XL,
        children: 'Outline',
    },
};

export const BackgroundInvertedLight: Story = {
    args: {
        children: 'Text',
        variant: EnumVariantButton.BACKGROUND_INVERTED,
    },
};

export const SquareM: Story = {
    args: {
        children: '>',
        variant: EnumVariantButton.BACKGROUND_INVERTED,
        size: EnumSizeButton.M,
        square: EnumSizeButton.M,
    },
};

export const SquareL: Story = {
    args: {
        children: '>',
        variant: EnumVariantButton.BACKGROUND_INVERTED,
        size: EnumSizeButton.L,
        square: EnumSizeButton.L,
    },
};

export const SquareXL: Story = {
    args: {
        children: '>',
        variant: EnumVariantButton.BACKGROUND_INVERTED,
        size: EnumSizeButton.XL,
        square: EnumSizeButton.XL,
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
BackgroundInvertedLight.decorators = [
    Theme(EnumVariantTheme.LIGHT),
];
