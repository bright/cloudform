"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ConnectionSettings extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancing::ConnectionSettings', properties, dependsOn);
    }
}
exports.default = ConnectionSettings;
