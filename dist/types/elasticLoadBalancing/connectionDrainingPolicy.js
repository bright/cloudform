"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ConnectionDrainingPolicy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancing::ConnectionDrainingPolicy', properties, dependsOn);
    }
}
exports.default = ConnectionDrainingPolicy;
