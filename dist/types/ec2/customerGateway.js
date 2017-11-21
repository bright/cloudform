"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class CustomerGateway extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::CustomerGateway', properties, dependsOn);
    }
}
exports.default = CustomerGateway;
