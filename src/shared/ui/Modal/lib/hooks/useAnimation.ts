import {
    MutableRefObject, useEffect, useRef, useState,
} from 'react';

type AnimationTypes = {
    requestAnimationFrameInner: ReturnType<typeof requestAnimationFrame> | null,
    timeout: ReturnType<typeof setTimeout> | null,
    requestAnimationFrameWrapper: ReturnType<typeof requestAnimationFrame> | null
};

export const useAnimation = (open: boolean) => {
    const animation: MutableRefObject<AnimationTypes> = useRef({
        requestAnimationFrameInner: null,
        timeout: null,
        requestAnimationFrameWrapper: null,
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
        if (typeof animation.current.timeout === 'number') {
            clearTimeout(animation.current.timeout);
        }
        if (typeof animation.current.requestAnimationFrameWrapper === 'number') {
            cancelAnimationFrame(animation.current.requestAnimationFrameWrapper);
        }
        if (typeof animation.current.requestAnimationFrameInner === 'number') {
            cancelAnimationFrame(animation.current.requestAnimationFrameInner);
        }
    }, []);

    return {
        isMount,
        isShow,
        onAnimationAfterClose,
    };
};
