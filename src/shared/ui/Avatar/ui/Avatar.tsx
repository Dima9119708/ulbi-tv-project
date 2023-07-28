import { ImgHTMLAttributes } from 'react';
import { cn } from 'shared/lib/classNames/classNames';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {}

const Avatar = (props: AvatarProps) => {
    const { className, src, alt } = props;

    return (
        <img className={cn('rounded-[50%]', className)} src={src} alt={alt} />
    );
};

export default Avatar;
