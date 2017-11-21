"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DeadLetterConfig extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Lambda::DeadLetterConfig', properties, dependsOn);
    }
}
exports.default = DeadLetterConfig;
