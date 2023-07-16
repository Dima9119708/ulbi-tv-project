import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation('about');

    return (
        <div className="w-full">
            { t('about_site') }
        </div>
    );
}

export default About;
