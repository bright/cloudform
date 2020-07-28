/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ResourceValue {
    Value?: Value<string>

    constructor(properties: ResourceValue) {
        Object.assign(this, properties)
    }
}

export class SsmControls {
    ErrorPercentage?: Value<number>
    ConcurrentExecutionRatePercentage?: Value<number>

    constructor(properties: SsmControls) {
        Object.assign(this, properties)
    }
}

export class StaticValue {
    Values?: List<Value<string>>

    constructor(properties: StaticValue) {
        Object.assign(this, properties)
    }
}

export class RemediationParameterValue {
    ResourceValue?: ResourceValue
    StaticValue?: StaticValue

    constructor(properties: RemediationParameterValue) {
        Object.assign(this, properties)
    }
}

export class ExecutionControls {
    SsmControls?: SsmControls

    constructor(properties: ExecutionControls) {
        Object.assign(this, properties)
    }
}

export interface RemediationConfigurationProperties {
    TargetVersion?: Value<string>
    ExecutionControls?: ExecutionControls
    Parameters?: {[key: string]: any}
    TargetType: Value<string>
    ConfigRuleName: Value<string>
    ResourceType?: Value<string>
    RetryAttemptSeconds?: Value<number>
    MaximumAutomaticAttempts?: Value<number>
    TargetId: Value<string>
    Automatic?: Value<boolean>
}

export default class RemediationConfiguration extends ResourceBase<RemediationConfigurationProperties> {
    static ResourceValue = ResourceValue
    static SsmControls = SsmControls
    static StaticValue = StaticValue
    static RemediationParameterValue = RemediationParameterValue
    static ExecutionControls = ExecutionControls

    constructor(properties: RemediationConfigurationProperties) {
        super('AWS::Config::RemediationConfiguration', properties)
    }
}
