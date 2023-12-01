import {proxyMap} from "valtio/vanilla/utils/proxyMap";
import {QualifiedScreenNames} from "@/utils/index.mjs";

export const globalRouteCache = proxyMap([
    [QualifiedScreenNames.HOME, JSON.stringify([])],
    [QualifiedScreenNames.DISCOVER, JSON.stringify([])],
    [QualifiedScreenNames.NOTIFICATIONS, JSON.stringify([])],
    [QualifiedScreenNames.SETTINGS, JSON.stringify([])]
])
