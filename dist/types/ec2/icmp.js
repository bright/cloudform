"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Icmp extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::Icmp', properties, dependsOn);
    }
}
exports.default = Icmp;
