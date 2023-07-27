import { cn } from 'shared/lib/classNames/classNames';
import css from './Loading.module.css';

interface LoadingProps {
    on: boolean,
    className?: string,
}

const Loading = (props: LoadingProps) => {
    const { on, className } = props;

    return (
        <div className={cn('flex-center', className)}>
            <div className={cn(
                css.loading,
                'transition-[opacity_0.3s_ease] [&_div]:bg-color-inverted-bg',
                {
                    'opacity-0': !on,
                    'opacity-100': on,
                },
            )}
            >
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
};

export default Loading;
