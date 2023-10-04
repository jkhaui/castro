import {proxy} from "valtio";
import {globalDevOptions} from "@/store/global-dev-options";
import {PlatformTheme} from "@/utils/enums";

export const isomorphicStore = proxy({
    // Store device data (parsed from incoming UA headers) in a separate object
    // In this way, we can freeze the properties because they should never change
    // throughout a session.
    device: {
        isDesktop: false,
        isIos: false,
        theme: PlatformTheme.MATERIAL,
    },
    store: {
        isDarkMode: false,
        stack: {
            config: {
                initialRouteName: "",
                screens: null
            }
        },
        location: {
            pathname: "",
            search: "",
        }
    },
    ...globalDevOptions
});
