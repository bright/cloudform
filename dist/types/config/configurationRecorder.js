"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ConfigurationRecorder extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Config::ConfigurationRecorder', properties, dependsOn);
    }
}
exports.default = ConfigurationRecorder;
