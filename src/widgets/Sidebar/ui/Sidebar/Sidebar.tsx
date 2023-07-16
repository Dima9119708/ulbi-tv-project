import React, { ReactNode, useState } from 'react';
import { cn } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { Button } from 'shared/ui/Button';

interface SidebarProps {
    children?: ReactNode
}

function Sidebar(props: SidebarProps) {
    const {
        children,
    } = props;

    const [collapse, setCollapse] = useState(false);

    const onToggle = () => {
        setCollapse((prevState) => !prevState);
    };

    return (
        <div
            className={cn(
                'grid transition-[width_0.3s_ease] bg-color-inverted-bg',
                {
                    'w-[var(--sidebar-open-w)]': collapse === true,
                    'w-[var(--sidebar-close-w)]': collapse === false,
                },
            )}
        >
            {children}
            <Button onClick={onToggle}>
                toggle
            </Button>
            <div className="flex gap-[0_1rem] self-end justify-self-center">
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
}

export default Sidebar;
