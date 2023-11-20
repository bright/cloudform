"use strict";
/* Generated from:
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestreamConfig = exports.TimeBasedCollectionScheme = exports.SignalInformation = exports.S3Config = exports.DataDestinationConfig = exports.ConditionBasedCollectionScheme = exports.CollectionScheme = void 0;
const resource_1 = require("../resource");
class CollectionScheme {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CollectionScheme = CollectionScheme;
class ConditionBasedCollectionScheme {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConditionBasedCollectionScheme = ConditionBasedCollectionScheme;
class DataDestinationConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataDestinationConfig = DataDestinationConfig;
class S3Config {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Config = S3Config;
class SignalInformation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SignalInformation = SignalInformation;
class TimeBasedCollectionScheme {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimeBasedCollectionScheme = TimeBasedCollectionScheme;
class TimestreamConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimestreamConfig = TimestreamConfig;
class Campaign extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoTFleetWise::Campaign', properties);
    }
}
exports.default = Campaign;
Campaign.CollectionScheme = CollectionScheme;
Campaign.ConditionBasedCollectionScheme = ConditionBasedCollectionScheme;
Campaign.DataDestinationConfig = DataDestinationConfig;
Campaign.S3Config = S3Config;
Campaign.SignalInformation = SignalInformation;
Campaign.TimeBasedCollectionScheme = TimeBasedCollectionScheme;
Campaign.TimestreamConfig = TimestreamConfig;
