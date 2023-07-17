import { Link as LinkRouter, LinkProps as LinkRouterProps } from 'react-router-dom';
import { cn } from 'shared/lib/classNames/classNames';

export enum EnumVariantLink {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface LinkProps extends LinkRouterProps {
    variant?: EnumVariantLink
}

const Link = (props: LinkProps) => {
    const {
        children,
        className,
        variant = EnumVariantLink.PRIMARY,
    } = props;

    return (
        <LinkRouter
            {...props}
            className={cn(
                'text-color-primary',
                variant === EnumVariantLink.PRIMARY && 'text-color-primary',
                variant === EnumVariantLink.SECONDARY && 'text-color-inverted-secondary',
                className,
            )}
        >
            { children }
        </LinkRouter>
    );
};

export default Link;
