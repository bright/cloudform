"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Logging extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::Logging', properties, dependsOn);
    }
}
exports.default = Logging;
