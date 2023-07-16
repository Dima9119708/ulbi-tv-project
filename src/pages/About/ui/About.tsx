import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './about.module.css';

function About() {
    const { t } = useTranslation('about');

    return (
        <div className={`${styles.helle} w-full`}>
            { t('about_site') }
        </div>
    );
}

export default About;
