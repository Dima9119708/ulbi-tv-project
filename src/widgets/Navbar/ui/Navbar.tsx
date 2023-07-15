import React from 'react';
import {cn} from "shared/lib/classNames";
import {Link} from "shared/ui/Link";
import {EnumThemeNames} from "shared/ui/Link/ui/Link";

interface NavbarProps {
    className?: string
}

const Navbar = (props: NavbarProps) => {
    const {
        className
    } = props

    return (
        <div className={cn('items-center px-[2rem] h-[var(--navbar-h)] justify-center flex bg-color-inverted-bg w-full', className)}>
            <div className="ml-auto">
                <Link to="/" theme={EnumThemeNames.SECONDARY} className="mr-[1.5rem]">Главная</Link>
                <Link to="/about" theme={EnumThemeNames.SECONDARY}>О сайте</Link>
            </div>
        </div>
    );
};

export default Navbar;
