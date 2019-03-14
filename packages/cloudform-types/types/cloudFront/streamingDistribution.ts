/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class TrustedSigners {
    Enabled!: Value<boolean>
    AwsAccountNumbers?: List<Value<string>>

    constructor(properties: TrustedSigners) {
        Object.assign(this, properties)
    }
}

export class S3Origin {
    DomainName!: Value<string>
    OriginAccessIdentity!: Value<string>

    constructor(properties: S3Origin) {
        Object.assign(this, properties)
    }
}

export class Logging {
    Bucket!: Value<string>
    Enabled!: Value<boolean>
    Prefix!: Value<string>

    constructor(properties: Logging) {
        Object.assign(this, properties)
    }
}

export class StreamingDistributionConfig {
    Logging?: Logging
    Comment!: Value<string>
    PriceClass?: Value<string>
    S3Origin!: S3Origin
    Enabled!: Value<boolean>
    Aliases?: List<Value<string>>
    TrustedSigners!: TrustedSigners

    constructor(properties: StreamingDistributionConfig) {
        Object.assign(this, properties)
    }
}

export interface StreamingDistributionProperties {
    StreamingDistributionConfig: StreamingDistributionConfig
    Tags: List<ResourceTag>
}

export default class StreamingDistribution extends ResourceBase<StreamingDistributionProperties> {
    static TrustedSigners = TrustedSigners
    static S3Origin = S3Origin
    static Logging = Logging
    static StreamingDistributionConfig = StreamingDistributionConfig

    constructor(properties?: StreamingDistributionProperties) {
        super('AWS::CloudFront::StreamingDistribution', properties)
    }
}
