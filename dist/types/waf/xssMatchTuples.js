"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class XssMatchTuples extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAF::XssMatchTuples', properties, dependsOn);
    }
}
exports.default = XssMatchTuples;
