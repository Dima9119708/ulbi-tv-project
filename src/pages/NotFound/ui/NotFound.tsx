import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface NotFoundProps {
    className?: string
}

const NotFound = (props: NotFoundProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={cn('text-l flex-center h-[100%] w-full', className)}>
            {t('page_not_found')}
        </div>
    );
};

export default NotFound;
