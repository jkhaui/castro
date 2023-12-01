import {StackRouter} from '@react-navigation/native';
import {nanoid} from "nanoid/non-secure";

export const WebStackRouter = (options: any) => {
    const router = StackRouter(options);

    const {initialRouteName: initialRoute, initialFocusedRoute, nanoidLength = 3} = options;

    return {
        ...router,
        getInitialState({routeNames, routeParamList}) {
            const initialRouteName =
                initialRoute !== undefined &&
                routeNames.includes(initialRoute)
                    ? initialRoute
                    : routeNames[0];

            const isInitialRouteFocused = initialRouteName === initialFocusedRoute;

            const routes = [{
                key: `${initialRouteName}-${nanoid(nanoidLength)}`,
                name: initialRouteName,
                params: routeParamList[initialRouteName],
                scrollY: 0
            }]

            if (!isInitialRouteFocused) {
                routes.push({
                    key: `${initialFocusedRoute}-${nanoid(nanoidLength)}`,
                    name: initialFocusedRoute,
                    params: routeParamList[initialFocusedRoute],
                    scrollY: 0
                })
            }

            return {
                stale: false,
                type: 'stack',
                key: `stack-${nanoid(nanoidLength)}`,
                index: isInitialRouteFocused ? 0 : 1,
                routeNames,
                routes
            };
        },
        getRehydratedState(partialState, {routeNames, routeParamList}) {
            let state = partialState;

            if (state.stale === false) {
                return state;
            }

            const routes = state.routes
                .filter((route) => routeNames.includes(route.name))
                .map(
                    (route) =>
                        ({
                            ...route,
                            key: route.key || `${route.name}-${nanoid(nanoidLength)}`,
                            params:
                                routeParamList[route.name] !== undefined
                                    ? {
                                        ...routeParamList[route.name],
                                        ...route.params,
                                    }
                                    : route.params,
                            scrollY: 0
                        })
                );

            if (routes.length === 0) {
                const initialRouteName =
                    initialRoute !== undefined
                        ? initialRoute
                        : routeNames[0];

                routes.push({
                    key: `${initialRouteName}-${nanoid(nanoidLength)}`,
                    name: initialRouteName,
                    params: routeParamList[initialRouteName],
                    scrollY: 0
                });
            }

            return {
                stale: false,
                type: 'stack',
                key: `stack-${nanoid(nanoidLength)}`,
                index: routes.length - 1,
                routeNames,
                routes,
            };
        },
        getStateForAction(state, action, options) {
            const {routeParamList} = options;

            const result = router.getStateForAction(state, action, options);

            if (
                result !== null &&
                result.index > state.index &&
                state.routes[state.index].params?.isEditing
            ) {
                // Returning the current state means that the action has been handled, but we don't have a new state
                return state;
            }

            switch (action.type) {
                case 'PUSH':
                case 'NAVIGATE': {
                    if (!state.routeNames.includes(action.payload.name)) {
                        return null;
                    }

                    const getId = options.routeGetIdList[action.payload.name];
                    const id = getId?.({params: action.payload.params});

                    let route;

                    if (id !== undefined) {
                        route = state.routes.find(
                            (route) =>
                                route.name === action.payload.name &&
                                id === getId?.({params: route.params})
                        );
                    } else {
                        const currentRoute = state.routes[state.index];

                        // If the route matches the current one, then navigate to it
                        if (
                            action.type === 'NAVIGATE' &&
                            action.payload.name === currentRoute.name
                        ) {
                            route = currentRoute;
                        }
                    }

                    let params;

                    if (action.type === 'NAVIGATE' && action.payload.merge && route) {
                        params =
                            action.payload.params !== undefined ||
                            routeParamList[action.payload.name] !== undefined
                                ? {
                                    ...routeParamList[action.payload.name],
                                    ...route.params,
                                    ...action.payload.params,
                                }
                                : route.params;
                    } else {
                        params =
                            routeParamList[action.payload.name] !== undefined
                                ? {
                                    ...routeParamList[action.payload.name],
                                    ...action.payload.params,
                                }
                                : action.payload.params;
                    }

                    let routes;

                    if (route) {
                        const routeKey = route.key;

                        routes = state.routes.filter((r) => r.key !== routeKey);
                        routes.push({
                            ...route,
                            path:
                                action.type === 'NAVIGATE' && action.payload.path !== undefined
                                    ? action.payload.path
                                    : route.path,
                            params,
                            scrollY: action?.payload?.scrollY || 0
                        });
                    } else {
                        routes = [
                            ...state.routes,
                            {
                                key: `${action.payload.name}-${nanoid(nanoidLength)}`,
                                name: action.payload.name,
                                path:
                                    action.type === 'NAVIGATE' ? action.payload.path : undefined,
                                params,
                                scrollY: action?.payload?.scrollY || 0
                            },
                        ];
                    }

                    return {
                        ...state,
                        index: routes.length - 1,
                        routes,
                    };
                }
                // https://redux.js.org/style-guide/#write-action-types-as-domaineventname
                case 'history/clearAll':
                    return {
                        ...state,
                        routeKeyHistory: [],
                    };
                case 'interactions/isEditing':
                // TODO: add state to show blocking dialog and/or persist text input
                case 'interactions/scroll':
                case 'navigation/block':
                    return state;
                case 'network/isDegraded':
                case 'network/isOffline':
                case 'network/isOnline':
                default:
                    return result;
            }
        },
        actionCreators: {
            ...router.actionCreators,
            clearHistory() {
                return {type: 'history/clearAll'};
            },
            blockNavigation() {
                return {type: 'navigation/block'}
            },
            setScrollDepth() {
                return {type: 'interactions/scroll'}
            }
        },
    };
};
