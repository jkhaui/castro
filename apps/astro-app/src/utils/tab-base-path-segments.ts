import {APP_ROOT_PATH, capitalize, QualifiedScreenNames} from "./index.mjs";

export const TAB_LABELS = [
    QualifiedScreenNames.HOME,
    QualifiedScreenNames.DISCOVER,
    QualifiedScreenNames.NOTIFICATIONS,
    QualifiedScreenNames.SETTINGS
]

export const tabLabels = TAB_LABELS.map((label: string) => capitalize(label.toLowerCase()))
export const tabBasePathSegments = [
    APP_ROOT_PATH,
    ...tabLabels
        .slice(1)
        .map(
            (route: string) => route.toLowerCase(),
        ),
]
