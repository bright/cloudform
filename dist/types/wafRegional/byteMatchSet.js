"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ByteMatchTuple extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAFRegional::ByteMatchTuple', properties, dependsOn);
    }
}
exports.ByteMatchTuple = ByteMatchTuple;
class FieldToMatch extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAFRegional::FieldToMatch', properties, dependsOn);
    }
}
exports.FieldToMatch = FieldToMatch;
class ByteMatchSet extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAFRegional::ByteMatchSet', properties, dependsOn);
    }
}
exports.default = ByteMatchSet;
