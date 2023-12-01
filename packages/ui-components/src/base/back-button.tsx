import * as React from "react";
import {BackIcon} from "../icons/index.mjs";
import {StackActions} from "@react-navigation/native";
import {KonstaProvider, NavbarBackLink} from "konsta/react";
import {useCanGoBack} from "../../../router/src/index.mjs";

export interface BackButtonProps {
    Component?: React.ReactNode;
    onClick?: (e: React.SyntheticEvent) => void;
    navigation: any;
    theme?: string;
    dark?: boolean;
    className?: string;
    isDesktop: boolean;
}

const CustomBackLinkComponent = React.forwardRef(({
                                                      className,
                                                      theme,
                                                      dark,
                                                      isDesktop,
                                                      ...rest
                                                  },
                                                  ref
) => (
    <span
        ref={ref}
        className={`${className} text-gray-700 dark:text-white`}
        {...rest}
    >
        <BackIcon
            theme={theme}
            isDesktop={isDesktop}
        />
    </span>
));

export const BackButton = ({
                               Component,
                               navigation,
                               theme,
                               dark,
                               className = "material:-ml-0.75 lg:!-ml-1.5",
                               isDesktop
                           }: BackButtonProps) => {
    const canGoBack = useCanGoBack();

    if (!canGoBack) {
        return null;
    }

    return (
        <KonstaProvider theme={theme} dark={dark}>
            <NavbarBackLink
                theme={theme}
                dark={dark}
                className={className}
                component={Component ?? CustomBackLinkComponent}
                onClick={() => navigation.dispatch(StackActions.pop())}
                isDesktop={isDesktop}
            />
        </KonstaProvider>
    );
}
