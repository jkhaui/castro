// @ts-nocheck
import type {AstroIntegration} from "astro";
import {utils} from "./utils.mjs";

export default function devLogger(): AstroIntegration {
    return {
        name: '@castro/isomorphic-devtools',
        hooks: {
            'astro:config:setup': ({command, config, addWatchFile, logger}) => {
                if (command === 'dev') {
                    addWatchFile("./utils.mts")

                    utils(logger, config)
                }

                if (command === 'build') {
                    logger.info(`BUILD CONFIG: ${JSON.stringify(config)}`)
                }
            },
            'astro:build:setup': ({vite, logger}) => {
                logger.info(`
                    === FINAL ASTRO CONFIG ===
                    
                    ${JSON.stringify(vite.optimizeDeps)}
                    
                    === FINAL ASTRO CONFIG ===
                `)
            }
        }
    }
}
