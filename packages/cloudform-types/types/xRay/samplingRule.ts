/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class SamplingRuleUpdate {
    Attributes?: {[key: string]: Value<string>}
    FixedRate?: Value<number>
    Host?: Value<string>
    HTTPMethod?: Value<string>
    Priority?: Value<number>
    ReservoirSize?: Value<number>
    ResourceARN?: Value<string>
    RuleARN?: Value<string>
    RuleName?: Value<string>
    ServiceName?: Value<string>
    ServiceType?: Value<string>
    URLPath?: Value<string>

    constructor(properties: SamplingRuleUpdate) {
        Object.assign(this, properties)
    }
}

export class SamplingRuleRecord {
    CreatedAt?: Value<string>
    ModifiedAt?: Value<string>
    SamplingRule?: SamplingRule

    constructor(properties: SamplingRuleRecord) {
        Object.assign(this, properties)
    }
}

export class SamplingRuleInner {
    Attributes?: {[key: string]: Value<string>}
    FixedRate?: Value<number>
    Host?: Value<string>
    HTTPMethod?: Value<string>
    Priority?: Value<number>
    ReservoirSize?: Value<number>
    ResourceARN?: Value<string>
    RuleARN?: Value<string>
    RuleName?: Value<string>
    ServiceName?: Value<string>
    ServiceType?: Value<string>
    URLPath?: Value<string>
    Version?: Value<number>

    constructor(properties: SamplingRuleInner) {
        Object.assign(this, properties)
    }
}

export interface SamplingRuleProperties {
    SamplingRule?: SamplingRule
    SamplingRuleRecord?: SamplingRuleRecord
    SamplingRuleUpdate?: SamplingRuleUpdate
    RuleName?: Value<string>
    Tags?: List<{[key: string]: any}>
}

export default class SamplingRule extends ResourceBase<SamplingRuleProperties> {
    static SamplingRuleUpdate = SamplingRuleUpdate
    static SamplingRuleRecord = SamplingRuleRecord
    static SamplingRule = SamplingRuleInner

    constructor(properties?: SamplingRuleProperties) {
        super('AWS::XRay::SamplingRule', properties || {})
    }
}
