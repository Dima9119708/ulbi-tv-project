import React, { useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { Button } from 'shared/ui/Button';
import { EnumSizeButton, EnumVariantButton } from 'shared/ui/Button/ui/Button';
import { configItems } from 'widgets/Sidebar/lib/config';
import SidebarItem from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string,
}

const Sidebar = (props: SidebarProps) => {
    const {
        className,
    } = props;

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
                {
                    configItems.map((item) => (
                        <SidebarItem key={item.to} collapse={collapse} {...item} />
                    ))
                }
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
