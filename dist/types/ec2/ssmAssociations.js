"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SsmAssociations extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::SsmAssociations', properties, dependsOn);
    }
}
exports.default = SsmAssociations;
