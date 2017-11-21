"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class MinimumHealthyHosts extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::MinimumHealthyHosts', properties, dependsOn);
    }
}
exports.default = MinimumHealthyHosts;
