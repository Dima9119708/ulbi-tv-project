import { cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export enum EnumVariantButton {
    BASE = 'base',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background_inverted',
}

export enum EnumSizeButton {
    M = 'M',
    L = 'L',
    XL = 'XL',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: EnumVariantButton
    square?: EnumSizeButton,
    size?: EnumSizeButton
}

const button = cva(null, {
    variants: {
        intent: {
            [EnumVariantButton.BASE]: [
                'text-color-primary cursor-pointer',
            ],
            [EnumVariantButton.OUTLINE]: [
                'p-[0.4rem_1.5rem]',
                'rounded-[0.4rem]',
                'border-[0.1rem]',
                'border-solid',
                'border-color-primary',
                'text-color-primary',
            ],
            [EnumVariantButton.BACKGROUND]: [
                'bg-color-bg',
                'text-color-primary',
            ],
            [EnumVariantButton.BACKGROUND_INVERTED]: [
                'bg-color-inverted-bg',
                'text-color-inverted-primary',
            ],
        },
        square: {
            [EnumSizeButton.M]: 'w-[3rem] h-[3rem]',
            [EnumSizeButton.L]: 'w-[4rem] h-[4rem]',
            [EnumSizeButton.XL]: 'w-[6rem] h-[6rem]',
        },
        size: {
            [EnumSizeButton.M]: 'text-m',
            [EnumSizeButton.L]: 'text-l',
            [EnumSizeButton.XL]: 'text-xl',
        },
    },
    defaultVariants: {
        intent: EnumVariantButton.BASE,
    },
});

const Button = (props: ButtonProps) => {
    const {
        className, children, variant, square, size,
    } = props;

    return (
        <button
            type="button"
            {...props}
            className={twMerge(button({
                intent: variant,
                className,
                square,
                size,
            }))}
        >
            { children }
        </button>
    );
};

export default Button;
