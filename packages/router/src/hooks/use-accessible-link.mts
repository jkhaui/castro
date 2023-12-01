import {NavigationAction, useLinkProps, useNavigation} from "@react-navigation/native";
import * as React from "react";
import {RouterActions} from "../store/index.mjs";

export type Screen = {
    screen: string
}

export interface UseLinkClickOptions {
    to: Screen;
    params?: any;
    action?: NavigationAction;
    href?: string;
    concurrent?: boolean;
}

/**
 * Wraps react-navigation's `useLinkProps` hook to provide a simpler, web-friendly
 * API with first-class React Transition integration.
 *
 * */
export const useAccessibleLink = ({to, action, href, concurrent}: UseLinkClickOptions): {
    isPending: boolean;
    handlePress: (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    path?: string;
} => {
    // @ts-ignore
    const {
        onPress,
        href: path
    } = useLinkProps({
        screen: to.screen,
        action,
        href
    })

    // const navigation = useNavigation();

    const [isPending, startTransition] = React.useTransition();

    React.useEffect(() => {
        if (!concurrent) {
            return;
        }

        RouterActions.setIsTransitioning(isPending);
    }, [isPending]);

    const handlePressConcurrent = React.useCallback((e) => {
        startTransition(() => {
            onPress(e);
            // navigation.navigate(to.screen)
        })
    }, []);

    const handlePress = React.useCallback((e) => {
        onPress(e);
    }, []);

    return {
        isPending,
        handlePress: concurrent ? handlePressConcurrent : handlePress,
        path
    }
}
