import {AstroIntegrationLogger} from "astro";

export const utils = (logger: AstroIntegrationLogger, config: URL | string) => {
    logger.info(`
    === LOGGER CONFIG START ===
    
    ${JSON.stringify(config)})
    
    === LOGGER CONFIG END ===
    `);
}
