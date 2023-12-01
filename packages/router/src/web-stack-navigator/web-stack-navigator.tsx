import * as React from "react";
import {
    createNavigatorFactory,
    ParamListBase,
    StackNavigationState,
    useNavigationBuilder,
} from "@react-navigation/native";
import {WebStackRouter} from "./web-stack-router.js";
import {AnimatePresence, useMotionValue} from "framer-motion";
import {VirtualizedScreenWrapper} from "./virtualized-screen-wrapper.js";

// type NavigatorTypes = ReturnType<typeof useNavigationBuilder>;

export type WebStackNavigationEventMap = {};

export interface NavigatorProps {
    initialRouteName?: Parameters<
        typeof useNavigationBuilder
    >[1]["initialRouteName"];
    initialFocusedRoute?: Parameters<typeof useNavigationBuilder>[1]["initialFocusedRoute"];
    screenOptions?: Parameters<typeof useNavigationBuilder>[1]["screenOptions"];
    id?: Parameters<typeof useNavigationBuilder>[1]["id"];
    children?: Parameters<typeof useNavigationBuilder>[1]["children"];
    router?: Parameters<typeof useNavigationBuilder>[0];
    FrozenPlaceholderFallback?: React.ReactNode | React.ExoticComponent;
    isNavigationReady?: boolean;
}

export type WebStackNavigationOptions = {
    animationEnabled?: boolean;
    gestureEnabled?: boolean;
    presentation?: "card" | "modal" | "sheetModal";
    asChild?: boolean;
}

function WebStackNavigator({
                               initialRouteName,
                               children,
                               initialFocusedRoute,
                               id,
                               screenOptions = {
                                   animationEnabled: true,
                                   gestureEnabled: true,
                                   header: null,
                                   headerShown: true,
                               },
                               router = WebStackRouter,
                               FrozenPlaceholderFallback = null,
                               isNavigationReady
                           }: NavigatorProps) {
    const {
        state: {routes, index},
        descriptors,
        NavigationContent
    } = useNavigationBuilder(router, {
        initialRouteName,
        children,
        initialFocusedRoute,
        id
    });
    const AnimatePresenceOrFragment = screenOptions?.animationEnabled
        ? AnimatePresence
        : React.Fragment;

    // Currently, we freeze every screen except for:
    // - The currently focused screen (i.e. the top/first screen in the stack)
    // - The top screen in the offscreen stack (i.e. the second screen in the stack)
    // This is because the second screen should always be "ready" to display the latest
    // UI at any given moment (e.g. LTR swipe-to-go-back gestures on iOS).
    //
    // While it"s probably possible to also freeze the second screen, for now it"s
    // considered premature micro-optimisation.
    const frozenStackSize = routes.length - 2;

    return (
        <NavigationContent>
            <AnimatePresenceOrFragment>
                {routes?.map(({key}) => (
                    <VirtualizedScreenWrapper
                        key={key}
                        isNavigationReady={isNavigationReady}
                        FrozenPlaceholderFallback={FrozenPlaceholderFallback}
                        screenOptions={screenOptions}
                        routeKey={key}
                        descriptors={descriptors}
                        routes={routes}
                        index={index}
                        frozenStackSize={frozenStackSize}
                        initialFocusedRoute={initialFocusedRoute}
                    />
                ))}
            </AnimatePresenceOrFragment>
        </NavigationContent>
    );
}

export const createWebStackNavigator = createNavigatorFactory<
    StackNavigationState<ParamListBase>,
    WebStackNavigationOptions,
    WebStackNavigationEventMap,
    typeof WebStackNavigator
>(WebStackNavigator);
