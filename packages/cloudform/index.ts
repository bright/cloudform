import Template from "cloudform-types/types/template"
export type Template = Template

import * as _Fn from 'cloudform-types/types/functions'
export const Fn = _Fn

import * as _Refs from 'cloudform-types/types/refs'
export const Refs = _Refs

export * from 'cloudform-types/types/index'
export * from 'cloudform-types/types/dataTypes'
export * from 'cloudform-types/types/resource'
export * from 'cloudform-types/types/parameter'

export default function cloudform(template: Template) {
    return JSON.stringify(template, undefined, 2)
}