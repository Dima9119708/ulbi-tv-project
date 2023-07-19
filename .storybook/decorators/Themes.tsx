import type { StoryFn } from "@storybook/react";
import {useEffect, useGlobals} from "@storybook/addons";
import {EnumVariantTheme} from "app/theme";

export default (themeName: EnumVariantTheme | null) => (Story: StoryFn) => {
    const [{ theme }] = useGlobals();

    useEffect(() => {
        const $docsStory: HTMLDivElement = document.querySelector('.docs-story')

        document.body.setAttribute('data-theme', $docsStory ? theme : themeName);

        if ($docsStory) {
            $docsStory.style.backgroundColor = 'var(--color-bg)'
        }

    }, [theme, themeName]);

    return <Story />;
}
