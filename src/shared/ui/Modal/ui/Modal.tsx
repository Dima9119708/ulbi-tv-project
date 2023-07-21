import React, { ReactNode, useEffect } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal';

interface ModalProps {
    classNameRoot?: string,
    classNameOverlay?: string,
    classNameChildren?: string,
    children?: ReactNode,
    open?: boolean,
    onClose?: () => void,
}

const Modal = (props: ModalProps) => {
    const {
        open,
        onClose,
        children,
        classNameRoot,
        classNameOverlay,
        classNameChildren,
    } = props;

    const onOverlay = () => {
        onClose();
    };

    const onChildren = (e: React.MouseEvent) => {
        e.stopPropagation();
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

        return () => window.removeEventListener('keydown', onKeydown);
    }, [onClose, open]);

    return (
        <Portal>
            <div className={cn('fixed inset-0 z-modal transition-[visibility__0.4s,_opacity_0.4s]', {
                'invisible opacity-0': open === false,
            }, classNameRoot)}
            >
                <div
                    onClick={onOverlay}
                    className={cn('bg-color-overlay h-[100%] w-[100%] flex-center', classNameOverlay)}
                >
                    <div
                        onClick={onChildren}
                        className={cn('max-w-[60%] bg-color-bg rounded-[0.4rem] transition-[transform_0.4s]', {
                            'scale-[0.4]': open === false,
                            'scale-[1]': open === true,
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
