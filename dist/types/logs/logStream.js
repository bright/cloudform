"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LogStream extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Logs::LogStream', properties, dependsOn);
    }
}
exports.default = LogStream;
