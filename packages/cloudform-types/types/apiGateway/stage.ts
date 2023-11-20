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
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AccessLogSetting {
    Format?: Value<string>
    DestinationArn?: Value<string>

    constructor(properties: AccessLogSetting) {
        Object.assign(this, properties)
    }
}

export class CanarySetting {
    DeploymentId?: Value<string>
    StageVariableOverrides?: {[key: string]: Value<string>}
    PercentTraffic?: Value<number>
    UseStageCache?: Value<boolean>

    constructor(properties: CanarySetting) {
        Object.assign(this, properties)
    }
}

export class MethodSetting {
    CacheTtlInSeconds?: Value<number>
    LoggingLevel?: Value<string>
    ResourcePath?: Value<string>
    CacheDataEncrypted?: Value<boolean>
    DataTraceEnabled?: Value<boolean>
    ThrottlingBurstLimit?: Value<number>
    CachingEnabled?: Value<boolean>
    MetricsEnabled?: Value<boolean>
    HttpMethod?: Value<string>
    ThrottlingRateLimit?: Value<number>

    constructor(properties: MethodSetting) {
        Object.assign(this, properties)
    }
}

export interface StageProperties {
    DeploymentId?: Value<string>
    Description?: Value<string>
    StageName?: Value<string>
    RestApiId: Value<string>
    CanarySetting?: CanarySetting
    ClientCertificateId?: Value<string>
    Variables?: {[key: string]: Value<string>}
    DocumentationVersion?: Value<string>
    TracingEnabled?: Value<boolean>
    MethodSettings?: List<MethodSetting>
    AccessLogSetting?: AccessLogSetting
    CacheClusterSize?: Value<string>
    Tags?: List<ResourceTag>
    CacheClusterEnabled?: Value<boolean>
}

export default class Stage extends ResourceBase<StageProperties> {
    static AccessLogSetting = AccessLogSetting
    static CanarySetting = CanarySetting
    static MethodSetting = MethodSetting

    constructor(properties: StageProperties) {
        super('AWS::ApiGateway::Stage', properties)
    }
}
