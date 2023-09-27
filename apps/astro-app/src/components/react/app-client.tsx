import * as React from "react";
import {DarkTheme, NavigationContainer} from "@react-navigation/native";
import {App, Preloader} from "konsta/react";
import {createStackNavigator} from "@react-navigation/stack";
import {AppRoutes} from "../../utils/enums";
import {defineCustomElements} from "@ionic/pwa-elements/loader";
import {ArticleScreenAsync, FeedScreenAsync, HomeScreen, UserScreenAsync} from "components/react/home-stack/index.mjs";

const Stack = createStackNavigator();

const linking = {
    config: {
        // initialRouteName: AppRoutes.HOME,
        screens: {
            // initialRouteName: AppRoutes.HOME,
            [AppRoutes.HOME]: '/',
            [AppRoutes.USER]: AppRoutes.USER,
            [AppRoutes.ARTICLE]: AppRoutes.ARTICLE,
            [AppRoutes.FEED]: AppRoutes.FEED
        }
    }
}

const state = {
    routes: [
        {
            name: AppRoutes.HOME
        }
    ]
}

export const AppClient = ({...appProps}) => {

    function resetReactNavigationContexts() {
        // https://github.com/expo/router/discussions/588
        // https://github.com/react-navigation/react-navigation/blob/9fe34b445fcb86e5666f61e144007d7540f014fa/packages/elements/src/getNamedContext.tsx#LL3C1-L4C1

        // React Navigation is storing providers in a global, this is fine for the first static render
        // but subsequent static renders of Stack or Tabs will cause React to throw a warning. To prevent this warning, we'll reset the globals before rendering.
        const contexts = "__react_navigation__elements_contexts";
        // @ts-expect-error: global
        global[contexts] = new Map<string, React.Context<any>>();
    }

    resetReactNavigationContexts();

    React.useEffect(() => {
        defineCustomElements(window).then().catch();
    }, []);

    // const [navState, setNavState] = useSessionStorageState('CASTRO_NAV_STATE', {
    //     defaultValue: null
    // })

    return (
        <App {...appProps}>
            <React.Suspense fallback={
                <div
                    className={'bg-transparent flex flex-col flex-1 justify-center items-center'}
                >
                    <Preloader/>
                </div>
            }
            >
                <NavigationContainer
                    theme={{
                        ...DarkTheme,
                        colors: {
                            ...DarkTheme.colors,
                            background: 'transparent'
                        }
                    }}
                    // initialState={navState}
                    // onStateChange={(state) => {
                    //     console.log(state, 'NAV_STATE');
                    //
                    //     setNavState(state);
                    // }}
                    linking={linking}
                >
                    <Stack.Navigator
                        // initialRouteName={AppRoutes.HOME}
                        screenOptions={{
                            headerShown: false,
                            headerBackImage: () => null
                        }}
                    >
                        <Stack.Screen
                            options={{
                                title: AppRoutes.HOME
                            }}
                            name={AppRoutes.HOME}
                            component={HomeScreen}
                        />
                        <Stack.Screen
                            options={{
                                title: AppRoutes.ARTICLE
                            }}
                            name={AppRoutes.ARTICLE}
                            component={ArticleScreenAsync}
                        />
                        <Stack.Screen
                            options={{
                                title: AppRoutes.USER
                            }}
                            name={AppRoutes.USER}
                            component={UserScreenAsync}
                        />
                        <Stack.Screen
                            options={{
                                title: AppRoutes.FEED
                            }}
                            name={AppRoutes.FEED}
                            component={FeedScreenAsync}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </React.Suspense>
        </App>
    )
}
