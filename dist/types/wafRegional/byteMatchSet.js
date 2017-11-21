"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ByteMatchSet extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAFRegional::ByteMatchSet', properties, dependsOn);
    }
}
exports.default = ByteMatchSet;
