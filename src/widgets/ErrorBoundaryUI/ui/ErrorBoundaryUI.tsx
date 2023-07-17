import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

const ErrorBoundary = () => {
    const { t } = useTranslation();

    const onReload = () => {
        window.location.reload();
    };

    return (
        <div className="h-[100vh] flex-center flex-col font-bold">
            <div>{t('error_boundary')}</div>
            <Button onClick={onReload}>{t('reload_page')}</Button>
        </div>
    );
};

export default ErrorBoundary;
