import { useTranslation } from 'react-i18next';
import { useError } from 'shared/hooks/useError';
import { Typography } from 'shared/ui/Typography';
import { EnumVariantTypography } from 'shared/ui/Typography/ui/Typography';
import { Button } from 'shared/ui/Button';
import { EnumVariantButton } from 'shared/ui/Button/ui/Button';
import { userActions } from 'entity/User';
import { Input } from 'shared/ui/Input';
import { useForm } from 'react-hook-form';
import { Loading } from 'shared/ui/Loading';

const ProfileCard = () => {
    const { t } = useTranslation();

    const { register, formState: { isLoading } } = useForm({
        defaultValues: async () => {
            const res = await userActions.getProfile();
            return {
                first: res.first,
                lastname: res.lastname,
            };
        },
    });

    const error = useError();

    return (
        <div className="p-[1.5rem] rounded-[0.4rem] border-[0.1rem] border-color-inverted-bg">
            <div className="flex justify-between mb-[2rem]">
                <Typography text={t('profile')} variant={EnumVariantTypography.H3} />
                <Button variant={EnumVariantButton.OUTLINE}>{t('editing')}</Button>
            </div>
            <Input {...register('first')} placeholder={t('first_name')} className="mb-[0.5rem]" />
            <Input {...register('lastname')} placeholder={t('last_name')} />
            <Loading on={isLoading} />
        </div>
    );
};

export default ProfileCard;
