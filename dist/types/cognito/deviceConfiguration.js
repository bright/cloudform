"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DeviceConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::DeviceConfiguration', properties, dependsOn);
    }
}
exports.default = DeviceConfiguration;
