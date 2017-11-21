"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Origin extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::Origin', properties, dependsOn);
    }
}
exports.default = Origin;
