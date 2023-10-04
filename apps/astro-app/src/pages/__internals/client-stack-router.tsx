import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {AppRoutes} from "@/utils/enums";
import {capitalize} from "@/utils/utils";

import {ArticleScreen, FeedScreen, UserScreen} from "@/pages/_home/index.mjs";
import {CategoriesScreen, PopularScreen} from "@/pages/_discover/index.mjs";
import {EditScreen, TimelineScreen} from "@/pages/_profile/index.mjs";
import {NavigationContainer} from "@react-navigation/native";
import {PreloaderOverlay} from "@castro/ui-components/src/index.mjs";


const Stack = createStackNavigator();

const screenToComponentMap = new Map();

const registerStackScreens = (tab) => {
    switch (tab) {
        case AppRoutes.HOME:
            screenToComponentMap.set(AppRoutes.HOME, [{
                name: AppRoutes.FEED,
                component: FeedScreen,
                initialParams: {
                    segment: AppRoutes.TRENDING
                }
            }, {
                name: AppRoutes.ARTICLE,
                component: ArticleScreen
            }, {
                name: AppRoutes.USER,
                component: UserScreen
            }])
            break;
        case AppRoutes.DISCOVER:
            screenToComponentMap.set(AppRoutes.DISCOVER, [{
                name: AppRoutes.TRENDING,
                component: PopularScreen
            }, {
                name: AppRoutes.CATEGORIES,
                component: CategoriesScreen
            }])
            break;
        case AppRoutes.NOTIFICATIONS:
            break;
        case AppRoutes.PROFILE:
            screenToComponentMap.set(AppRoutes.PROFILE, [{
                name: AppRoutes.TIMELINE,
                component: TimelineScreen
            }, {
                name: AppRoutes.EDIT,
                component: EditScreen
            }])
            break;
        default:
            throw new Error("An issue occurred generating routes.")
    }
}


export const ClientStackRouter = ({tab, location}) => {
    const getTabFromPathname = () => {
        switch (location.pathname) {
            case "/":
                return AppRoutes.HOME;
            case "/discover":
                return AppRoutes.DISCOVER;
            case "/notifications":
                return AppRoutes.NOTIFICATIONS;
            case "/profile":
                return AppRoutes.PROFILE;
            default:
                // Maybe fail-fast and throw an error here instead
                console.warn("The current URL path could not be mapped to a registered tab. " +
                    "Falling back to an empty subpath.");
                return AppRoutes.HOME;
        }
    }

    const currentTab = getTabFromPathname()

    const initialRouteName = AppRoutes.FEED;

    React.useMemo(() => registerStackScreens(getTabFromPathname()), []);

    const stack = {
        config: {
            initialRouteName,
            screens: {
                [AppRoutes.FEED]: "",
                [AppRoutes.USER]: AppRoutes.USER,
                [AppRoutes.ARTICLE]: AppRoutes.ARTICLE,
                // [AppRoutes.NOT_FOUND]: '*'
            }
        }
    }
    // const routeNames = [
    //     ...Object
    //         .keys(stack.config.screens)
    //         .map((screen, index) => screen)
    // ]
    // const initialState = React.useMemo(() => ({
    //     stale: false,
    //     type: "stack",
    //     // key: `${mapPathnameToTab(tab)}-tab-stack`,
    //     index: 0,
    //     routeNames,
    //     routes: [
    //         {
    //             name: initialRouteName,
    //             path: stack.config.screens[initialRouteName]
    //         }
    //     ]
    // }), [])

    // React.useEffect(() => {
    //     defineCustomElements(window).then().catch();
    // }, []);

    // TODO: idk why but this initially returns undefined for a brief moment
    const tabScreens = screenToComponentMap.get(AppRoutes.HOME);

    return (
        <NavigationContainer
            theme={{
                colors: {
                    background: 'transparent'
                }
            }}
            onStateChange={(state) => {
                console.log(JSON.stringify(state), 'NAV_STATE')
            }}
            navigationInChildEnabled={false}
            linking={stack}
            // initialState={initialState}
            fallback={<PreloaderOverlay/>}
        >
            <React.Suspense fallback={<PreloaderOverlay/>}>
                <Stack.Navigator
                    id={`__tab_${currentTab}`}
                    initialRouteName={initialRouteName}
                    screenOptions={{
                        // Use framer-motion for more control & performant animations
                        animationEnabled: false,
                        // RNN's gestures aren't enabled on web, but we explicitly
                        // disable them here for posterity + to avoid possibility
                        // of confusing error messages from displaying in the console.
                        gestureEnabled: false,
                        headerShown: false,
                        // TODO: experiment with the best way to mimc "swipe back"
                        // gestures where the previous screen is visible via peeking.
                        // detachPreviousScreen: false,
                        headerBackImage: () => null
                    }}
                >
                    {tabScreens?.map(({name, component, initialParams}, index) => (
                        <Stack.Screen
                            key={`${name}-${index}`}
                            options={{
                                title: capitalize(name)

                            }}
                            name={name}
                            component={component}
                            initialParams={initialParams}
                        />
                    ))}
                </Stack.Navigator>
            </React.Suspense>
        </NavigationContainer>
    )
}
