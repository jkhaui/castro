// import {useUserAgent} from "astro-useragent";
import type {RequestContext} from '@vercel/edge';

export default function middleware({request, context}: { request: Request; context: RequestContext }) {
    // const uaString = request.headers.get('user-agent');
    //
    // const {isIos, isDesktop} = useUserAgent(uaString);
    request.headers.set("x-astro-locals", JSON.stringify({
        isDesktop: true,
        isDarkMode: true
    }))

    const url = new URL(request.url);

    return {
        // isIos,
        // isDesktop,
        // theme: isIos ? PlatformTheme.IOS : PlatformTheme.MATERIAL,
        // isDarkMode: true
        isDesktop: true,
        isDarkMode: true
    };
}
