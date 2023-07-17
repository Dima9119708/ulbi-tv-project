import React from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Link } from 'shared/ui/Link';
import { EnumVariantLink } from 'shared/ui/Link/ui/Link';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string
}

function Navbar(props: NavbarProps) {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div
            className={cn(
                'items-center px-[2rem] h-[var(--navbar-h)] justify-center flex bg-color-inverted-bg w-full',
                className,
            )}
        >
            <div className="ml-auto">
                <Link to="/" variant={EnumVariantLink.SECONDARY} className="mr-[1.5rem]">{t('main')}</Link>
                <Link to="/about" variant={EnumVariantLink.SECONDARY}>{t('about_site')}</Link>
            </div>
        </div>
    );
}

export default Navbar;
