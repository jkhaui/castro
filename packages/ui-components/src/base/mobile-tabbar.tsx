import * as React from "react";
import {KonstaProvider, Tabbar as KonstaTabbar} from "konsta/react";
import {TabNavLink} from "./tab-nav-link.js";

export const MobileTabbar = ({
                                 tabbarProps = {
                                     component: "nav",
                                     colors: {
                                         bgIos: 'dark:bg-ios-dark-surface-2',
                                     },
                                     labels: true,
                                     icons: true
                                 },
                                 location: {
                                     initialTabPath,
                                     initialActiveSegment,
                                     tabBasePathSegments
                                 },
                                 tabLabels,
                                 className = "left-0 bottom-0 fixed",
                                 theme = 'ios',
                                 isDarkMode = true,
                                 ...rest
                             }) => {
    if (!tabBasePathSegments?.length) {
        throw new Error("Tab routes must be defined");
    }

    return (
        <KonstaProvider theme={theme} dark={isDarkMode}>
            <KonstaTabbar className={className} {...tabbarProps}>
                {tabBasePathSegments.map((tabBasePathSegment, index) => {
                    return (
                        <TabNavLink
                            key={tabBasePathSegment}
                            theme={theme}
                            tabBasePathSegment={tabBasePathSegment}
                            initialTabPath={initialTabPath}
                            initialActiveSegment={initialActiveSegment}
                            index={index}
                            label={tabLabels[index]}
                            {...rest}
                        />
                    )
                })}
            </KonstaTabbar>
        </KonstaProvider>
    )
}
