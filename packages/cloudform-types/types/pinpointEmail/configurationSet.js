"use strict";
/* Generated from:
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SendingOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SendingOptions = SendingOptions;
class ReputationOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReputationOptions = ReputationOptions;
class TrackingOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TrackingOptions = TrackingOptions;
class Tags {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Tags = Tags;
class DeliveryOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeliveryOptions = DeliveryOptions;
class ConfigurationSet extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::PinpointEmail::ConfigurationSet', properties);
    }
}
exports.default = ConfigurationSet;
ConfigurationSet.SendingOptions = SendingOptions;
ConfigurationSet.ReputationOptions = ReputationOptions;
ConfigurationSet.TrackingOptions = TrackingOptions;
ConfigurationSet.Tags = Tags;
ConfigurationSet.DeliveryOptions = DeliveryOptions;
