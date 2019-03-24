#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const child_process_1 = require("child_process");
const jsonminify = require('jsonminify');
const options = {
    shouldMinify: false,
    templatePath: undefined
};
let shouldShowUsageInfo = true;
function parseParam(idx) {
    const param = process.argv[idx];
    if (param && param.startsWith('-')) {
        if (param === '-m' || param === '--minify') {
            options.shouldMinify = true;
        }
        else {
            console.warn(`Invalid option ${param}`);
        }
    }
    else {
        shouldShowUsageInfo = !param;
        options.templatePath = param;
    }
}
// poor man's CLI arguments reader
parseParam(2);
if (!options.templatePath) {
    parseParam(3);
}
if (shouldShowUsageInfo) {
    console.warn(`cloudform - TypeScript-based imperative way to define AWS CloudFormation templates

usage: cloudform [-m|--minify] <path>
    <path> should point to the TypeScript file containing entrypoint of the CloudFormation definition, including ".ts" suffix.

options:
    -m, --minify    Minify JSON output, default: false

example: cloudform aws/template.ts > generated.template`);
    process.exit(1);
}
// console.info(`Compiling AWS CloudForm template from ${process.argv[2]}...`)
const resolvedTemplatePath = path.resolve(options.templatePath)
    .replace(/\\/g, "\\\\")
    .replace(/\.ts$/, '');
child_process_1.exec('npm bin', (err, npmBin) => {
    if (err) {
        console.error(err);
        return;
    }
    const tsNodePath = path.join(npmBin.trim(), 'ts-node');
    child_process_1.exec(`${tsNodePath} -e "import t from '${resolvedTemplatePath}'; console.log(t)"`, { maxBuffer: 1024 * 1024 * 5 }, (err, template, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        if (stderr) {
            console.error(stderr);
            return;
        }
        if (options.shouldMinify) {
            console.log(jsonminify(template));
        }
        else {
            console.log(template);
        }
    });
});
