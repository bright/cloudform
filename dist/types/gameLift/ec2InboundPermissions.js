"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class EC2InboundPermissions extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::GameLift::EC2InboundPermissions', properties, dependsOn);
    }
}
exports.default = EC2InboundPermissions;
