import { ReactNode } from 'react';

export interface ModalPropsBase {
    open?: boolean
    onClose?: () => void,
    children?: ReactNode,
}

export interface ModalProps extends ModalPropsBase{
    classNameRoot?: string,
    classNameOverlay?: string,
    classNameChildren?: string,
}
