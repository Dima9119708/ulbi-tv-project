import { createElement, memo } from 'react';
import { cva } from 'class-variance-authority';
import { tailwindMerge } from 'shared/lib/tailwindMerge/tailwindMerge';

export enum EnumVariantTypography {
    H3 = 'h3',
    BODY1 = 'p',
}

export enum EnumVariantColorTypography {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TypographyProps {
    className?: string,
    text: string,
    variant?: EnumVariantTypography,
    color?: EnumVariantColorTypography,
}

const typography = cva(null, {
    variants: {
        intent: {
            [EnumVariantTypography.H3]: [
                'text-l',
            ],
            [EnumVariantTypography.BODY1]: [
                'text-m',
            ],
        },
        color: {
            [EnumVariantColorTypography.PRIMARY]: [
                'text-color-primary',
            ],
            [EnumVariantColorTypography.ERROR]: [
                'text-color-error',
            ],
        },
    },
    defaultVariants: {
        intent: EnumVariantTypography.BODY1,
        color: EnumVariantColorTypography.PRIMARY,
    },
});

const Typography = (props: TypographyProps) => {
    const {
        variant = EnumVariantTypography.BODY1,
        color,
        text,
        className,
    } = props;

    return createElement(
        variant,
        {
            className: tailwindMerge(typography({
                intent: variant,
                className,
                color,
            })),
        },
        text,
    );
};

export default memo(Typography);
