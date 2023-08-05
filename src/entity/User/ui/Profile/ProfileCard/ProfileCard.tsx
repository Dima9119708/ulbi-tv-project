import { useTranslation } from 'react-i18next';
import { useError } from 'shared/hooks/useError';
import { Typography } from 'shared/ui/Typography';
import { EnumVariantColorTypography, EnumVariantTypography } from 'shared/ui/Typography/ui/Typography';
import { Input } from 'shared/ui/Input';
import { useFormContext, useWatch } from 'react-hook-form';
import { Loading } from 'shared/ui/Loading';
import { Avatar } from 'shared/ui/Avatar';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';

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

    const { register, control, formState: { errors } } = useFormContext();

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
            <Input
                {...register('first')}
                error={errors.first}
                readOnly={readonly}
                label={t('first_name')}
                placeholder={t('first_name')}
                className="mb-[0.5rem]"
            />
            <Input
                {...register('lastname')}
                error={errors.lastname}
                readOnly={readonly}
                label={t('last_name')}
                placeholder={t('last_name')}
                className="mb-[0.5rem]"
            />
            <Input
                {...register('age')}
                error={errors.age}
                readOnly={readonly}
                label={t('age')}
                placeholder={t('age')}
                className="mb-[0.5rem]"
            />
            <Country
                {...register('country')}
                readonly={readonly}
                className="mb-[0.5rem]"
            />
            <Input
                {...register('city')}
                readOnly={readonly}
                label={t('city')}
                placeholder={t('city')}
                className="mb-[0.5rem]"
            />
            <Currency
                {...register('currency')}
                readonly={readonly}
                className="mb-[0.5rem]"
            />
            <Input
                {...register('avatar')}
                label={t('avatar')}
                readOnly={readonly}
                placeholder={t('avatar')}
                className="mb-[0.5rem]"
            />
            <Typography text={t(error)} variant={EnumVariantTypography.H3} />
        </div>
    );
};

export default ProfileCard;
