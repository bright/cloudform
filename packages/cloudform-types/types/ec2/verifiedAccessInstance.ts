/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CloudWatchLogs {
    LogGroup?: Value<string>
    Enabled?: Value<boolean>

    constructor(properties: CloudWatchLogs) {
        Object.assign(this, properties)
    }
}

export class KinesisDataFirehose {
    DeliveryStream?: Value<string>
    Enabled?: Value<boolean>

    constructor(properties: KinesisDataFirehose) {
        Object.assign(this, properties)
    }
}

export class S3 {
    BucketName?: Value<string>
    Enabled?: Value<boolean>
    Prefix?: Value<string>
    BucketOwner?: Value<string>

    constructor(properties: S3) {
        Object.assign(this, properties)
    }
}

export class VerifiedAccessLogs {
    S3?: S3
    LogVersion?: Value<string>
    KinesisDataFirehose?: KinesisDataFirehose
    CloudWatchLogs?: CloudWatchLogs
    IncludeTrustContext?: Value<boolean>

    constructor(properties: VerifiedAccessLogs) {
        Object.assign(this, properties)
    }
}

export class VerifiedAccessTrustProvider {
    Description?: Value<string>
    DeviceTrustProviderType?: Value<string>
    VerifiedAccessTrustProviderId?: Value<string>
    TrustProviderType?: Value<string>
    UserTrustProviderType?: Value<string>

    constructor(properties: VerifiedAccessTrustProvider) {
        Object.assign(this, properties)
    }
}

export interface VerifiedAccessInstanceProperties {
    VerifiedAccessTrustProviders?: List<VerifiedAccessTrustProvider>
    Description?: Value<string>
    FipsEnabled?: Value<boolean>
    LoggingConfigurations?: VerifiedAccessLogs
    VerifiedAccessTrustProviderIds?: List<Value<string>>
    Tags?: List<ResourceTag>
}

export default class VerifiedAccessInstance extends ResourceBase<VerifiedAccessInstanceProperties> {
    static CloudWatchLogs = CloudWatchLogs
    static KinesisDataFirehose = KinesisDataFirehose
    static S3 = S3
    static VerifiedAccessLogs = VerifiedAccessLogs
    static VerifiedAccessTrustProvider = VerifiedAccessTrustProvider

    constructor(properties?: VerifiedAccessInstanceProperties) {
        super('AWS::EC2::VerifiedAccessInstance', properties || {})
    }
}
