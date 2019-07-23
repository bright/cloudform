"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class FleetLaunchTemplateSpecificationRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FleetLaunchTemplateSpecificationRequest = FleetLaunchTemplateSpecificationRequest;
class OnDemandOptionsRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OnDemandOptionsRequest = OnDemandOptionsRequest;
class TagRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagRequest = TagRequest;
class TargetCapacitySpecificationRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TargetCapacitySpecificationRequest = TargetCapacitySpecificationRequest;
class FleetLaunchTemplateOverridesRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FleetLaunchTemplateOverridesRequest = FleetLaunchTemplateOverridesRequest;
class FleetLaunchTemplateConfigRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FleetLaunchTemplateConfigRequest = FleetLaunchTemplateConfigRequest;
class TagSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagSpecification = TagSpecification;
class SpotOptionsRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SpotOptionsRequest = SpotOptionsRequest;
class EC2Fleet extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::EC2::EC2Fleet', properties);
    }
}
EC2Fleet.FleetLaunchTemplateSpecificationRequest = FleetLaunchTemplateSpecificationRequest;
EC2Fleet.OnDemandOptionsRequest = OnDemandOptionsRequest;
EC2Fleet.TagRequest = TagRequest;
EC2Fleet.TargetCapacitySpecificationRequest = TargetCapacitySpecificationRequest;
EC2Fleet.FleetLaunchTemplateOverridesRequest = FleetLaunchTemplateOverridesRequest;
EC2Fleet.FleetLaunchTemplateConfigRequest = FleetLaunchTemplateConfigRequest;
EC2Fleet.TagSpecification = TagSpecification;
EC2Fleet.SpotOptionsRequest = SpotOptionsRequest;
exports.default = EC2Fleet;
