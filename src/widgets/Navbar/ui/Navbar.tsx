import React from 'react';
import {cn} from "shared/lib/classNames";
import {Link} from "shared/ui/Link";
import { EnumVariantLink } from "shared/ui/Link/ui/Link";

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
                <Link to="/" variant={EnumVariantLink.SECONDARY} className="mr-[1.5rem]">Главная</Link>
                <Link to="/about" variant={EnumVariantLink.SECONDARY}>О сайте</Link>
            </div>
        </div>
    );
};

export default Navbar;
