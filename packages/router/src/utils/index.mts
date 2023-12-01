export function buildScreenPaths(screens) {
    return screens.reduce((prev, {name, path}) => ({
        ...prev,
        [name]: {
            path: path ?? name
        }
    }), {})
}