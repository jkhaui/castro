import {DOCUMENT_TITLE_DELIMITER, DOCUMENT_TITLE_TEMPLATE_BASE} from "./constants.mjs";
import {produce} from "immer";
// import fs from "node:fs";
// import path from "node:path";

// import {fileURLToPath} from 'node:url';
//
// const {dirname} = path;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// import TitleCaser from "@danielhaim/titlecaser"
export const ROOT_SCREEN_NAME = "home"
export const APP_ROOT_PATH = "/";

const buildPathWithoutRootAlias = (currentPath, key): string => {
    let newPath = "";

    if (currentPath === ROOT_SCREEN_NAME) {
        return key
    }

    newPath = `${currentPath}${currentPath !== '' ? '/' : ''}${key}`

    return newPath
}

export function buildQualifiedStaticPaths(obj, paths, currentPath = '') {
    let qualifiedPaths = paths;

    const addQualifiedPath = produce((draft, path) => {
        draft.push(path)
    })

    for (const key in obj) {
        const value = obj[key]
        const maybeQualifiedPath = buildPathWithoutRootAlias(currentPath, key)

        qualifiedPaths = typeof value === 'object'
            ? buildQualifiedStaticPaths(value, qualifiedPaths, maybeQualifiedPath)
            : addQualifiedPath(qualifiedPaths, maybeQualifiedPath)
    }

    return qualifiedPaths
}

type FormatDocumentTitleOptions = {
    capitalizeFirstWordOnly: boolean;
    replaceHyphensWithWhitespace: boolean;
}

export const formatDocumentTitle = (
    title: string,
    fallback: string,
    options: FormatDocumentTitleOptions = {
        capitalizeFirstWordOnly: true,
        replaceHyphensWithWhitespace: true
    }
) => {
    // const titleCaser = new TitleCaser({})
    const titleOrFallback = title || fallback

    let formattedTitle = titleOrFallback
        // We need to ensure any updates here are immutable, because the title string may
        // be passed directly from the array holding the list of valid paths.
        ? produce(titleOrFallback, draft => {
            return draft = `${draft} ${DOCUMENT_TITLE_DELIMITER} ${DOCUMENT_TITLE_TEMPLATE_BASE}`
        })
        : DOCUMENT_TITLE_TEMPLATE_BASE;
    formattedTitle = capitalize(formattedTitle);

    return formattedTitle;
}

export const capitalize = str => {
    if (!str) {
        return "";
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
}

// https://github.com/expo/router/blob/abb3681a52c789c22c3a604f92ef792ca8f1258f/packages/expo-router/src/global-state/routing.ts#L13
export function assertIsReady(store) {
    if (!store.navigationRef.isNavigationReady()) {
        throw new Error(
            "Attempted to navigate before mounting the Root Layout component. Ensure the Root Layout component is rendering a Slot, or other navigator on the first render."
        );
    }
}

export const buildStaticHref = ({
                                    tabBasePathSegment,
                                    appRootPath,
                                    initialActiveSegment,
                                    initialTabPath,
                                    anchorElId = "#anchor-top"
                                }) => {
    if (tabBasePathSegment === appRootPath) {
        return appRootPath
    }

    return appRootPath + (initialActiveSegment !== initialTabPath
        ? tabBasePathSegment : tabBasePathSegment
    )
        // : `${tabBasePathSegment}${anchorElId}`);
}

export const getActiveSegment = (path: string) => {
    const segments = path.split("/")

    return segments[segments.length - 1]
}
