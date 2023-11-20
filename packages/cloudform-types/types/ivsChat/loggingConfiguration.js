"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3DestinationConfiguration = exports.FirehoseDestinationConfiguration = exports.DestinationConfiguration = exports.CloudWatchLogsDestinationConfiguration = void 0;
const resource_1 = require("../resource");
class CloudWatchLogsDestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudWatchLogsDestinationConfiguration = CloudWatchLogsDestinationConfiguration;
class DestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DestinationConfiguration = DestinationConfiguration;
class FirehoseDestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FirehoseDestinationConfiguration = FirehoseDestinationConfiguration;
class S3DestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3DestinationConfiguration = S3DestinationConfiguration;
class LoggingConfiguration extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IVSChat::LoggingConfiguration', properties);
    }
}
exports.default = LoggingConfiguration;
LoggingConfiguration.CloudWatchLogsDestinationConfiguration = CloudWatchLogsDestinationConfiguration;
LoggingConfiguration.DestinationConfiguration = DestinationConfiguration;
LoggingConfiguration.FirehoseDestinationConfiguration = FirehoseDestinationConfiguration;
LoggingConfiguration.S3DestinationConfiguration = S3DestinationConfiguration;
