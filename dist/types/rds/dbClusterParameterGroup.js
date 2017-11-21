"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DBClusterParameterGroup extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::RDS::DBClusterParameterGroup', properties, dependsOn);
    }
}
exports.default = DBClusterParameterGroup;
