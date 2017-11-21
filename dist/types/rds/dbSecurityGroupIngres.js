"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DBSecurityGroupIngres extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::RDS::DBSecurityGroupIngres', properties, dependsOn);
    }
}
exports.default = DBSecurityGroupIngres;
