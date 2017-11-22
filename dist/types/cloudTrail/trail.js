"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class EventSelector extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudTrail::EventSelector', properties, dependsOn);
    }
}
exports.EventSelector = EventSelector;
class DataResource extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudTrail::DataResource', properties, dependsOn);
    }
}
exports.DataResource = DataResource;
class Trail extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudTrail::Trail', properties, dependsOn);
    }
}
exports.default = Trail;
