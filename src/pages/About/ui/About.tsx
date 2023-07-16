import React from 'react';
import styles from './about.module.css'
import {useTranslation} from "react-i18next";

const About = () => {
    const { t } = useTranslation('about')

    return (
        <div className={`${styles.helle} w-full`}>
            { t('about_site') }
        </div>
    );
};

export default About;
