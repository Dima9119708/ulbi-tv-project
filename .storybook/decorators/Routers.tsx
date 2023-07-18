import type { StoryFn } from "@storybook/react";
import {BrowserRouter} from "react-router-dom";

export default (Story: StoryFn) => {
    return (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    );
}
