"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class VpcConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Lambda::VpcConfig', properties, dependsOn);
    }
}
exports.default = VpcConfig;
