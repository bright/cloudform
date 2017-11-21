"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class GeoRestriction extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::GeoRestriction', properties, dependsOn);
    }
}
exports.default = GeoRestriction;
