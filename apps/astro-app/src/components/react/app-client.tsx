import * as React from "react";
import {DarkTheme, NavigationContainer, useLinkProps, useNavigation} from "@react-navigation/native";
import {App, Block, BlockTitle, Button, Navbar, Preloader} from "konsta/react";
import {createStackNavigator} from "@react-navigation/stack";
import {View} from "@/components/react/base";

export enum AppRoutes {
    HOME = 'Home',
    ARTICLE = 'Article',
    USER = 'User',
    FEED = 'Feed',
}

const Stack = createStackNavigator()

const linking = {
    config: {
        initialRouteName: AppRoutes.HOME,
        screens: {
            initialRouteName: AppRoutes.HOME,
            [AppRoutes.HOME]: '/',
            [AppRoutes.USER]: AppRoutes.USER,
            [AppRoutes.ARTICLE]: AppRoutes.ARTICLE,
            [AppRoutes.FEED]: AppRoutes.FEED
        }
        // screens: {
        //     initialRouteName: AppRoutes.HOME,
        //     [AppRoutes.HOME]: {
        //         path: '',
        //         initialRouteName: AppRoutes.FEED,
        //         screens: {
        //             [AppRoutes.USER]: AppRoutes.USER,
        //             [AppRoutes.ARTICLE]: AppRoutes.ARTICLE,
        //             [AppRoutes.FEED]: AppRoutes.FEED
        //         }
        //     }
        // }
    }
}


const state = {
    routes: [
        {
            name: AppRoutes.HOME
        }
    ]
}

const LinkButton = ({to, action, children, ...restButtonProps}) => {
    const {onPress, ...props} = useLinkProps({to, action})

    const navigation = useNavigation();

    return (
        <Button
            {...props}
            {...restButtonProps}
            onClick={() => navigation.push(to.screen)}
            clear
            colors={{
                activeBgIos: '',
                activeBgMaterial: ''
            }}
            touchRipple={false}
            rounded
        >
            {children}
        </Button>
    )
}


function FeedScreen({navigation}) {
    return (
        <View>
            <Navbar className={'absolute top-0'} title={document?.title} />
            <BlockTitle>Settings</BlockTitle>
            <Block>
                <LinkButton to={{screen: AppRoutes.HOME}}>Go to Home</LinkButton>
            </Block>
        </View>
    )
}

function ArticleScreen({navigation}) {
    return (
        <View>
            <Navbar className={'absolute top-0'} title={document?.title} />
            <BlockTitle>Article</BlockTitle>
            <Block>
                <LinkButton to={{screen: AppRoutes.USER}}>Go to User</LinkButton>
            </Block>
        </View>
    )
}

function UserScreen({navigation}) {
    return (
        <View>
            <Navbar className={'absolute top-0'} title={document?.title} />
            <BlockTitle>User</BlockTitle>
            <Block>
                <LinkButton to={{screen: AppRoutes.FEED}}>Go to Feed</LinkButton>
            </Block>
        </View>
    )
}

function HomeScreen({navigation}) {
    return (
        <View>
            <BlockTitle>Home</BlockTitle>
            <Block>
                <LinkButton to={{screen: AppRoutes.ARTICLE}}>Go to Article</LinkButton>
            </Block>
        </View>
    )
}

export const AppClient = ({...appProps}) => {
    return (
        <App {...appProps}>
            <React.Suspense fallback={<Preloader/>}>
                <NavigationContainer
                    theme={{
                        ...DarkTheme,
                        colors: {
                            ...DarkTheme.colors,
                            background: 'transparent'
                        }
                    }}
                    linking={linking}
                >
                    <Stack.Navigator
                        initialRouteName={AppRoutes.HOME}
                        screenOptions={{
                            headerShown: false,
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
                            component={ArticleScreen}
                        />
                        <Stack.Screen
                            options={{
                                title: AppRoutes.USER
                            }}
                            name={AppRoutes.USER}
                            component={UserScreen}
                        />
                        <Stack.Screen
                            options={{
                                title: AppRoutes.FEED
                            }}
                            name={AppRoutes.FEED}
                            component={FeedScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </React.Suspense>
        </App>
    )
}
