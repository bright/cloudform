"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class IpPermission extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::GameLift::IpPermission', properties, dependsOn);
    }
}
exports.IpPermission = IpPermission;
class Fleet extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::GameLift::Fleet', properties, dependsOn);
    }
}
exports.default = Fleet;
