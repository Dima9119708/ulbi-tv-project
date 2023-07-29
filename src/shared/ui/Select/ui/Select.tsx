import {
    forwardRef, memo, Ref, SelectHTMLAttributes, useId, useMemo,
} from 'react';
import { cva } from 'class-variance-authority';
import { tailwindMerge } from 'shared/lib/tailwindMerge/tailwindMerge';

export enum EnumSelectVariant {
    BASE = 'base'
}

interface Option {
    value: string | number,
    label: string
}

export interface SelectProps<T extends Option[]> extends SelectHTMLAttributes<HTMLSelectElement>{
    className?: string,
    options: T,
    label?: string,
    readonly?: boolean,
    variant?: EnumSelectVariant,
}

const select = cva(null, {
    variants: {
        intent: {
            [EnumSelectVariant.BASE]: [
                'flex flex-col',
                '[&_select]:text-color-inverted-primary',
                '[&_select]:bg-color-inverted-bg',
                '[&_select]:p-[0.2rem_1rem_0.2rem_0.2rem]',
                '[&_select]:border-color-inverted-bg',
                '[&_select]:border-[0.1rem]',
                '[&_select]:border-solid',
                '[&_select]:rounded-[0.4rem]',
                '[&_select]:focus-visible:outline-[0.1rem]',
                '[&_select]:focus-visible:outline-color-primary',
                '[&_label]:leading-[1]',
                '[&_label]:mb-[0.2rem]',
            ],
        },
        readonly: {
            true: [
                'opacity-50',
                'pointer-events-none',
            ],
        },
    },
    defaultVariants: {
        intent: EnumSelectVariant.BASE,
    },
});

const Select = <T extends Option[], >(props: SelectProps<T>, ref: Ref<HTMLSelectElement>) => {
    const {
        options, className, variant, label, onChange, readonly, name,
    } = props;
    const id = useId();

    const memoOptions = useMemo(() => (
        options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ))
    ), [options]);

    return (
        <div className={tailwindMerge(select({ intent: variant, className, readonly }))}>
            <label htmlFor={id}>{label}</label>
            <select name={name} ref={ref} id={id} onChange={onChange}>
                {memoOptions}
            </select>
        </div>

    );
};

export default memo(forwardRef(Select));
