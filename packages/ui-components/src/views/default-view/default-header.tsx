import * as React from "react";
import {KonstaProvider, Navbar} from "konsta/react";
import {formatTitle} from "../../utils/utils.mjs";
import {BackButton, BackButtonProps} from "../../base/back-button.js";
import type {Router} from "@react-navigation/native";
import {CONTENT_MAX_WIDTH_CLASSNAME} from "../../utils/index.js";

export interface DefaultHeaderProps {
    navigation: Router<any, any>;
    translucent?: boolean;
    transparent?: boolean;
    outline?: boolean;
    medium?: boolean;
    large?: boolean;
    colors: any;
    scrollContainerRef?: any;
    bgClassName?: string;
    className?: string;
    innerClassName?: string;
    TitleComponent?: React.ReactElement | string;
    title: string;
    left?: React.ReactNode;
    theme: string;
    dark: boolean;
    backButtonProps?: BackButtonProps;
    component?: any;
    initialRouteName?: string;
    isAtViewportTop?: boolean;
    right?: React.ReactNode;
    isDesktop?: boolean;
    centerTitle?: boolean;
}

export const DefaultHeader = ({
                                  navigation,
                                  translucent = true,
                                  transparent = true,
                                  outline,
                                  medium = false,
                                  large = false,
                                  bgClassName = "ios:bg-transparent lg:bg-transparent",
                                  className,
                                  innerClassName = "lg:!justify-start",
                                  colors = {},
                                  title,
                                  TitleComponent = "h1",
                                  left,
                                  theme,
                                  dark,
                                  backButtonProps,
                                  initialRouteName,
                                  component: Component = "header",
                                  scrollContainerRef,
                                  isAtViewportTop,
                                  isDesktop,
                                  centerTitle,
                                  ...navbarProps
                              }: DefaultHeaderProps) => {
    const guessHeaderHeight = (medium, large) => {
        if (large) {
            return 96
        }

        if (medium) {
            return 88
        }

        return 44
    }

    if (!scrollContainerRef?.current) {
        return (
            <Component
                className={`w-full ${CONTENT_MAX_WIDTH_CLASSNAME} lg:px-6`}
                style={{
                    minHeight: guessHeaderHeight(medium, large)
                }}
            />
        )
    }

    return (
        <KonstaProvider theme={!isDesktop ? theme : "ios"} dark={dark}>
            <Navbar
                bgClassName={bgClassName}
                translucent={translucent}
                transparent={transparent}
                outline={outline}
                medium={medium}
                large={large}
                className={className ?? `${CONTENT_MAX_WIDTH_CLASSNAME} lg:px-6`}
                innerClassName={innerClassName}
                colors={{
                    ...colors,
                    ...(translucent && transparent && {
                        bgIos: "bg-ios-light-surface-2"
                    })
                }}
                title={title ? <TitleComponent>{formatTitle(title)}</TitleComponent> : null}
                component={Component}
                left={left ?? (
                    <BackButton
                        theme={theme}
                        dark={dark}
                        navigation={navigation}
                        isDesktop={isDesktop}
                    />
                )}
                centerTitle={centerTitle ?? (!isDesktop && theme === "ios")}
                scrollEl={scrollContainerRef?.current}
                {...navbarProps}
            />
        </KonstaProvider>
    )
}
