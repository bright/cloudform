"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class StreamSpecification extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::DynamoDB::StreamSpecification', properties, dependsOn);
    }
}
exports.default = StreamSpecification;
