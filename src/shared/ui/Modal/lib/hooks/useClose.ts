import React, { useRef } from 'react';

export const useClose = () => {
    const closeModal = useRef<{ target: EventTarget, isNeededClose: boolean }>({
        target: null,
        isNeededClose: false,
    });

    const onMouseDown = (e: React.MouseEvent) => {
        closeModal.current.target = e.target;
    };

    const onMouseUp = (e: React.MouseEvent) => {
        closeModal.current.isNeededClose = closeModal.current.target === e.target;
    };

    return { onMouseDown, onMouseUp, closeModal };
};
