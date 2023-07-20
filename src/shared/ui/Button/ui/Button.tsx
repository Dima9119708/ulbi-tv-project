import { cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

export enum EnumVariantButton {
    BASE = 'base',
    OUTLINE = 'outline',
}

const button = cva(null, {
    variants: {
        intent: {
            [EnumVariantButton.BASE]: [
                'text-color-primary cursor-pointer text-[30rem]',
            ],
            [EnumVariantButton.OUTLINE]: [
                'p-[0.4rem_1.5rem]',
                'rounded-[0.4rem]',
                'border-[0.1rem]',
                'border-solid',
                'border-color-primary',
                'text-color-primary',
            ],
        },
    },
    defaultVariants: {
        intent: EnumVariantButton.BASE,
    },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: EnumVariantButton
}

const Button = (props: ButtonProps) => {
    const { className, children, variant } = props;

    return (
        <button
            type="button"
            {...props}
            className={button({ intent: variant, className })}
        >
            { children }
        </button>
    );
};

export default Button;
