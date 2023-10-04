import fs from 'fs';
import { transformSync } from '@babel/core';
import presetTypeScript from '@babel/preset-typescript';

function parseConfig(filePath: string) {
    // Step 1: Read the file from the filesystem
    const rawFileContent = fs.readFileSync(filePath, 'utf8');

    // Step 2: Compile the TypeScript file to JavaScript
    const { code } = transformSync(rawFileContent, {
        presets: [presetTypeScript],
    });

    // Step 3: Evaluate the JavaScript code and return the config object
    // We're using a Function constructor here to avoid the use of eval for security reasons
    const evaluatedCode = new Function('exports', 'require', 'module', '__filename', '__dirname', `${code}; return exports.default;`);

    return evaluatedCode({}, require, {exports: {}}, __filename, __dirname);
}

// Usage
const config = parseConfig('./config.json');
console.log(config);

// import fs from "node:fs";
// import { readFile } from "fs/promises";
// const filename = "config.json";
//
// export async function configParser(env) {
//     let config;
//     const content = await readFile(filename, 'utf-8');
//
//     try {
//         config = JSON.parse(content);
//     } catch (err) {
//         throw new Error("Please check that your config file is properly formatted.");
//     }
//
//     if (config?.hasOwnProperty(env)) {
//         return config[env];
//     } else {
//         throw new Error("Something went wrong.");
//     }
//
// }
// //
// // export function configParser(env) {
// //     return new Promise((resolve, reject) => {
// //         fs.open(filename, 'r', (err, handle) => {
// //             fs.stat(filename, (err, stats) => {
// //                 const size = stats.size;
// //                 const buffer = new Buffer.alloc(size);
// //
// //                 fs.read(handle, buffer, 0, size, 0, (err, bytes, content) => {
// //                     fs.close(handle, (err) => {
// //                         const config = JSON.parse(content);
// //
// //                         if (config.hasOwnProperty(env)) {
// //                             resolve(config[env]);
// //                         } else {
// //                             reject(`${env} does not exist in the config file`)
// //                         }
// //                     })
// //                 })
// //             })
// //         })
// //     })
// // }
