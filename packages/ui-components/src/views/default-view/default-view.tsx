import * as React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import {DefaultHeader, ScrollAreaView} from "../../index.mjs";
import {KonstaProvider} from "konsta/react";

/**
 * `DefaultView` is intended to be used internally to wrap all screens.
 * It is essentially a parent component composed of a styled scrollable
 * view & *TODO* optional virtual scrolling + header/navbar.
 *
 * Coupling the scrollable container with the navbar is necessary because
 * either component needs awareness of the other for:
 * - Determining the margin-top offset for fullscreen content if iOS-style
 * translucent navbar styling is used
 * - Potentially setting the scroll depth programmatically when restoring
 * a view from navigation state
 *
 * The only way to achieve this in React is by sharing refs between
 * components. This also means we unfortunately need an initial loading
 * state until the ref can be assigned to its DOM node.
 *
 * */
export function DefaultView({
                                Component,
                                children,
                                navigation,
                                route,
                                // Allows us to re-use UI layout styles in views outside
                                // the navigation container with no header or scroll area,
                                // e.g. the root error boundary view.
                                standaloneView,
                                focusedRoute,
                                isNavigationReady,
                                isDesktop,
                                headerProps,
                                theme,
                                dark,
                                scrollAreaRootProps,
                                ...props
                            }) {
    const scrollContainerRef = React.useRef(null);

    const [isScrollAreaReady, setIsScrollAreaReady] = React.useState(false);
    const handleIsScrollAreaReady = React.useCallback((state) => {
        setIsScrollAreaReady(state);
    }, []);

    const [isAtViewportTop, setIsAtViewportTop] = React.useState(true);
    const handleIsAtViewportTop = React.useCallback((state) => {
        setIsAtViewportTop(state);
    }, []);


    const isFocused = route?.name === focusedRoute;
    const isVisible = isFocused || isNavigationReady || standaloneView;

    return (
        <KonstaProvider theme={theme} dark={dark}>
            <ScrollArea.Root
                className={scrollAreaRootProps?.className ??
                    `overflow-hidden bg-transparent flex-col flex-1 items-center !absolute top-0 left-0 h-screen w-screen ${
                        isVisible ? "flex" : "hidden"
                    }`}
                type="hover"
                {...scrollAreaRootProps}
            >
                <DefaultHeader
                    navigation={navigation}
                    title={headerProps?.title ?? route?.name}
                    scrollContainerRef={scrollContainerRef}
                    isAtViewportTop={isAtViewportTop}
                    isDesktop={isDesktop}
                    theme={theme}
                    dark={dark}
                    {...headerProps}
                />
                <ScrollAreaView
                    ref={scrollContainerRef}
                    handleIsScrollAreaReady={handleIsScrollAreaReady}
                    isAtViewportTop={isAtViewportTop}
                    route={route}
                    handleIsAtViewportTop={handleIsAtViewportTop}
                    standaloneView={standaloneView}
                    isDesktop={isDesktop}
                    {...props}
                >
                    {(!standaloneView && route?.name !== "404") ? (
                        <Component
                            init={isScrollAreaReady}
                            handleIsScrollAreaReady={handleIsScrollAreaReady}
                            scrollContainerRef={scrollContainerRef}
                            children={children}
                            isAtViewportTop={isAtViewportTop}
                            handleIsAtViewportTop={handleIsAtViewportTop}
                            scrollProps={{
                                isAtViewportTop,
                                scrollContainerRef,
                            }}
                            {...props}
                        />
                    ) : children}
                </ScrollAreaView>
            </ScrollArea.Root>
        </KonstaProvider>
    );
}
