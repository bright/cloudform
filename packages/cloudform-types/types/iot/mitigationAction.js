"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeviceCertificateParams = exports.UpdateCACertificateParams = exports.ReplaceDefaultPolicyVersionParams = exports.PublishFindingToSnsParams = exports.EnableIoTLoggingParams = exports.AddThingsToThingGroupParams = exports.ActionParams = void 0;
const resource_1 = require("../resource");
class ActionParams {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ActionParams = ActionParams;
class AddThingsToThingGroupParams {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AddThingsToThingGroupParams = AddThingsToThingGroupParams;
class EnableIoTLoggingParams {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EnableIoTLoggingParams = EnableIoTLoggingParams;
class PublishFindingToSnsParams {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PublishFindingToSnsParams = PublishFindingToSnsParams;
class ReplaceDefaultPolicyVersionParams {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReplaceDefaultPolicyVersionParams = ReplaceDefaultPolicyVersionParams;
class UpdateCACertificateParams {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UpdateCACertificateParams = UpdateCACertificateParams;
class UpdateDeviceCertificateParams {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UpdateDeviceCertificateParams = UpdateDeviceCertificateParams;
class MitigationAction extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IoT::MitigationAction', properties);
    }
}
exports.default = MitigationAction;
MitigationAction.ActionParams = ActionParams;
MitigationAction.AddThingsToThingGroupParams = AddThingsToThingGroupParams;
MitigationAction.EnableIoTLoggingParams = EnableIoTLoggingParams;
MitigationAction.PublishFindingToSnsParams = PublishFindingToSnsParams;
MitigationAction.ReplaceDefaultPolicyVersionParams = ReplaceDefaultPolicyVersionParams;
MitigationAction.UpdateCACertificateParams = UpdateCACertificateParams;
MitigationAction.UpdateDeviceCertificateParams = UpdateDeviceCertificateParams;
