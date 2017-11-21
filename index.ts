const jsonStringify = require('json-pretty')

import {CloudformTemplate} from "./types/internal"

import * as _Fn from './types/functions'
export const Fn = _Fn

import * as _Refs from './types/refs'
export const Refs = _Refs

export default function cloudform(template: CloudformTemplate) {
    return jsonStringify(template)
}