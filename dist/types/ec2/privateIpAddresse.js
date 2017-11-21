"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class PrivateIpAddresse extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::PrivateIpAddresse', properties, dependsOn);
    }
}
exports.default = PrivateIpAddresse;
