import {proxy} from "valtio";

export const screenOptionsStore = proxy({
    animationEnabled: false,
    gestureEnabled: false,
    header: null
})

export const actions = {
    setActiveTabPath: (initialRouteName) => routerStore.initialRouteName = initialRouteName,
    setActiveSegment: (activeSegment) => routerStore.activeSegment = activeSegment,
    setTabBasePathSegments: () => {/* TODO */
    },
    setIsTransitioning: (isTransitioning) => routerStore.isTransitioning = isTransitioning
}
