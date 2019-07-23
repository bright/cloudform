"use strict";
/* Generated from:
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SendingOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SendingOptions = SendingOptions;
class Tags {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Tags = Tags;
class ReputationOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReputationOptions = ReputationOptions;
class DeliveryOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeliveryOptions = DeliveryOptions;
class TrackingOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TrackingOptions = TrackingOptions;
class ConfigurationSet extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::PinpointEmail::ConfigurationSet', properties);
    }
}
ConfigurationSet.SendingOptions = SendingOptions;
ConfigurationSet.Tags = Tags;
ConfigurationSet.ReputationOptions = ReputationOptions;
ConfigurationSet.DeliveryOptions = DeliveryOptions;
ConfigurationSet.TrackingOptions = TrackingOptions;
exports.default = ConfigurationSet;
