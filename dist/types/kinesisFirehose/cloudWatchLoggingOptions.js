"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class CloudWatchLoggingOptions extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisFirehose::CloudWatchLoggingOptions', properties, dependsOn);
    }
}
exports.default = CloudWatchLoggingOptions;
