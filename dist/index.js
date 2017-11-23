"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const jsonStringify = require('json-pretty');
const _Fn = require("./types/functions");
exports.Fn = _Fn;
const _Refs = require("./types/refs");
exports.Refs = _Refs;
__export(require("./types"));
function cloudform(template) {
    return jsonStringify(template);
}
exports.default = cloudform;
