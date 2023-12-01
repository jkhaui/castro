import {proxy} from "valtio";
import {proxyMap, proxySet} from "valtio/utils";

export const RouterStore = proxy({
    navigationRef: null,
    // https://github.com/pmndrs/valtio/discussions/161
    getIsNavigationReady() {
        return this.RouterStore?.navigationRef
    },
    getState() {
        return this.RouterStore?.navigationRef?.getState() ?? null
    },
    initialRouteName: null,
    activeSegment: "",
    tabBasePathSegments: [],
    // Allows concurrent React (i.e. `useTransition`, `startTransition`), to work with `react-freeze`
    isTransitioning: false,
    scrollableElementRefs: proxySet([]),
    tabHistory: proxyMap([])
});
