import React, {ReactNode, useState} from 'react';
import {cn} from "shared/lib/classNames";
import {ThemeSwitcher} from "features/ThemeSwitcher";

interface SidebarProps {
    children?: ReactNode
}

const Sidebar = (props: SidebarProps) => {
    const [collapse, setCollapse] = useState(false)

    const onToggle = () => {
        setCollapse(prevState => !prevState)
    }

    return (
        <div
            className={cn(
                'grid transition-[width_0.3s_ease] bg-color-inverted-bg',
                {
                    'w-[var(--sidebar-open-w)]': collapse === true,
                    'w-[var(--sidebar-close-w)]': collapse === false,
                }
            )}
        >
            <button onClick={onToggle}>
                toggle
            </button>
           <div className="self-end justify-self-center">
               <ThemeSwitcher />
           </div>
        </div>
    );
};

export default Sidebar;
