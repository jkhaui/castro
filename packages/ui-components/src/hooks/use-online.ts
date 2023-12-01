import * as React from 'react';

function getSnapshot() {
    return navigator.onLine;
}

function getServerSnapshot() {
    return true;
}

function subscribe(callback: () => void) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
    };
}

export function useOnline() {
    return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
