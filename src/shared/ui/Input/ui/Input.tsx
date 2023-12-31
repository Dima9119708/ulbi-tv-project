import {
    forwardRef, InputHTMLAttributes, memo, Ref, useId,
} from 'react';
import { cva } from 'class-variance-authority';
import { tailwindMerge } from 'shared/lib/tailwindMerge/tailwindMerge';
import { ErrorOption } from 'react-hook-form';
import { Typography } from 'shared/ui/Typography';
import { EnumVariantColorTypography, EnumVariantTypography } from 'shared/ui/Typography/ui/Typography';

export enum EnumInputVariant {
    BASE = 'base',
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string,
    variant?: EnumInputVariant
    error?: ErrorOption
}

const input = cva(null, {
    variants: {
        intent: {
            [EnumInputVariant.BASE]: [
                'flex flex-col gap-[0.5rem]',
                '[&_label]:w-full',
                '[&_input]:rounded-[0.4rem]',
                '[&_input]:p-[0.4rem_0.5rem]',
                '[&_input]:focus:border-none',
                '[&_input]:bg-color-inverted-bg',
                '[&_input]:text-color-inverted-primary',
                '[&_input]:placeholder:text-color-inverted-primary',
            ],
        },
        readOnly: {
            true: [
                'opacity-50',
                'pointer-events-none',
            ],
        },
    },
    defaultVariants: {
        intent: EnumInputVariant.BASE,
    },
});

const Input = (props: InputProps, ref: Ref<HTMLInputElement>) => {
    const {
        label,
        className,
        type,
        variant,
        name,
        onChange,
        onBlur,
        placeholder,
        readOnly,
        error,
    } = props;

    const id = useId();

    return (
        <div className={tailwindMerge(input({
            intent: variant,
            readOnly,
            className,
        }))}
        >
            <label htmlFor={id}>{label}</label>
            <input
                readOnly={readOnly}
                placeholder={placeholder}
                id={id}
                ref={ref}
                name={name}
                type={type}
                onBlur={onBlur}
                onChange={onChange}
            />
            { error && (
                <Typography
                    text={error.message ?? ''}
                    variant={EnumVariantTypography.BODY1}
                    color={EnumVariantColorTypography.ERROR}
                />
            )}
        </div>
    );
};

export default memo(forwardRef(Input));
