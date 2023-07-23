import { useEffect, useRef, useState } from 'react';

export const useAnimation = (open: boolean) => {
    const animation = useRef({
        timeout: null,
        requestAnimationFrameWrapper: null,
        requestAnimationFrameInner: null,
    });

    const [isMount, setMount] = useState(false);
    const [isShow, setShow] = useState(false);

    const onAnimationAfterClose = () => {
        setShow(false);

        animation.current.timeout = setTimeout(() => {
            setMount(false);
        }, 400);
    };

    useEffect(() => {
        if (open) {
            setMount(true);

            animation.current.requestAnimationFrameWrapper = requestAnimationFrame(() => {
                animation.current.requestAnimationFrameInner = requestAnimationFrame(() => {
                    setShow(true);
                });
            });
        } else {
            onAnimationAfterClose();
        }
    }, [open]);

    useEffect(() => function clearUp() {
        clearTimeout(animation.current.timeout);
        cancelAnimationFrame(animation.current.requestAnimationFrameWrapper);
        cancelAnimationFrame(animation.current.requestAnimationFrameInner);
    }, []);

    return {
        isMount,
        isShow,
        onAnimationAfterClose,
    };
};
