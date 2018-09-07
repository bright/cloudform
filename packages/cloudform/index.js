"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const _Fn = require("cloudform-types/types/functions");
exports.Fn = _Fn;
const _Refs = require("cloudform-types/types/refs");
exports.Refs = _Refs;
__export(require("cloudform-types/types/index"));
__export(require("cloudform-types/types/dataTypes"));
__export(require("cloudform-types/types/resource"));
__export(require("cloudform-types/types/parameter"));
function cloudform(template) {
    return JSON.stringify(template, undefined, 2);
}
exports.default = cloudform;
