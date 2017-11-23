const jsonStringify = require('json-pretty')

import Template from "./types/template"

import * as _Fn from './types/functions'
export const Fn = _Fn

import * as _Refs from './types/refs'
export const Refs = _Refs

export * from './types'

export default function cloudform(template: Template) {
    return jsonStringify(template)
}