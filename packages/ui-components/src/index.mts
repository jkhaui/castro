import type { AstroIntegration } from "astro";

export default function (): AstroIntegration {
    return {
        name: '@castro/mock',
        hooks: {
            'astro:config:setup': ({ injectScript }) => {
                // no-op
            }
        }
    }
}