import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import {useAnimate, useMotionValue, usePresence} from "framer-motion";

export const AnimatedScreenWrapper = React.forwardRef(({
                                                           asChild,
                                                           screenOptions,
                                                           isNavigationReady,
                                                           routeKey: key,
                                                           routes,
                                                           index,
                                                           shouldFreeze,
                                                           ...rest
                                                       }, ref) => {
    const isFocused = routes[index].key === key;

    const x = useMotionValue(0);
    const [isPresent, safeToRemove] = usePresence();
    const [scope, animate] = useAnimate();

    React.useImperativeHandle(ref, () => ({
        scope
    }));

    React.useEffect(() => {
        if (shouldFreeze ?? !isNavigationReady) {
            return;
        }

        if (isFocused && !isPresent) {
            safeToRemove()

            return;
        }

        if (isFocused) {
            if (x.get() === 100) {
                x.set(0);
            }

            const enterAnimation = async () => {
                await animate(scope.current, {opacity: 1, x: `${x.get()}%`}, {
                    duration: 0.5,
                    stiffness: 260,
                    damping: 30,
                    type: "tween"
                })
            }

            enterAnimation().then(() => {
                if (x.get() === 0) {
                    x.set(100);
                }
            })
        } else {
            const exitAnimation = async () => {
                await animate(scope.current, {opacity: 0, x: "-100%"}, {
                    duration: 0.5,
                    stiffness: 260,
                    damping: 30,
                    type: "tween"
                })
            }

            exitAnimation()
        }
    }, [isPresent, scope, routes, index, key, isNavigationReady])

    const Component = asChild ? Slot : "div";

    return (
        <Component ref={scope} {...rest}/>
    )
});
