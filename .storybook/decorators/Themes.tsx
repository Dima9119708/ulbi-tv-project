import type { StoryFn } from "@storybook/react";
import {useEffect, useGlobals} from "@storybook/addons";

export default (Story: StoryFn) => {
    const [{ theme }] = useGlobals();

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);

        const nodeListDocs: NodeListOf<HTMLDivElement> = document.querySelectorAll('.docs-story')

        if (nodeListDocs.length) {
            nodeListDocs.forEach($docs => {
                $docs.style.backgroundColor = 'var(--color-bg)'
            })
        }

    }, [theme]);

    return <Story />;
}
