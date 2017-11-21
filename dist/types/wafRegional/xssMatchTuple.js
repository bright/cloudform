"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class XssMatchTuple extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAFRegional::XssMatchTuple', properties, dependsOn);
    }
}
exports.default = XssMatchTuple;
