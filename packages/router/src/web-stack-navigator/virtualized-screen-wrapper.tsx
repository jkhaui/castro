import * as React from "react";
import {Freeze} from "react-freeze";
import {useRouterSnapshot} from "../index.mjs";
import {AnimatedScreenWrapper} from "./animated-screen-wrapper.js";

export const VirtualizedScreenWrapper = ({
                                             routes,
                                             index,
                                             descriptors,
                                             routeKey: key,
                                             screenOptions,
                                             FrozenPlaceholderFallback,
                                             frozenStackSize,
                                             isNavigationReady
                                         }) => {
    const screen = descriptors[key];
    // TODO: Probably will need this when implementing modal views
    // const presentation = screen?.options?.presentation ?? 'card';

    const positionInStack = routes.findIndex((r) => r.key === key);

    const routerSnapshot = useRouterSnapshot()

    // Note: will need to lift this logic higher up the tree once the interaction
    // between `react-freeze`, React concurrent mode, & Suspense is better
    // understood.
    const shouldFreeze = /*screenOptions?.enableFreeze &&*/
        (positionInStack < frozenStackSize) &&
        // Ensures that concurrent links navigating vua `startTransition`
        // are compatible with "frozen" screens in the offscreen stack.
        // To opt out of this optimisation, all navigation transitions should
        // either be made synchronous, or `react-freeze` should be disabled.
        !routerSnapshot.isTransitioning && isNavigationReady;

    return (
        <Freeze
            freeze={shouldFreeze}
            // placeholder={shouldFreeze ? null : FrozenPlaceholderFallback}
        >
            <AnimatedScreenWrapper
                isNavigationReady={isNavigationReady}
                screenOptions={screenOptions}
                index={index}
                shouldFreeze={shouldFreeze}
                routes={routes}
                routeKey={key}
            >
                {screen.render()}
            </AnimatedScreenWrapper>
        </Freeze>
    );
}
