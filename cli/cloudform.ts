#!/usr/bin/env node

import * as fs from 'fs'
import * as ts from 'typescript'

function compile(fileName: string, compilerOptions: ts.CompilerOptions) {
    const servicesHost: ts.LanguageServiceHost = {
        getScriptFileNames: () => [fileName],
        getScriptVersion: fileName => "0",
        getScriptSnapshot: fileName => {
            if (!fs.existsSync(fileName)) {
                return undefined;
            }

            return ts.ScriptSnapshot.fromString(fs.readFileSync(fileName).toString());
        },
        getCurrentDirectory: () => process.cwd(),
        getCompilationSettings: () => compilerOptions,
        getDefaultLibFileName: (options) => ts.getDefaultLibFilePath(options),
        fileExists: ts.sys.fileExists,
        readFile: ts.sys.readFile,
        readDirectory: ts.sys.readDirectory,
    };

    const services = ts.createLanguageService(servicesHost, ts.createDocumentRegistry())
    const output = services.getEmitOutput(fileName)

    if (output.emitSkipped) {
        let allDiagnostics = services.getCompilerOptionsDiagnostics()
            .concat(services.getSyntacticDiagnostics(fileName))
            .concat(services.getSemanticDiagnostics(fileName))

        allDiagnostics.forEach(diagnostic => {
            let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')
            if (diagnostic.file) {
                let {line, character} = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start!)
                console.warn(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`)
            } else {
                console.warn(`${message}`)
            }
        })

        process.exit(1)
    } else {
        console.log(eval(output.outputFiles[0].text))
    }
}

const path = process.argv[2]

if (!path || path.startsWith('-')) {
    console.warn(`cloudform - TypeScript-based imperative way to define AWS CloudFormation templates

usage: cloudform <path>
    <path> should point to the TypeScript file containing entrypoint of the CloudFormation definition, including ".ts" suffix.

example: cloudform aws/template.ts > generated.template`)
    process.exit(1)
}

// console.info(`Compiling AWS CloudForm template from ${process.argv[2]}...`)

compile(path, {
    noEmitOnError: true,
    noImplicitAny: true,
    lib: [
        "lib.es2015.d.ts",
        "lib.es2016.array.include.d.ts"
    ],
    target: ts.ScriptTarget.ES2015,
    module: ts.ModuleKind.CommonJS
})