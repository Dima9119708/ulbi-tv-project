import React from 'react';
import {
    ProfileCard, ProfileHead, userActions, userStore,
} from 'entity/User';
import { FormProvider, useForm } from 'react-hook-form';
import { useSingleStore } from 'shared/config/store/store';
import { Profile as TProfile } from 'entity/User/types';
import { useLoading } from 'shared/hooks/useLoading';

const Profile = () => {
    const methods = useForm<TProfile>({
        defaultValues: async () => userActions.getProfile(),
    });

    const isLoading = useLoading(true);

    const readonly = useSingleStore(userStore, (state) => state.profileReadonly);

    return (
        <div className="w-full min-h-full">
            <FormProvider {...methods}>
                <ProfileHead />
                <ProfileCard isLoading={isLoading} readonly={readonly} />
            </FormProvider>
        </div>
    );
};

export default Profile;
