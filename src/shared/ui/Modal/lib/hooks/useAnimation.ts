import { useEffect, useRef, useState } from 'react';

export const useAnimation = (open: boolean) => {
    const animation = useRef({
        timeout: null,
        requestAnimationFrameWrapper: null,
        requestAnimationFrameInner: null,
    });

    const [isMount, setMount] = useState(false);
    const [isShow, setShow] = useState(false);

    useEffect(() => {
        if (open) {
            setMount(true);

            animation.current.requestAnimationFrameWrapper = requestAnimationFrame(() => {
                animation.current.requestAnimationFrameInner = requestAnimationFrame(() => {
                    setShow(true);
                });
            });
        }
    }, [open]);

    useEffect(() => function clearUp() {
        clearTimeout(animation.current.timeout);
        cancelAnimationFrame(animation.current.requestAnimationFrameWrapper);
        cancelAnimationFrame(animation.current.requestAnimationFrameInner);
    }, []);

    const onAnimationAfterClose = () => {
        setShow(false);

        animation.current.timeout = setTimeout(() => {
            setMount(false);
        }, 400);
    };

    return {
        isMount,
        isShow,
        onAnimationAfterClose,
    };
};
