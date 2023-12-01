/**
 * Activates core functionality required by Castro's router for serialisation, memoisation, etc.
 * Options are configurable - but don't mess with this unless it's for debugging purposes, or you
 * know what you're doing.
 *
 * */
import {enableMapSet} from "immer";
import {enableFreeze} from "react-native-screens";

type EnableRuntimeDepsOptions = {
    _enableFreeze?: boolean;
    _enableMapSet?: boolean;
}

export const enableRuntimeDeps = ({
                                      _enableFreeze = true,
                                      _enableMapSet = true,
                                  }: EnableRuntimeDepsOptions = {}) => {
    if (!_enableMapSet) {
        console.warn("[WARNING]: You've selectively disabled critical dependencies" +
            " required by the router. I hope you know what you're doing.")
    }
    _enableFreeze && enableFreeze(true);
    _enableMapSet && enableMapSet();
}
