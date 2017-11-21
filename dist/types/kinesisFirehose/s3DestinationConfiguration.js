"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class S3DestinationConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::S3DestinationConfiguration', properties, dependsOn);
    }
}
exports.default = S3DestinationConfiguration;
