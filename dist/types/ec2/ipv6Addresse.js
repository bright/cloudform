"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Ipv6Addresse extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::EC2::Ipv6Addresse', properties, dependsOn);
    }
}
exports.default = Ipv6Addresse;
