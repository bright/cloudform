#!/usr/bin/env node

import * as path from 'path'
import {exec} from 'child_process'

const templatePath = process.argv[2]

if (!templatePath || templatePath.startsWith('-')) {
    console.warn(`cloudform - TypeScript-based imperative way to define AWS CloudFormation templates

usage: cloudform <path>
    <path> should point to the TypeScript file containing entrypoint of the CloudFormation definition, including ".ts" suffix.

example: cloudform aws/template.ts > generated.template`)
    process.exit(1)
}

// console.info(`Compiling AWS CloudForm template from ${process.argv[2]}...`)

const resolvedTemplatePath = path.resolve(templatePath).replace(/\\/g, "\\\\");

exec('npm bin', (err, npmBin) => {
    if (err) {
        console.error(err)
        return
    }

    const tsNodePath = path.join(npmBin.trim(), 'ts-node')
    exec(`${tsNodePath} -e "import t from '${path.resolve(resolvedTemplatePath)}'; console.log(t)"`, (err, stdout, stderr) => {
        if (err) {
            console.error(err)
            return
        }
        if (stderr) {
            console.error(stderr)
            return
        }
        console.log(stdout)
    })

})

