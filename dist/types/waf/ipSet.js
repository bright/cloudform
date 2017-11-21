"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class IPSet extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAF::IPSet', properties, dependsOn);
    }
}
exports.default = IPSet;
