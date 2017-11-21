"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class VPNConnection extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::VPNConnection', properties, dependsOn);
    }
}
exports.default = VPNConnection;
