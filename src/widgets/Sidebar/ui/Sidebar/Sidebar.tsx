import React, { ReactNode, useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { Button } from 'shared/ui/Button';
import { EnumSizeButton, EnumVariantButton } from 'shared/ui/Button/ui/Button';
import { Link } from 'shared/ui/Link';
import { EnumVariantLink } from 'shared/ui/Link/ui/Link';
import { useTranslation } from 'react-i18next';
import IconMain from 'shared/assets/icons/home-alt-svgrepo-com.svg';
import IconAbout from 'shared/assets/icons/syllabus-svgrepo-com.svg';

interface SidebarProps {
    className?: string,
}

const Sidebar = (props: SidebarProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    const [collapse, setCollapse] = useState(true);

    const onToggle = () => {
        setCollapse((prevState) => !prevState);
    };

    return (
        <div
            className={cn(
                'grid transition-[width_0.3s_ease] relative pb-[2rem] bg-color-inverted-bg',
                {
                    'w-[var(--sidebar-open-w)]': collapse === true,
                    'w-[var(--sidebar-close-w)]': collapse === false,
                },
                className,
            )}
        >
            <div className={cn('flex flex-col gap-[0.8rem_0] ml-[1.6rem]')}>
                <Link
                    to="/"
                    variant={EnumVariantLink.SECONDARY}
                    className={cn('flex flex-row items-center gap-[0_0.4rem]')}
                >
                    <IconMain
                        height="1.8rem"
                        width="1.8rem"
                        fill="transparent"
                        stroke="var(--color-inverted-primary)"
                    />
                    <span className={cn('transition-[opacity_0.3s_ease] flex-1', {
                        'w-0 opacity-0': collapse === false,
                        'w-[100%] opacity-100': collapse === true,
                    })}
                    >
                        <span className="w-auto border-b-[0.1rem] border-solid">{t('main')}</span>
                    </span>
                </Link>
                <Link
                    to="/about"
                    variant={EnumVariantLink.SECONDARY}
                    className="flex flex-row items-center gap-[0_0.4rem]"
                >
                    <IconAbout
                        height="1.5rem"
                        width="1.8rem"
                        fill="var(--color-inverted-primary)"
                    />
                    <span className={cn('transition-[opacity_0.3s_ease] flex-1 ', {
                        'w-0 opacity-0': collapse === false,
                        'w-auto opacity-100': collapse === true,
                    })}
                    >
                        <span className="w-auto border-b-[0.1rem] border-solid">{t('about_site')}</span>
                    </span>
                </Link>
            </div>

            <Button
                className="m-auto absolute bottom-[3rem] left-[100%]"
                square={EnumSizeButton.M}
                variant={EnumVariantButton.BACKGROUND_INVERTED}
                onClick={onToggle}
            >
                { collapse ? '>' : '<' }
            </Button>

            <div className={cn('flex gap-[0_1rem] self-end justify-self-center', {
                'flex-col items-center': !collapse,
            })}
            >
                <ThemeSwitcher />
                <LanguageSwitcher short={!collapse} />
            </div>
        </div>
    );
};

export default Sidebar;
