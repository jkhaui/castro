import {ref} from "valtio";
import {RouterStore} from "./router-store.mjs";

export const RouterActions = {
    setNavigationRef: (_ref) => RouterStore.navigationRef = ref(_ref),
    setInitialRouteName: (initialRouteName) => RouterStore.initialRouteName = initialRouteName,
    setActiveSegment: (activeSegment) => RouterStore.activeSegment = activeSegment,
    setTabBasePathSegments: () => {/* TODO */
    },
    setIsTransitioning: (isTransitioning) => RouterStore.isTransitioning = isTransitioning,
    setScrollableElementRefs: (_ref) => RouterStore.scrollableElementRefs.add(_ref),
    setTabHistory: (tab, history) => RouterStore.tabHistory.set(tab, history)
}
