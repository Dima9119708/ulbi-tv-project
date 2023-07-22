import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';

const Form = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-[2rem] p-[1.5rem]">
            <Input type="text" label={t('name')} />
            <Input type="text" label={t('password')} />
            <Button>{t('login')}</Button>
        </div>
    );
};

export default Form;
