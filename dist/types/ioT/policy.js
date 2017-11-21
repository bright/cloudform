"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Policy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::Policy', properties, dependsOn);
    }
}
exports.default = Policy;