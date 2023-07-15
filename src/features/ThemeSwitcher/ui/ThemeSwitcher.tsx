import React from 'react';
import {EnumVariantTheme, useTheme} from "app/theme";
import {cn} from "shared/lib/classNames";
import IconNight from 'shared/assets/icons/night-svgrepo-com.svg'

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {  className } = props

    const { onChangeTheme, nameTheme } = useTheme({ getNameThemeAfterChangeTheme: true })

    const onToggle = () => {
        onChangeTheme(
            nameTheme === EnumVariantTheme.LIGHT
                ? EnumVariantTheme.DARK
                : EnumVariantTheme.LIGHT
        )
    }

    return (
        <button className={cn('h-[3rem] w-[3rem]', className)}  onClick={onToggle}>
            <IconNight
                height="100%"
                width="100%"
                stroke={cn({
                    '#d08f0a': nameTheme === EnumVariantTheme.LIGHT,
                    '#090949': nameTheme === EnumVariantTheme.DARK,
                })}
             />
        </button>
    );
};

export default ThemeSwitcher;
