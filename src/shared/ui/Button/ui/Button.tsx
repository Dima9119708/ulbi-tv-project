import {cn} from "shared/lib/classNames";
import { ButtonHTMLAttributes } from "react";

export enum EnumVariantButton {

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: EnumVariantButton
}

const Button = (props: ButtonProps) => {
    const { className, children } = props

    return (
        <button
            {...props}
            className={cn(
                'text-color-primary cursor-pointer',
                className
            )}
        >
            { children }
        </button>
    );
};

export default Button;
