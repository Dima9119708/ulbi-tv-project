/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        colors: {
            color: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                bg: 'var(--color-bg)',
                overlay: 'var(--overlay-color)',
                'inverted-bg': 'var(--color-inverted-bg)',
                'inverted-secondary': 'var(--color-inverted-secondary)',
                'inverted-primary': 'var(--color-inverted-primary)',
            },
        },
        fontFamily: {
            sans: ['SF Pro Display', 'sans-serif'],
        },
        fontSize: {
            m: '1.6rem',
            l: '2.4rem',
            xl: '3rem',
        },
        lineHeight: {
            m: '2.4rem',
            l: '3.2rem',
            xl: '3rem',
        },
        zIndex: {
            modal: 1300,
        },
    },
    corePlugins: {
        transitionTimingFunction: false,
        transitionDelay: false,
        transitionProperty: false,
        transitionDuration: false,
    },
    plugins: [
        (api) => {
            api.addUtilities({
                '.transition-': {},
                '.flex-center': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            });

            api.matchUtilities({
                transition: (value) => ({
                    transition: value,
                }),
            });
        },
    ],
};
