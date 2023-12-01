import * as React from 'react';
import {ProgressBarIndeterminate} from './progress-bar-indeterminate.js';
import {LoaderType} from "../utils/enums.mjs";
import {PreloaderOverlay} from "./preloader-overlay.js";
import {SkeletonTitle, SkeletonTitleProps} from "./skeleton-title.js";
import {SkeletonBody, SkeletonBodyProps} from "./skeleton-body.js";
import {KonstaProvider} from "konsta/react";

export interface LoadingScreenProps {
    rowHeight?: string;
    rowCount?: number;
    skeletonWrapperProps?: React.DetailedHTMLProps<any, any>;
    skeletonTitleProps?: SkeletonTitleProps;
    skeletonBodyProps?: SkeletonBodyProps;
    preloaderOverlayProps?: any;
    progressBarIndeterminateProps?: any;
    showTopProgressBar?: boolean;
    loaderType?: LoaderType;
    theme?: string;
    dark?: boolean;
}

export const LoadingScreen = ({
                                  rowCount,
                                  rowHeight,
                                  skeletonWrapperProps,
                                  progressBarIndeterminateProps,
                                  skeletonTitleProps,
                                  skeletonBodyProps,
                                  preloaderOverlayProps,
                                  showTopProgressBar = true,
                                  loaderType = LoaderType.SKELETON,
                                  theme = "ios",
                                  dark
                              }: LoadingScreenProps) => {
    return (
        <KonstaProvider theme={theme} dark={dark}>
            {showTopProgressBar && (
                <ProgressBarIndeterminate {...progressBarIndeterminateProps}/>
            )}
            {loaderType === LoaderType.SKELETON ? (
                <div
                    className={skeletonWrapperProps?.className ?? "max-w-lg w-full h-full m-4 pt-16"}
                    {...skeletonWrapperProps}
                >
                    <SkeletonTitle {...skeletonTitleProps}/>
                    <SkeletonBody rowHeight={rowHeight} rowCount={rowCount} {...skeletonBodyProps}/>
                </div>
            ) : (
                <PreloaderOverlay {...preloaderOverlayProps}/>
            )}
        </KonstaProvider>
    );
};
