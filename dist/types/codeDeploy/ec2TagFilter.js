"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Ec2TagFilter extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::Ec2TagFilter', properties, dependsOn);
    }
}
exports.default = Ec2TagFilter;
