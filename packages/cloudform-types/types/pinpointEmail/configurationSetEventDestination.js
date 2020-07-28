"use strict";
/* Generated from:
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DimensionConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DimensionConfiguration = DimensionConfiguration;
class SnsDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SnsDestination = SnsDestination;
class PinpointDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PinpointDestination = PinpointDestination;
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
class EventDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EventDestination = EventDestination;
class ConfigurationSetEventDestination extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::PinpointEmail::ConfigurationSetEventDestination', properties);
    }
}
exports.default = ConfigurationSetEventDestination;
ConfigurationSetEventDestination.DimensionConfiguration = DimensionConfiguration;
ConfigurationSetEventDestination.SnsDestination = SnsDestination;
ConfigurationSetEventDestination.PinpointDestination = PinpointDestination;
ConfigurationSetEventDestination.CloudWatchDestination = CloudWatchDestination;
ConfigurationSetEventDestination.KinesisFirehoseDestination = KinesisFirehoseDestination;
ConfigurationSetEventDestination.EventDestination = EventDestination;
