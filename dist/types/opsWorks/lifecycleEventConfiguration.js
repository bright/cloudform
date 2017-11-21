"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LifecycleEventConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::LifecycleEventConfiguration', properties, dependsOn);
    }
}
exports.default = LifecycleEventConfiguration;
