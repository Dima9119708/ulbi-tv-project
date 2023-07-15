import {Link as LinkRouter, LinkProps as LinkRouterProps} from "react-router-dom";
import {cn} from "shared/lib/classNames";

export enum EnumThemeNames {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface LinkProps extends LinkRouterProps {
    theme?: EnumThemeNames
}

const Link = (props: LinkProps) => {
    const {
        children,
        className,
        theme = EnumThemeNames.PRIMARY
    } = props

    return (
        <LinkRouter
            {...props}
            className={cn(
                'text-color-primary',
                theme === EnumThemeNames.PRIMARY && 'text-color-primary',
                theme === EnumThemeNames.SECONDARY && 'text-color-inverted-secondary',
                className
            )}
        >
            { children }
        </LinkRouter>
    );
};

export default Link;
