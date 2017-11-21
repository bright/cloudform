"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ClusterParameterGroup extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Redshift::ClusterParameterGroup', properties, dependsOn);
    }
}
exports.default = ClusterParameterGroup;
