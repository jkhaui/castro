import type {AstroIntegration} from "astro";

export default function (): AstroIntegration {
    return {
        name: '@castro/react-native',
        hooks: {
            'astro:config:setup': {

            }
        }
    }
}
