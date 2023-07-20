import { Link as LinkRouter, LinkProps as LinkRouterProps } from 'react-router-dom';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export enum EnumVariantLink {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface LinkProps extends LinkRouterProps {
    variant?: EnumVariantLink
}

const link = cva('text-color-primary', {
    variants: {
        intent: {
            [EnumVariantLink.PRIMARY]: [],
            [EnumVariantLink.SECONDARY]: [
                'text-color-inverted-primary',
            ],
        },
    },
});

const Link = (props: LinkProps) => {
    const {
        children,
        className,
        variant,
    } = props;

    return (
        <LinkRouter
            {...props}
            className={twMerge(link({ intent: variant, className }))}
        >
            { children }
        </LinkRouter>
    );
};

export default Link;
