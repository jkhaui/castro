import {existsSync} from 'node:fs'
import path from 'node:path';
import {mkdir, readdir, readFile, writeFile} from "fs/promises";
import {createServer} from "vite";
import {pathToFileURL} from "url";

const JSX_OR_TSX_EXTENSION = /\.(jsx|tsx)$/;
const JS_FILE_REGEX = /\.js$/;

const TARGET_DIR_PATH_PARTS = ["src", "components", "react"]
const ASTRO_CONFIG_FILENAME = "astro.config.mjs";
const CASTRO_CACHE_DIR_NAME = '.castro';
const STACK_DIR_REGEX = /-\bstack\b$/g;

const ctx = {}

const searchForProjectRoot = () => {
    const recurseUpToProjectRoot = (dir) => {
        const maybeAstroConfigPath = path.join(dir, ASTRO_CONFIG_FILENAME);

        if (existsSync(maybeAstroConfigPath)) {
            return maybeAstroConfigPath;
        }

        const parentDir = path.dirname(dir);

        if (dir === parentDir) {
            return null;
        }

        return recurseUpToProjectRoot(parentDir);
    }

    const maybeTargetPath = recurseUpToProjectRoot(process.cwd());

    if (maybeTargetPath) {
        let targetPathParts = maybeTargetPath.split(path.sep);
        targetPathParts.pop();
        targetPathParts = [...targetPathParts, ...TARGET_DIR_PATH_PARTS]
        targetPathParts = targetPathParts.join(path.sep);

        return targetPathParts;
    } else {
        console.warn("Couldn't find your project root! Are you sure you have a valid" +
            "`astro.config.mjs` file?")
        // Temporarily disable error handling for dev
        // throw new Error('')

        // This is probably unsafe/it may be better to throw early, but for now we fall back to
        // the current working directory as the base path if `astro.config.mjs` can't be found.
        return path.join(process.cwd(), ...TARGET_DIR_PATH_PARTS);
    }
}

async function createCastroCacheDir() {
    try {
        const targetOutputDirPath = path.join(process.cwd(), CASTRO_CACHE_DIR_NAME);

        if (!targetOutputDirPath) {
            await mkdir(targetOutputDirPath)
        }
    } catch (err) {
        console.log(err);
    }
}

async function createStackNavigatorFile(_, fileNames, tabName) {
    try {
        const cleanedRouteNames = fileNames.forEach((fileName) => fileName.replace(JSX_OR_TSX_EXTENSION, ''));
        console.log(cleanedRouteNames);
        const targetOutputDirPath = path.join(process.cwd(), CASTRO_CACHE_DIR_NAME, 'stack-routes.mjs');
        console.log(`targetOutputDirPath: ${targetOutputDirPath}`)

        await writeFile(targetOutputDirPath, `export const ${tabName}TabScreens = {};\n`)
    } catch (err) {
        console.log(err);
    }
}

async function getComponentFromFile(filename) {
    // Read the file
    const code = await readFile(filename, 'utf-8');
    console.log(code, '!code')

}


async function getReactComponentFiles(viteCtx, directory) {
    try {
        const files = await readdir(directory);
        const reactComponentFiles = files.filter(file => JSX_OR_TSX_EXTENSION.test(file));
        const reactComponentFilePaths = files
            .filter(file => JSX_OR_TSX_EXTENSION.test(file))
            .map(validFile => path.join(directory, validFile));


        console.log(reactComponentFilePaths[0])

        viteCtx.ssrLoadModule(await import(pathToFileURL(path.resolve(reactComponentFilePaths[0])))).then(mod => {
    console.log(`mod ${mod}`)
})
        // await import(reactComponentFilePaths[1]).then((_m) => console.log(_m))

        // await getComponentFromFile(reactComponentFilePaths[1]).then(x => console.log(`!!x ${JSON.stringify(x)}`))
        // convert array to ES Set to ensure no duplicates
        return new Set(reactComponentFiles);
    } catch (error) {
        console.error(`Error reading directory: ${error}`);
    }
}

async function mapFilesToComponents(viteCtx, rootPath) {
    const entries = await readdir(rootPath, {withFileTypes: true});

    await createCastroCacheDir().then(() => {
        for (const entry of entries) {
            const direntName = entry.name;

            if (
                entry.isDirectory() &&
                STACK_DIR_REGEX.test(direntName)
            ) {
                const fullPath = path.join(rootPath, direntName);

                getReactComponentFiles(viteCtx, fullPath).then((res) => {
                    createStackNavigatorFile(
                        fullPath,
                        // convert ES Set back to array
                        [...res],
                        direntName.replace(STACK_DIR_REGEX, '').toLowerCase()
                    )
                })
            }
        }
    })

    return
}

// async function createViteServer () {
//
// }


function buildStackNavigators(viteCtx) {
    const rootPath = searchForProjectRoot()
// const worker = fork(new URL("./worker.mjs", import.meta.url));
    const validStackDirectories = mapFilesToComponents(viteCtx, rootPath)

    console.log('Valid: ', validStackDirectories)
    return validStackDirectories
    //     const maybeStackDirectory = getStackDirs(rootDir, 'stack');
    //
    //     if (maybeStackDirectory) {
    //         const stackComponents = [];
    //
    //         readdirSync(maybeStackDirectory, { withFileTypes: true }).forEach((file) => {
    //             console.log(file.name);
    //
    //         if (IS_REACT_COMPONENT_REGEX.test(file.name)) {
    //             stackComponents.push(file);
    //         }
    //         })
    //
    //         console.log(`Stack Components: ${stackComponents}`)
    //     }
    //
    //     readdir(pagesDir, {withFileTypes: true}, (err, files) => {
    //         const directories = [];
    //
    //         if (files) {
    //
    //
    //             files.forEach((file) => {
    //                 console.log(`File: ${file}`)
    //                 if (file.isDirectory()) {
    //                     directories.push(file);
    //                 }
    //             })
    //         }
    //     });
    //
    //     return pagesDir;
    // } else {
    //     console.log(`"src" directory not found in ${rootDir}`);
    //     return null;
    // }

}


await createServer({
    server: {
        middlewareMode: true,
        appType: "custom"
    }
}).then((vite) => {
    buildStackNavigators(vite)
    // vite.listen(5173).then(() => {
    //     console.log(vite);
    //     buildStackNavigators(vite)
    // })
});
