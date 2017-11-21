"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonStringify = require('json-pretty');
const _Fn = require("./types/functions");
exports.Fn = _Fn;
const _Refs = require("./types/refs");
exports.Refs = _Refs;
function cloudform(template) {
    return jsonStringify(template);
}
exports.default = cloudform;
