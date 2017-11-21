"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ByteMatchTuples extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAFRegional::ByteMatchTuples', properties, dependsOn);
    }
}
exports.default = ByteMatchTuples;
