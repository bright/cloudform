/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DeploymentCanarySettings {
    PercentTraffic?: Value<number>
    StageVariableOverrides?: {[key: string]: Value<string>}
    UseStageCache?: Value<boolean>

    constructor(properties: DeploymentCanarySettings) {
        Object.assign(this, properties)
    }
}

export class MethodSetting {
    CacheDataEncrypted?: Value<boolean>
    CacheTtlInSeconds?: Value<number>
    CachingEnabled?: Value<boolean>
    DataTraceEnabled?: Value<boolean>
    HttpMethod?: Value<string>
    LoggingLevel?: Value<string>
    MetricsEnabled?: Value<boolean>
    ResourcePath?: Value<string>
    ThrottlingBurstLimit?: Value<number>
    ThrottlingRateLimit?: Value<number>

    constructor(properties: MethodSetting) {
        Object.assign(this, properties)
    }
}

export class StageDescription {
    AccessLogSetting?: AccessLogSetting
    CacheClusterEnabled?: Value<boolean>
    CacheClusterSize?: Value<string>
    CacheDataEncrypted?: Value<boolean>
    CacheTtlInSeconds?: Value<number>
    CachingEnabled?: Value<boolean>
    CanarySetting?: CanarySetting
    ClientCertificateId?: Value<string>
    DataTraceEnabled?: Value<boolean>
    Description?: Value<string>
    DocumentationVersion?: Value<string>
    LoggingLevel?: Value<string>
    MethodSettings?: List<MethodSetting>
    MetricsEnabled?: Value<boolean>
    Tags?: ResourceTag[]
    ThrottlingBurstLimit?: Value<number>
    ThrottlingRateLimit?: Value<number>
    TracingEnabled?: Value<boolean>
    Variables?: {[key: string]: Value<string>}

    constructor(properties: StageDescription) {
        Object.assign(this, properties)
    }
}

export class CanarySetting {
    PercentTraffic?: Value<number>
    StageVariableOverrides?: {[key: string]: Value<string>}
    UseStageCache?: Value<boolean>

    constructor(properties: CanarySetting) {
        Object.assign(this, properties)
    }
}

export class AccessLogSetting {
    DestinationArn?: Value<string>
    Format?: Value<string>

    constructor(properties: AccessLogSetting) {
        Object.assign(this, properties)
    }
}

export interface DeploymentProperties {
    DeploymentCanarySettings?: DeploymentCanarySettings
    Description?: Value<string>
    RestApiId: Value<string>
    StageDescription?: StageDescription
    StageName?: Value<string>
}

export default class Deployment extends ResourceBase {
    static DeploymentCanarySettings = DeploymentCanarySettings
    static MethodSetting = MethodSetting
    static StageDescription = StageDescription
    static CanarySetting = CanarySetting
    static AccessLogSetting = AccessLogSetting

    constructor(properties?: DeploymentProperties) {
        super('AWS::ApiGateway::Deployment', properties)
    }
}
