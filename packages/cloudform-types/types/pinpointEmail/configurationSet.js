"use strict";
/* Generated from:
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingOptions = exports.Tags = exports.SendingOptions = exports.ReputationOptions = exports.DeliveryOptions = void 0;
const resource_1 = require("../resource");
class DeliveryOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeliveryOptions = DeliveryOptions;
class ReputationOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReputationOptions = ReputationOptions;
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
exports.default = ConfigurationSet;
ConfigurationSet.DeliveryOptions = DeliveryOptions;
ConfigurationSet.ReputationOptions = ReputationOptions;
ConfigurationSet.SendingOptions = SendingOptions;
ConfigurationSet.Tags = Tags;
ConfigurationSet.TrackingOptions = TrackingOptions;
