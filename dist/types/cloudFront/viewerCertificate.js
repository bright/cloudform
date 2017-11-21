"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ViewerCertificate extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFront::ViewerCertificate', properties, dependsOn);
    }
}
exports.default = ViewerCertificate;
