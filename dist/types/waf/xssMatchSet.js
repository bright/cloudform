"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class XssMatchSet extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAF::XssMatchSet', properties, dependsOn);
    }
}
exports.default = XssMatchSet;
