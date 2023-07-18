import type { StoryFn } from "@storybook/react";
import {useEffect, useGlobals} from "@storybook/addons";

export default (Story: StoryFn) => {
    const [{ theme }] = useGlobals();

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return <Story />;
}
