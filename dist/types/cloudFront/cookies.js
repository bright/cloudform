"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Cookies extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::Cookies', properties, dependsOn);
    }
}
exports.default = Cookies;
