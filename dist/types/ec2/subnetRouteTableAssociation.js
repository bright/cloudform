"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SubnetRouteTableAssociation extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::SubnetRouteTableAssociation', properties, dependsOn);
    }
}
exports.default = SubnetRouteTableAssociation;
