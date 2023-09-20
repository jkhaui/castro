import type { AstroIntegration } from "astro";

export default function (): AstroIntegration {
    return {
        name: '@castro/react-navigation-polyfill',
        hooks: {
            'astro:config:setup': ({ injectScript }) => {
                injectScript('before-hydration', 'window.global = window;');
            }
        }
    }
}