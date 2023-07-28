import { Typography } from 'shared/ui/Typography';
import { EnumVariantTypography } from 'shared/ui/Typography/ui/Typography';
import { Button } from 'shared/ui/Button';
import { EnumVariantButton } from 'shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import { useSingleStore } from 'shared/config/store/store';
import { userActions, userStore } from 'entity/User';
import { useCallback } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Profile } from 'entity/User/types';

const ProfileHead = () => {
    const { t } = useTranslation();
    const { reset, handleSubmit } = useFormContext();

    const readonly = useSingleStore(userStore, (state) => state.profileReadonly);

    const onEdit = useCallback(() => {
        userActions.setReadonly(false);
    }, []);

    const onCancelEdit = useCallback(() => {
        userActions.setReadonly(true);
        reset();
    }, [reset]);

    const onSave: SubmitHandler<Profile> = useCallback((data) => {
        userActions.updateProfile(data);
    }, []);

    return (
        <div className="flex justify-between mb-[2rem]">
            <Typography text={t('profile')} variant={EnumVariantTypography.H3} />
            {
                readonly && <Button onClick={onEdit} variant={EnumVariantButton.OUTLINE}>{t('editing')}</Button>
            }
            {
                !readonly && (
                    <div className="flex gap-[0_1rem]">
                        <Button onClick={onCancelEdit} variant={EnumVariantButton.OUTLINE_RED}>{t('cancel')}</Button>
                        <Button onClick={handleSubmit(onSave)} variant={EnumVariantButton.OUTLINE}>{t('save')}</Button>
                    </div>
                )
            }
        </div>
    );
};

export default ProfileHead;
