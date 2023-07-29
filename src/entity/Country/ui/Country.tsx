import { Select } from 'shared/ui/Select';
import { useTranslation } from 'react-i18next';
import {
    forwardRef, memo, Ref, SelectHTMLAttributes,
} from 'react';
import { EnumCountry } from '../model';

interface CurrencyProps extends SelectHTMLAttributes<HTMLSelectElement>{
    className?: string,
    readonly?: boolean
}

const options = Object.values(EnumCountry).map((currency) => ({ value: currency, label: currency }));

const Country = (props: CurrencyProps, ref: Ref<HTMLSelectElement>) => {
    const {
        className,
        readonly,
        value,
        name,
        onChange,
    } = props;

    const { t } = useTranslation();

    return (
        <Select
            name={name}
            ref={ref}
            readonly={readonly}
            label={t('country')}
            options={options}
            className={className}
            value={value}
            onChange={onChange}
        />
    );
};

export default memo(forwardRef(Country));
