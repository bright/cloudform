"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class BodyS3Location extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::BodyS3Location', properties, dependsOn);
    }
}
exports.default = BodyS3Location;
