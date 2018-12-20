"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const _Fn = require("./types/functions");
exports.Fn = _Fn;
const _Refs = require("./types/refs");
exports.Refs = _Refs;
__export(require("./types/index"));
__export(require("./types/dataTypes"));
__export(require("./types/resource"));
__export(require("./types/parameter"));
const cloudFront_1 = require("./types/cloudFront");
const cfDistro = new cloudFront_1.default.Distribution({
    DistributionConfig: {
        Enabled: true
    }
});
