"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Code extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Lambda::Code', properties, dependsOn);
    }
}
exports.default = Code;
