import { extendTailwindMerge } from 'tailwind-merge';

export const tailwindMerge = extendTailwindMerge((defaultConfig) => ({
    ...defaultConfig,
    classGroups: {
        ...defaultConfig.classGroups,
        text: [{ text: ['l', 'm', 'xl'] }],
    },
}));
