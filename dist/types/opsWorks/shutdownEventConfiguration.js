"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ShutdownEventConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::ShutdownEventConfiguration', properties, dependsOn);
    }
}
exports.default = ShutdownEventConfiguration;
