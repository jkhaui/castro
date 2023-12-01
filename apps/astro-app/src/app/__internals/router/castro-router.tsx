import * as React from "react";
import {APP_ROOT_PATH, formatDocumentTitle, QualifiedScreenNames} from "@/utils/index.mjs";

import {ArticleScreen, HomeScreen, UserScreen} from "@/app/(tabs)/home/index.mjs";
import {CategoriesScreen, DiscoverScreen, RecommendationsScreen, TrendingScreen} from "@/app/(tabs)/discover/index.mjs";
import {EditScreen, SettingsScreen} from "@/app/(tabs)/settings/index.mjs";
import {AccountScreen, NotificationsScreen, SubscriptionScreen} from "@/app/(tabs)/notifications/index.mjs";
import {NotFoundScreen} from "@/app/not-found/index.mjs";
import {NavigationContainer, useNavigationContainerRef} from "@react-navigation/native";
import {createWebStackNavigator} from "../../../../../../packages/router/src/web-stack-navigator/web-stack-navigator.js";
import {buildScreenPaths, RouterActions, useRouter} from "../../../../../../packages/router/src/index.mjs";
import {AvatarGlobal, DefaultView, LoaderType, LoadingScreen, OptionsMenu} from "@castro/ui-components";
import {OfflineScreen} from "@/app/offline/index.js";

const Stack = createWebStackNavigator();

const tabToScreensConfig = new Map([
    [
        QualifiedScreenNames.ROOT, [{
        name: QualifiedScreenNames.HOME,
        path: "",
        component: HomeScreen,
        headerProps: {
            left: <AvatarGlobal src={"images/anon_avatar.png"}/>,
            right: <OptionsMenu/>,
            medium: false,
            title: ""
        }
    }, {
        name: QualifiedScreenNames.ARTICLE,
        path: QualifiedScreenNames.ARTICLE,
        component: ArticleScreen
    }, {
        name: QualifiedScreenNames.USER,
        path: QualifiedScreenNames.USER,
        component: UserScreen
    }]
    ], [
        QualifiedScreenNames.DISCOVER, [{
            name: QualifiedScreenNames.DISCOVER,
            path: QualifiedScreenNames.DISCOVER,
            component: DiscoverScreen,
            headerProps: {
                left: <AvatarGlobal src={"images/anon_avatar.png"}/>,
                right: <OptionsMenu/>,
                medium: true
            }
        }, {
            name: QualifiedScreenNames.CATEGORIES,
            path: `${QualifiedScreenNames.DISCOVER}/${QualifiedScreenNames.CATEGORIES}`,
            component: CategoriesScreen,
            headerProps: {
                medium: true
            }
        }, {
            name: QualifiedScreenNames.RECOMMENDATIONS,
            path: `${QualifiedScreenNames.DISCOVER}/${QualifiedScreenNames.RECOMMENDATIONS}`,
            component: RecommendationsScreen,
            headerProps: {
                medium: true
            }
        }, {
            name: QualifiedScreenNames.TRENDING,
            path: `${QualifiedScreenNames.DISCOVER}/${QualifiedScreenNames.TRENDING}`,
            component: TrendingScreen,
            headerProps: {
                medium: true
            }
        }]
    ], [
        QualifiedScreenNames.NOTIFICATIONS, [{
            name: QualifiedScreenNames.NOTIFICATIONS,
            path: QualifiedScreenNames.NOTIFICATIONS,
            component: NotificationsScreen,
            headerProps: {
                left: <AvatarGlobal src={"images/anon_avatar.png"}/>,
                right: <OptionsMenu/>,
                medium: true
            }
        }, {
            name: QualifiedScreenNames.ACCOUNT,
            path: `${QualifiedScreenNames.NOTIFICATIONS}/${QualifiedScreenNames.ACCOUNT}`,
            component: AccountScreen,
            headerProps: {
                medium: true
            }
        }, {
            name: QualifiedScreenNames.SUBSCRIPTION,
            path: `${QualifiedScreenNames.NOTIFICATIONS}/${QualifiedScreenNames.SUBSCRIPTION}`,
            component: SubscriptionScreen,
            headerProps: {
                medium: true
            }
        }]
    ], [
        QualifiedScreenNames.SETTINGS, [
            {
                name: QualifiedScreenNames.SETTINGS,
                path: QualifiedScreenNames.SETTINGS,
                component: SettingsScreen,
                headerProps: {
                    left: <AvatarGlobal src={"images/anon_avatar.png"}/>,
                    right: <OptionsMenu/>,
                    medium: true
                }
            }, {
                name: QualifiedScreenNames.EDIT,
                path: `${QualifiedScreenNames.SETTINGS}/${QualifiedScreenNames.EDIT}`,
                component: EditScreen,
                headerProps: {
                    medium: true
                }
            }
        ]
    ]
]);

