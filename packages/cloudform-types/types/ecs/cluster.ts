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

export class CapacityProviderStrategyItem {
    CapacityProvider?: Value<string>
    Weight?: Value<number>
    Base?: Value<number>

    constructor(properties: CapacityProviderStrategyItem) {
        Object.assign(this, properties)
    }
}

export class ClusterConfiguration {
    ExecuteCommandConfiguration?: ExecuteCommandConfiguration

    constructor(properties: ClusterConfiguration) {
        Object.assign(this, properties)
    }
}

export class ClusterSettings {
    Value?: Value<string>
    Name?: Value<string>

    constructor(properties: ClusterSettings) {
        Object.assign(this, properties)
    }
}

export class ExecuteCommandConfiguration {
    Logging?: Value<string>
    KmsKeyId?: Value<string>
    LogConfiguration?: ExecuteCommandLogConfiguration

    constructor(properties: ExecuteCommandConfiguration) {
        Object.assign(this, properties)
    }
}

export class ExecuteCommandLogConfiguration {
    S3EncryptionEnabled?: Value<boolean>
    CloudWatchEncryptionEnabled?: Value<boolean>
    CloudWatchLogGroupName?: Value<string>
    S3KeyPrefix?: Value<string>
    S3BucketName?: Value<string>

    constructor(properties: ExecuteCommandLogConfiguration) {
        Object.assign(this, properties)
    }
}

export class ServiceConnectDefaults {
    Namespace?: Value<string>

    constructor(properties: ServiceConnectDefaults) {
        Object.assign(this, properties)
    }
}

export interface ClusterProperties {
    ClusterSettings?: List<ClusterSettings>
    DefaultCapacityProviderStrategy?: List<CapacityProviderStrategyItem>
    Configuration?: ClusterConfiguration
    ServiceConnectDefaults?: ServiceConnectDefaults
    CapacityProviders?: List<Value<string>>
    ClusterName?: Value<string>
    Tags?: List<ResourceTag>
}

export default class Cluster extends ResourceBase<ClusterProperties> {
    static CapacityProviderStrategyItem = CapacityProviderStrategyItem
    static ClusterConfiguration = ClusterConfiguration
    static ClusterSettings = ClusterSettings
    static ExecuteCommandConfiguration = ExecuteCommandConfiguration
    static ExecuteCommandLogConfiguration = ExecuteCommandLogConfiguration
    static ServiceConnectDefaults = ServiceConnectDefaults

    constructor(properties?: ClusterProperties) {
        super('AWS::ECS::Cluster', properties || {})
    }
}
