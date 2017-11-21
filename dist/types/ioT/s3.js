"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class S3 extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::S3', properties, dependsOn);
    }
}
exports.default = S3;
