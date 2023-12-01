import * as React from "react";
import type {
    ScrollAreaCornerProps,
    ScrollAreaProps,
    ScrollAreaScrollbarProps,
    ScrollAreaThumbProps,
    ScrollAreaViewportProps
} from "@radix-ui/react-scroll-area";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import {ContentWrapper} from "./content-wrapper.js";

export interface ScrollAreaViewProps {
    children?: React.ReactNode;
    handleIsScrollAreaReady?: (state: boolean) => void;
    isAtViewportTop?: boolean;
    handleIsAtViewportTop?: (state: boolean) => void;
    scrollAreaRootProps?: ScrollAreaProps;
    scrollAreaViewportProps?: ScrollAreaViewportProps;
    scrollAreaScrollbarProps?: ScrollAreaScrollbarProps;
    scrollAreaThumbProps?: ScrollAreaThumbProps;
    scrollAreaCornerProps?: ScrollAreaCornerProps;
    contentWrapperProps?: React.DetailedHTMLProps<{}, {}>;
    isNavigationReady: boolean;
    route: any;
    focusedRoute: string;
    isDesktop: boolean;
    standaloneView?: boolean;
}

export const ScrollAreaView = React.forwardRef<HTMLDivElement, ScrollAreaViewProps>(({
                                                                                         children,
                                                                                         handleIsScrollAreaReady,
                                                                                         isAtViewportTop,
                                                                                         handleIsAtViewportTop,
                                                                                         scrollAreaRootProps,
                                                                                         scrollAreaViewportProps,
                                                                                         scrollAreaScrollbarProps,
                                                                                         scrollAreaThumbProps,
                                                                                         scrollAreaCornerProps,
                                                                                         contentWrapperProps,
                                                                                         isNavigationReady,
                                                                                         route,
                                                                                         focusedRoute,
                                                                                         isDesktop,
                                                                                         standaloneView
                                                                                     },
                                                                                     ref
) => {
    const bindScrollRefToViewport = React.useCallback((node) => {
        if (!ref.current) {
            ref.current = node;
            handleIsScrollAreaReady(true)
        }
    }, [ref, handleIsScrollAreaReady])

    const handleScroll = React.useCallback(() => {
        handleIsAtViewportTop(ref?.current?.scrollTop === 0)
    }, [ref]);

    return (
        <>
            <ScrollArea.Viewport
                ref={bindScrollRefToViewport}
                className={scrollAreaViewportProps?.className ?? "-mt-[88px] min-h-screen relative w-full flex"}
                style={{
                    scrollBehavior: "smooth",
                    ...(scrollAreaViewportProps?.style && {
                        ...scrollAreaViewportProps.style
                    })
                }}
                onScroll={handleScroll}
                {...scrollAreaViewportProps}
            >
                <ContentWrapper {...contentWrapperProps}>
                    {children}
                </ContentWrapper>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
                className={scrollAreaScrollbarProps?.className ??
                    `flex !touch-none select-none transition-colors h-full ${isDesktop ? "w-2.5" : "w-0"} border-l border-l-transparent p-[1px]`}
                orientation="vertical"
                {...scrollAreaScrollbarProps}
            >
                {isDesktop && (
                    <ScrollArea.Thumb
                        className={scrollAreaThumbProps?.className ?? `flex flex-1 relative rounded-full bg-gray-400 dark:bg-gray-600`}
                        {...scrollAreaThumbProps}
                    />
                )}
            </ScrollArea.Scrollbar>
            {isDesktop && (
                <ScrollArea.Corner
                    className={scrollAreaCornerProps?.className ?? ""}
                    {...scrollAreaCornerProps}
                />
            )}
        </>
    )
});
