import { Select } from 'shared/ui/Select';
import { useTranslation } from 'react-i18next';
import { EnumCurrency } from 'entity/Currency/model';
import {
    forwardRef, memo, Ref, SelectHTMLAttributes,
} from 'react';

interface CurrencyProps extends SelectHTMLAttributes<HTMLSelectElement>{
    className?: string,
    readonly?: boolean
}

const options = Object.values(EnumCurrency).map((currency) => ({ value: currency, label: currency }));

const Currency = (props: CurrencyProps, ref: Ref<HTMLSelectElement>) => {
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
            label={t('currency')}
            options={options}
            className={className}
            value={value}
            onChange={onChange}
        />
    );
};

export default memo(forwardRef(Currency));
