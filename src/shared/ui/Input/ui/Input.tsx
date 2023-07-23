import {
    forwardRef, InputHTMLAttributes, Ref, useId,
} from 'react';
import { cva } from 'class-variance-authority';
import { tailwindMerge } from 'shared/lib/tailwindMerge/tailwindMerge';

export enum EnumInputVariant {
    BASE = 'base',
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string,
    variant?: EnumInputVariant
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
    } = props;

    const id = useId();

    return (
        <div className={tailwindMerge(input({ intent: variant, className }))}>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                ref={ref}
                name={name}
                type={type}
                onBlur={onBlur}
                onChange={onChange}
            />
        </div>
    );
};

export default forwardRef(Input);
