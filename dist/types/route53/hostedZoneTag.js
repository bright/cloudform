"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class HostedZoneTag extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Route53::HostedZoneTag', properties, dependsOn);
    }
}
exports.default = HostedZoneTag;
