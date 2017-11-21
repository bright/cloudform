"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LifecycleConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::S3::LifecycleConfiguration', properties, dependsOn);
    }
}
exports.default = LifecycleConfiguration;
