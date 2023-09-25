import {defineMiddleware} from "astro:middleware";
import {useUserAgent} from "astro-useragent";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(({
                                               locals,
                                               request
                                           },
                                           next) => {
    const uaString = request.headers.get('user-agent');
    const {isIos} = useUserAgent(uaString);

    locals.isIos = isIos;

    // return a Response or the result of calling `next()`
    return next();
});
