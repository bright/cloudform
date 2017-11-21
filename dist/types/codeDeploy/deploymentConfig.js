"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DeploymentConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::DeploymentConfig', properties, dependsOn);
    }
}
exports.default = DeploymentConfig;
