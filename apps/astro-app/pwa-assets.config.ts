import {
    AllAppleDeviceNames,
    appleSplashScreenSizes,
    defineConfig,
    minimalPreset
} from '@vite-pwa/assets-generator/config'
import {AppleSplashScreenName, AppleSplashScreens, AppleTouchStartupImageOptions} from "@vite-pwa/assets-generator";

function createCustomAppleSplashScreens(
    options: {
        padding?: number
        resizeOptions?: any
        darkResizeOptions?: any
        linkMediaOptions?: AppleTouchStartupImageOptions
        name?: AppleSplashScreenName
    } = {}
) {
    const {
        padding,
        resizeOptions,
        name,
    } = options

    return <AppleSplashScreens>{
        sizes: AllAppleDeviceNames.map((deviceName) => appleSplashScreenSizes[deviceName]),
        padding,
        resizeOptions,
        linkMediaOptions: {
            // will log the links you need to add to your html pages
            log: true,
            // add screen to media attribute link?
            // by default:
            // <link rel="apple-touch-startup-image" href="..." media="screen and ...">
            addMediaScreen: true,
            basePath: '/',
            // add closing link tag?
            // by default:
            // <link rel="apple-touch-startup-image" href="..." media="...">
            // with xhtml enabled:
            // <link rel="apple-touch-startup-image" href="..." media="..." />
            xhtml: false
        },
        name,
    }
}

export default defineConfig({
    preset: {
        ...minimalPreset,
        appleSplashScreens: createCustomAppleSplashScreens({
            padding: 0.5,
            darkResizeOptions: {
                background: "#0A0A0AFF"
            },

        })
    },
    images: ['public/logo.svg']
})
