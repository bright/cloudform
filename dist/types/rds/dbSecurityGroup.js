"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DBSecurityGroup extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::RDS::DBSecurityGroup', properties, dependsOn);
    }
}
exports.default = DBSecurityGroup;
