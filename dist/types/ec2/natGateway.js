"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class NatGateway extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::NatGateway', properties, dependsOn);
    }
}
exports.default = NatGateway;
