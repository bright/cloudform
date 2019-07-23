"use strict";
/* Generated from:
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class EventDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EventDestination = EventDestination;
class DimensionConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DimensionConfiguration = DimensionConfiguration;
class CloudWatchDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudWatchDestination = CloudWatchDestination;
class KinesisFirehoseDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KinesisFirehoseDestination = KinesisFirehoseDestination;
class ConfigurationSetEventDestination extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SES::ConfigurationSetEventDestination', properties);
    }
}
ConfigurationSetEventDestination.EventDestination = EventDestination;
ConfigurationSetEventDestination.DimensionConfiguration = DimensionConfiguration;
ConfigurationSetEventDestination.CloudWatchDestination = CloudWatchDestination;
ConfigurationSetEventDestination.KinesisFirehoseDestination = KinesisFirehoseDestination;
exports.default = ConfigurationSetEventDestination;
