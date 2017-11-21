"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DBSubnetGroup extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::RDS::DBSubnetGroup', properties, dependsOn);
    }
}
exports.default = DBSubnetGroup;
