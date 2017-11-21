"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DefaultAction extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAF::DefaultAction', properties, dependsOn);
    }
}
exports.default = DefaultAction;
