import type { AstroIntegration } from "astro";

export default function (): AstroIntegration {
    return {
        name: '@castro/react-native-web-polyfill',
        hooks: {
            'astro:config:setup': ({ injectScript }) => {
                // TODO: inject polyfills into user's astro/vite config
            }
        }
    }
}
