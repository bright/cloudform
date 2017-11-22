"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class AttributePayload extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::AttributePayload', properties, dependsOn);
    }
}
exports.AttributePayload = AttributePayload;
class Thing extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::Thing', properties, dependsOn);
    }
}
exports.default = Thing;
