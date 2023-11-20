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
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ContinuousDeploymentPolicyConfig {
    Type?: Value<string>
    SingleHeaderPolicyConfig?: SingleHeaderPolicyConfig
    Enabled!: Value<boolean>
    StagingDistributionDnsNames!: List<Value<string>>
    TrafficConfig?: TrafficConfig
    SingleWeightPolicyConfig?: SingleWeightPolicyConfig

    constructor(properties: ContinuousDeploymentPolicyConfig) {
        Object.assign(this, properties)
    }
}

export class SessionStickinessConfig {
    IdleTTL!: Value<number>
    MaximumTTL!: Value<number>

    constructor(properties: SessionStickinessConfig) {
        Object.assign(this, properties)
    }
}

export class SingleHeaderConfig {
    Header!: Value<string>
    Value!: Value<string>

    constructor(properties: SingleHeaderConfig) {
        Object.assign(this, properties)
    }
}

export class SingleHeaderPolicyConfig {
    Header!: Value<string>
    Value!: Value<string>

    constructor(properties: SingleHeaderPolicyConfig) {
        Object.assign(this, properties)
    }
}

export class SingleWeightConfig {
    SessionStickinessConfig?: SessionStickinessConfig
    Weight!: Value<number>

    constructor(properties: SingleWeightConfig) {
        Object.assign(this, properties)
    }
}

export class SingleWeightPolicyConfig {
    SessionStickinessConfig?: SessionStickinessConfig
    Weight!: Value<number>

    constructor(properties: SingleWeightPolicyConfig) {
        Object.assign(this, properties)
    }
}

export class TrafficConfig {
    SingleWeightConfig?: SingleWeightConfig
    Type!: Value<string>
    SingleHeaderConfig?: SingleHeaderConfig

    constructor(properties: TrafficConfig) {
        Object.assign(this, properties)
    }
}

export interface ContinuousDeploymentPolicyProperties {
    ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig
}

export default class ContinuousDeploymentPolicy extends ResourceBase<ContinuousDeploymentPolicyProperties> {
    static ContinuousDeploymentPolicyConfig = ContinuousDeploymentPolicyConfig
    static SessionStickinessConfig = SessionStickinessConfig
    static SingleHeaderConfig = SingleHeaderConfig
    static SingleHeaderPolicyConfig = SingleHeaderPolicyConfig
    static SingleWeightConfig = SingleWeightConfig
    static SingleWeightPolicyConfig = SingleWeightPolicyConfig
    static TrafficConfig = TrafficConfig

    constructor(properties: ContinuousDeploymentPolicyProperties) {
        super('AWS::CloudFront::ContinuousDeploymentPolicy', properties)
    }
}
