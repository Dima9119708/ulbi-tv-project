import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'shared/ui/Button';
import { EnumVariantButton } from 'shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { ISubmitFormData } from 'features/Auth/types';
import { useSingleStore } from 'shared/config/store/store';
import { login } from 'features/Auth/model/services/login';
import { Typography } from 'shared/ui/Typography';
import { EnumVariantColorTypography, EnumVariantTypography } from 'shared/ui/Typography/ui/Typography';
import { loginActions } from '../../model/services/login';

const Form = () => {
    const { t } = useTranslation();
    const { register, handleSubmit } = useForm();

    const {
        error,
        isLoading,
    } = useSingleStore(login, (state) => ({
        isLoading: state.isLoading,
        error: state.error,
    }));

    const onSubmit: SubmitHandler<ISubmitFormData> = (data) => {
        loginActions.auth(data);
    };

    return (
        <div className="p-[1.5rem]">
            <Typography text={t('auth')} variant={EnumVariantTypography.H3} />
            { error && (
                <Typography
                    text={t(error)}
                    variant={EnumVariantTypography.BODY1}
                    color={EnumVariantColorTypography.ERROR}
                    className="mb-[0.6rem]"
                />
            )}

            <div className="flex flex-col gap-[2rem] ">
                <Input {...register('username')} type="text" label={t('name')} />
                <Input {...register('password')} type="text" label={t('password')} />
                <Button
                    disabled={isLoading}
                    onClick={handleSubmit(onSubmit)}
                    variant={EnumVariantButton.OUTLINE}
                    className="w-[max-content] ml-auto"
                >
                    {t('login')}
                </Button>
            </div>
        </div>
    );
};

export default Form;