const isDevMode = import.meta.env.DEV;

const DefaultLoadingScreen = ({theme, dark}) => {
    return (
        <LoadingScreen loaderType={LoaderType.ICON_NATIVE} theme={theme} dark={dark}/>
    )
}

export const CastroRouter = ({
                                 location,
                                 appRootPath,
                                 appRootScreen = QualifiedScreenNames.HOME,
                                 pathnameOptions = {
                                     basePath: APP_ROOT_PATH,
                                     notFoundScreenName: QualifiedScreenNames.NOT_FOUND,
                                     offlineScreenName: QualifiedScreenNames.OFFLINE,
                                     omitHomePathnameFromRootScreens: true
                                 },
                                 isDesktop,
                                 theme,
                                 dark
                             }
) => {
    const navigationRef = useNavigationContainerRef();
    const router = useRouter();

    const [isNavigationReady, setIsNavigationReady] = React.useState(false);

    const {
        initialTabPath,
        initialActiveSegment,
        searchParams
    } = location;

    const initialRouteName =
        // TODO: can probably refactor this & remove redundant check, but for now it's
        // necessary to integrate with the view transitions router
        router.initialRouteName ?? initialTabPath;

    const initialFocusedRoute = initialActiveSegment ?? appRootScreen;

    const {notFoundScreenName, offlineScreenName} = pathnameOptions;

    const screens = [
        ...tabToScreensConfig?.get(initialRouteName) ?? [],
        ...(notFoundScreenName && [{
            name: notFoundScreenName,
            path: "*",
            component: NotFoundScreen
        }]),
        {
            name: "offline",
            path: "offline",
            component: OfflineScreen
        }
        // ...(offlineScreenName && [{
        //     name: offlineScreenName,
        //     path: QualifiedScreenNames.OFFLINE,
        //     component: OfflineScreen
        // }])
    ]

    if (!screens) {
        console.warn("Something went wrong registering your app's screens");
        return null;
    }

    return (
        <NavigationContainer
            ref={navigationRef}
            documentTitle={{
                // Add this check as it's pointless to update the page title on the initial
                // server render
                enabled: !!(navigationRef.current),
                formatter: (options, route) =>
                    formatDocumentTitle(route?.name, options?.title),
            }}
            onStateChange={(state) => {
                // isDevMode && console.log(JSON.stringify(state), 'NAVIGATION_STATE')
                // RouterActions.setTabHistory(initialRouteName, JSON.stringify(state))
            }}
            // initialState={!router.tabHistory?.has(initialRouteName) ? undefined : JSON.parse(router.tabHistory?.get(initialRouteName))}
            onReady={() => {
                setIsNavigationReady(true)
                RouterActions.setNavigationRef(navigationRef.current)
            }}
            linking={{
                config: {
                    initialRouteName,
                    screens: {
                        ...buildScreenPaths(screens)
                    }
                }
            }}
        >
            <React.Suspense fallback={<DefaultLoadingScreen theme={theme} dark={dark}/>}>
                <Stack.Navigator
                    id={`__${initialRouteName}`}
                    FrozenPlaceholderFallback={<DefaultLoadingScreen theme={theme} dark={dark}/>}
                    screenOptions={{
                        animationEnabled: true,
                        gestureEnabled: true,
                    }}
                    initialFocusedRoute={initialFocusedRoute}
                    initialRouteName={initialRouteName}
                    isNavigationReady={isNavigationReady}
                >
                    <Stack.Group screenOptions={{presentation: "card"}}>
                        {screens.map(({
                                          name,
                                          component: Component,
                                          initialParams,
                                          children,
                                          headerProps = {}
                                      }) => (
                            <Stack.Screen
                                key={name}
                                name={name}
                                initialParams={initialParams}
                                // navigationKey={isAuthenticated ? 'authorised': 'unauthorised'}
                            >
                                {({route, navigation}) => (
                                    <DefaultView
                                        initialFocusedRoute={initialFocusedRoute}
                                        focusedRoute={initialFocusedRoute}
                                        isNavigationReady={isNavigationReady}
                                        Component={Component}
                                        children={children}
                                        headerProps={headerProps}
                                        isDesktop={isDesktop}
                                        route={route}
                                        navigation={navigation}
                                        theme={theme}
                                        dark={dark}
                                    />
                                )}
                            </Stack.Screen>
                        ))}
                    </Stack.Group>
                    {/*<Stack.Group screenOptions={{presentation: "modal"}}>*/}
                    {/*<React.Suspense fallback={<PreloaderOverlay/>}>*/}
                    {/*</React.Suspense>*/}
                    {/*</Stack.Group>*/}
                </Stack.Navigator>
            </React.Suspense>
        </NavigationContainer>
    )
}
