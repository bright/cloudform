"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SizeConstraints extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAF::SizeConstraints', properties, dependsOn);
    }
}
exports.default = SizeConstraints;
