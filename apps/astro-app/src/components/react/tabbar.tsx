import * as React from "react";
import {KonstaProvider, Tabbar as KonstaTabbar} from "konsta/react";
import {TabNavLink} from "./tab-nav-link";

export const Tabbar = ({theme = 'ios', currentPath}) => {
    const tabLabels = ['Home', 'Discover', 'Profile', 'Settings'];
    const ROOT_PATH = '/';

    const tabRoutes = React.useMemo(
        () => [
            ROOT_PATH,
            ...tabLabels
                .slice(1)
                .map(
                    (route: string) =>
                        `${route !== ROOT_PATH ? ROOT_PATH : ''}${route.toLowerCase()}`,
                ),
        ],
        [tabLabels],
    );

    return (
        <KonstaProvider theme={theme} dark>
            <KonstaTabbar
                colors={{
                    bgIos: 'bg-ios-light-surface-2',
                }}
                bgClassName={'bg-transparent'}
                labels
                icons
                className={'left-0 bottom-0 fixed z-30'}
            >
                {tabRoutes.map((tabRoute, index) => {
                    return (
                        <TabNavLink
                            key={tabRoute}
                            tabRoute={tabRoute}
                            activeTab={currentPath.toLowerCase()}
                            label={tabLabels[index]}
                            index={index}
                        />
                    )
                })}
            </KonstaTabbar>
        </KonstaProvider>
    )
}
