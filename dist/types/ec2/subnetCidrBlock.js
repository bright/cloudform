"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SubnetCidrBlock extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::SubnetCidrBlock', properties, dependsOn);
    }
}
exports.default = SubnetCidrBlock;
