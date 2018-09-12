import { Template } from 'cloudform-types'
export * from 'cloudform-types'

export default function cloudform(template: Template) {
    return JSON.stringify(template, undefined, 2)
}
