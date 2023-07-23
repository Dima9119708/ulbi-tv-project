// .storybook/preview.js
import React, { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from '../../src/shared/config/i18n/i18n';
import {useEffect, useGlobals} from "@storybook/addons";
import {StoryFn} from "@storybook/react";

// Wrap your stories in the I18nextProvider component
export default (Story: StoryFn) => {
    const [{ locale }] = useGlobals();

    // When the locale global changes
    // Set the new locale in i18n
    // useEffect(() => {
    //     i18n.changeLanguage(locale);
    // }, [locale]);

    return (
        // This catches the suspense from components not yet ready (still loading translations)
        // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
        <I18nextProvider i18n={i18n}>
            <Suspense fallback={<div>loading translations...</div>}>
                <Story />
            </Suspense>
        </I18nextProvider>
    );
};
