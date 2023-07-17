import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

// interface LanguageSwitcherProps {
//
// }

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button onClick={onToggle}>
            {t('language')}
        </Button>
    );
};

export default LanguageSwitcher;
