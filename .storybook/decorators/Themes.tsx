import type {StoryFn} from "@storybook/react";
import {useEffect, useGlobals} from "@storybook/addons";
import {EnumVariantTheme} from "app/theme";

export default (themeName: EnumVariantTheme | null) => (Story: StoryFn) => {
    const [{ theme }] = useGlobals();

    useEffect(() => {
        if (!window.location.search.includes('viewMode=docs')) {
            document.body.setAttribute('data-theme', themeName ?? theme)
            return
        }

        const storiesNodes: NodeListOf<HTMLDivElement> = document.querySelectorAll('.sb-anchor')

        const stories = Array.from(storiesNodes)
        const $firstNode = stories.shift()

        if ($firstNode) {
            const $docsStory: HTMLDivElement = $firstNode.querySelector('.docs-story')

            $docsStory.setAttribute('data-theme', theme)
            $docsStory.style.backgroundColor = 'var(--color-bg)'
        }

        stories.forEach($story => {
            const themeName = $story.id.split('-').at(-1)
            const $docsStory: HTMLDivElement = $story.querySelector('.docs-story')

            let isDefaultTheme = false

            for (const enumValue in EnumVariantTheme) {
                if (EnumVariantTheme[enumValue as keyof typeof EnumVariantTheme] === themeName) {
                    isDefaultTheme = true
                }
            }

            $docsStory.setAttribute('data-theme', isDefaultTheme ? themeName : theme)
            $docsStory.style.backgroundColor = 'var(--color-bg)'
        })

    }, [theme, themeName]);

    return <Story />;
}
