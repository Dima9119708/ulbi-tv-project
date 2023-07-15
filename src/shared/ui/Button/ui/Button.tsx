import {cn} from "shared/lib/classNames";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button = (props: ButtonProps) => {
    const { className, children } = props

    return (
        <button
            {...props}
            className={cn('cursor-pointer', className)}
        >
            { children }
        </button>
    );
};

export default Button;
