"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class VPC extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Route53::VPC', properties, dependsOn);
    }
}
exports.default = VPC;