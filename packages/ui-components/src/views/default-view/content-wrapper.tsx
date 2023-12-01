import * as React from "react";
import {CONTENT_MAX_WIDTH_CLASSNAME} from "../../utils/index.js";

export const ContentWrapper = ({className, contentWrapperMaxWidth = CONTENT_MAX_WIDTH_CLASSNAME, children}) => {
    return (
        <div
            className={className ??
                `pt-[88px] ios:pb-[128px] material:pb-[144px] lg:pt-28 lg:px-5 lg:pb-6 relative flex-col w-full min-h-screen ${contentWrapperMaxWidth} lg:hairline-l lg:hairline-r flex mx-auto`}
        >
            {children}
        </div>
    )
}
