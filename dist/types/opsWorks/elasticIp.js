"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ElasticIp extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::ElasticIp', properties, dependsOn);
    }
}
exports.default = ElasticIp;
