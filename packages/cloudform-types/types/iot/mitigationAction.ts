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
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ActionParams {
    UpdateDeviceCertificateParams?: UpdateDeviceCertificateParams
    AddThingsToThingGroupParams?: AddThingsToThingGroupParams
    PublishFindingToSnsParams?: PublishFindingToSnsParams
    EnableIoTLoggingParams?: EnableIoTLoggingParams
    ReplaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams
    UpdateCACertificateParams?: UpdateCACertificateParams

    constructor(properties: ActionParams) {
        Object.assign(this, properties)
    }
}

export class AddThingsToThingGroupParams {
    OverrideDynamicGroups?: Value<boolean>
    ThingGroupNames!: List<Value<string>>

    constructor(properties: AddThingsToThingGroupParams) {
        Object.assign(this, properties)
    }
}

export class EnableIoTLoggingParams {
    RoleArnForLogging!: Value<string>
    LogLevel!: Value<string>

    constructor(properties: EnableIoTLoggingParams) {
        Object.assign(this, properties)
    }
}

export class PublishFindingToSnsParams {
    TopicArn!: Value<string>

    constructor(properties: PublishFindingToSnsParams) {
        Object.assign(this, properties)
    }
}

export class ReplaceDefaultPolicyVersionParams {
    TemplateName!: Value<string>

    constructor(properties: ReplaceDefaultPolicyVersionParams) {
        Object.assign(this, properties)
    }
}

export class UpdateCACertificateParams {
    Action!: Value<string>

    constructor(properties: UpdateCACertificateParams) {
        Object.assign(this, properties)
    }
}

export class UpdateDeviceCertificateParams {
    Action!: Value<string>

    constructor(properties: UpdateDeviceCertificateParams) {
        Object.assign(this, properties)
    }
}

export interface MitigationActionProperties {
    ActionName?: Value<string>
    ActionParams: ActionParams
    RoleArn: Value<string>
    Tags?: List<ResourceTag>
}

export default class MitigationAction extends ResourceBase<MitigationActionProperties> {
    static ActionParams = ActionParams
    static AddThingsToThingGroupParams = AddThingsToThingGroupParams
    static EnableIoTLoggingParams = EnableIoTLoggingParams
    static PublishFindingToSnsParams = PublishFindingToSnsParams
    static ReplaceDefaultPolicyVersionParams = ReplaceDefaultPolicyVersionParams
    static UpdateCACertificateParams = UpdateCACertificateParams
    static UpdateDeviceCertificateParams = UpdateDeviceCertificateParams

    constructor(properties: MitigationActionProperties) {
        super('AWS::IoT::MitigationAction', properties)
    }
}
