import {AppRoutes} from "@/utils/enums";

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const getStackConfig = (tab) => {
    switch (tab) {
        case AppRoutes.HOME:
            return {
                config: {
                    path: '',
                    initialRouteName: AppRoutes.HOME,
                    screens: {
                        [AppRoutes.USER]: AppRoutes.USER,
                        [AppRoutes.ARTICLE]: AppRoutes.ARTICLE,
                        [AppRoutes.NOT_FOUND]: '*'
                    }
                }
            }
        case AppRoutes.DISCOVER:
            return {
                config: {
                    // path: '',
                    path: AppRoutes.DISCOVER,
                    initialRouteName: AppRoutes.TRENDING,
                    screens: {
                        [AppRoutes.CATEGORIES]: AppRoutes.CATEGORIES,
                        // [AppRoutes.NOT_FOUND]: '*'
                    }
                }
            }
        case AppRoutes.PROFILE:
            return {
                config: {
                    // path: '',
                    path: AppRoutes.PROFILE,
                    initialRouteName: AppRoutes.TIMELINE,
                    screens: {
                        [AppRoutes.EDIT]: AppRoutes.EDIT,
                        // [AppRoutes.NOT_FOUND]: '*'
                    }
                }
            }
        case AppRoutes.SETTINGS:
            default:
                return {
                    config: {

                    }
                };
    }
}
