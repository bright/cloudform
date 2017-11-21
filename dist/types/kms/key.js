"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Key extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KMS::Key', properties, dependsOn);
    }
}
exports.default = Key;
