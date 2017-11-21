"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DBInstance extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::RDS::DBInstance', properties, dependsOn);
    }
}
exports.default = DBInstance;
