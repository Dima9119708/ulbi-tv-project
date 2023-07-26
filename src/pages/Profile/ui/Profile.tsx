import React from 'react';
import { useTranslation } from 'react-i18next';

const Profile = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full">
            { t('profile') }
        </div>
    );
};

export default Profile;
