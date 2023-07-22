import React, { useEffect } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal';
import { ModalProps } from '../types';
import { useAnimation } from '../lib/hooks/useAnimation';

const Modal = (props: ModalProps) => {
    const {
        open,
        onClose,
        children,
        classNameRoot,
        classNameOverlay,
        classNameChildren,
    } = props;

    const {
        isMount,
        isShow,
        onAnimationAfterClose,
    } = useAnimation(open);

    const onChildren = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onOverlay = () => {
        onClose();
        onAnimationAfterClose();
    };

    useEffect(() => {
        const onKeydown = (e: KeyboardEvent) => {
            if (e.code === 'Escape') {
                onClose();
            }
        };

        if (open) {
            window.addEventListener('keydown', onKeydown);
        }

        return () => {
            window.removeEventListener('keydown', onKeydown);
        };
    }, [onClose, open]);

    if (!isMount) return null;

    return (
        <Portal>
            <div className={cn('fixed inset-0 z-modal opacity-0 transition-[visibility__0.4s,_opacity_0.4s]', {
                'opacity-100': isShow,
            }, classNameRoot)}
            >
                <div
                    onClick={onOverlay}
                    className={cn('bg-color-overlay h-[100%] w-[100%] flex-center', classNameOverlay)}
                >
                    <div
                        onClick={onChildren}
                        className={cn('max-w-[60%] bg-color-bg rounded-[0.4rem] transition-[transform_0.4s]', {
                            'scale-[0.4]': isShow === false,
                            'scale-[1]': isShow === true,
                        }, classNameChildren)}
                    >
                        { children }
                    </div>
                </div>
            </div>
        </Portal>

    );
};

export default Modal;
