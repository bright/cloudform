"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ManagedPolicy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IAM::ManagedPolicy', properties, dependsOn);
    }
}
exports.default = ManagedPolicy;
