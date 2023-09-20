const isDev = import.meta.env.DEV;

if (isDev) {
    globalThis.REACT_NAVIGATION_DEVTOOLS = new WeakMap();
}
