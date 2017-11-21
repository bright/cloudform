"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class AliasTarget extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Route53::AliasTarget', properties, dependsOn);
    }
}
exports.default = AliasTarget;
