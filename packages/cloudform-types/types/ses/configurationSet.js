"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VdmOptions = exports.TrackingOptions = exports.SuppressionOptions = exports.SendingOptions = exports.ReputationOptions = exports.GuardianOptions = exports.DeliveryOptions = exports.DashboardOptions = void 0;
const resource_1 = require("../resource");
class DashboardOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DashboardOptions = DashboardOptions;
class DeliveryOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeliveryOptions = DeliveryOptions;
class GuardianOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GuardianOptions = GuardianOptions;
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
class SuppressionOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SuppressionOptions = SuppressionOptions;
class TrackingOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TrackingOptions = TrackingOptions;
class VdmOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VdmOptions = VdmOptions;
class ConfigurationSet extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SES::ConfigurationSet', properties || {});
    }
}
exports.default = ConfigurationSet;
ConfigurationSet.DashboardOptions = DashboardOptions;
ConfigurationSet.DeliveryOptions = DeliveryOptions;
ConfigurationSet.GuardianOptions = GuardianOptions;
ConfigurationSet.ReputationOptions = ReputationOptions;
ConfigurationSet.SendingOptions = SendingOptions;
ConfigurationSet.SuppressionOptions = SuppressionOptions;
ConfigurationSet.TrackingOptions = TrackingOptions;
ConfigurationSet.VdmOptions = VdmOptions;
