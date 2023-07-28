import { useTranslation } from 'react-i18next';
import { useError } from 'shared/hooks/useError';
import { Typography } from 'shared/ui/Typography';
import { EnumVariantColorTypography, EnumVariantTypography } from 'shared/ui/Typography/ui/Typography';
import { Input } from 'shared/ui/Input';
import { useFormContext, useWatch } from 'react-hook-form';
import { Loading } from 'shared/ui/Loading';
import { Avatar } from 'shared/ui/Avatar';

interface ProfileCardProps {
    isLoading: boolean,
    readonly: boolean
}

const ProfileCard = (props: ProfileCardProps) => {
    const {
        readonly,
        isLoading,
    } = props;

    const { t } = useTranslation();
    const error = useError();

    const { register, control } = useFormContext();

    const avatar = useWatch({ name: 'avatar', control });

    if (isLoading) {
        return (
            <div className="min-h-full">
                <Loading on />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center p-[1.5rem] rounded-[0.4rem] border-[0.1rem] border-color-inverted-bg">
                <Typography
                    text={t('Произошла ошибка загрузки данных')}
                    color={EnumVariantColorTypography.ERROR}
                    variant={EnumVariantTypography.H3}
                />
                <Typography
                    text={t('Попробуйте обновить страницу')}
                    color={EnumVariantColorTypography.ERROR}
                />
            </div>
        );
    }

    return (
        <div className="p-[1.5rem] rounded-[0.4rem] border-[0.1rem] border-color-inverted-bg">
            {
                avatar && (
                    <div className="flex-center">
                        <Avatar src={avatar} className="h-[10rem] w-[10rem]" alt="avatar" />
                    </div>
                )
            }
            <Input {...register('first')} readOnly={readonly} placeholder={t('first_name')} className="mb-[0.5rem]" />
            <Input {...register('lastname')} readOnly={readonly} placeholder={t('last_name')} className="mb-[0.5rem]" />
            <Input {...register('age')} readOnly={readonly} placeholder={t('age')} className="mb-[0.5rem]" />
            <Input {...register('currency')} readOnly={readonly} placeholder={t('currency')} className="mb-[0.5rem]" />
            <Input {...register('country')} readOnly={readonly} placeholder={t('country')} className="mb-[0.5rem]" />
            <Input {...register('city')} readOnly={readonly} placeholder={t('city')} className="mb-[0.5rem]" />
            <Input {...register('city')} readOnly={readonly} placeholder={t('city')} className="mb-[0.5rem]" />
            <Input {...register('avatar')} readOnly={readonly} placeholder={t('avatar')} className="mb-[0.5rem]" />
            <Typography text={t(error)} variant={EnumVariantTypography.H3} />
        </div>
    );
};

export default ProfileCard;
