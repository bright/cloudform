"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class RdsDbInstance extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::RdsDbInstance', properties, dependsOn);
    }
}
exports.default = RdsDbInstance;
