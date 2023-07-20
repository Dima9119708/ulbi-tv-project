import React from 'react';
import { cn } from 'shared/lib/classNames/classNames';

interface NavbarProps {
    className?: string
}

const Navbar = (props: NavbarProps) => {
    const {
        className,
    } = props;

    return (
        <div
            className={cn(
                'items-center px-[2rem] h-[var(--navbar-h)] justify-center flex bg-color-inverted-bg w-full',
                className,
            )}
        >
            <div className="ml-auto" />
        </div>
    );
};

export default Navbar;
