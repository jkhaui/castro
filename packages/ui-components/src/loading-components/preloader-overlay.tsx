import * as React from "react";
import {Preloader} from "konsta/react";
import {StackingContext} from "../utils/enums.mjs";
import {ICON_BASE_COLOR_CLASSNAME} from "../utils/classnames.js";

export interface PreloaderOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: string;
    preloaderProps?: any;
}

export const PreloaderOverlay = ({
                                     className = "",
                                     preloaderProps,
                                     size = "h-4 w-4",
                                     ...rest
                                 }: PreloaderOverlayProps) => {
    return (
        <div
            {...rest}
            className={`${StackingContext.ELEVATION_TOP} absolute top-0 left-0 bg-transparent flex items-center justify-center h-screen w-full ${className}`}
        >
            <Preloader
                {...preloaderProps}
                className={`select-none flex ${preloaderProps?.className ?? ICON_BASE_COLOR_CLASSNAME}`}
                size={size}
            />
        </div>
    )
}
