/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Cookies {
    WhitelistedNames?: List<Value<string>>
    Forward!: Value<string>

    constructor(properties: Cookies) {
        Object.assign(this, properties)
    }
}

export class LambdaFunctionAssociation {
    EventType?: Value<string>
    LambdaFunctionARN?: Value<string>

    constructor(properties: LambdaFunctionAssociation) {
        Object.assign(this, properties)
    }
}

export class CustomOriginConfig {
    OriginReadTimeout?: Value<number>
    HTTPSPort?: Value<number>
    OriginKeepaliveTimeout?: Value<number>
    OriginSSLProtocols?: List<Value<string>>
    HTTPPort?: Value<number>
    OriginProtocolPolicy!: Value<string>

    constructor(properties: CustomOriginConfig) {
        Object.assign(this, properties)
    }
}

export class ForwardedValues {
    Cookies?: Cookies
    Headers?: List<Value<string>>
    QueryString!: Value<boolean>
    QueryStringCacheKeys?: List<Value<string>>

    constructor(properties: ForwardedValues) {
        Object.assign(this, properties)
    }
}

export class CacheBehavior {
    Compress?: Value<boolean>
    LambdaFunctionAssociations?: List<LambdaFunctionAssociation>
    TargetOriginId!: Value<string>
    ViewerProtocolPolicy!: Value<string>
    TrustedSigners?: List<Value<string>>
    DefaultTTL?: Value<number>
    FieldLevelEncryptionId?: Value<string>
    AllowedMethods?: List<Value<string>>
    PathPattern!: Value<string>
    CachedMethods?: List<Value<string>>
    SmoothStreaming?: Value<boolean>
    ForwardedValues!: ForwardedValues
    MinTTL?: Value<number>
    MaxTTL?: Value<number>

    constructor(properties: CacheBehavior) {
        Object.assign(this, properties)
    }
}

export class DefaultCacheBehavior {
    Compress?: Value<boolean>
    LambdaFunctionAssociations?: List<LambdaFunctionAssociation>
    TargetOriginId!: Value<string>
    ViewerProtocolPolicy!: Value<string>
    TrustedSigners?: List<Value<string>>
    DefaultTTL?: Value<number>
    FieldLevelEncryptionId?: Value<string>
    AllowedMethods?: List<Value<string>>
    CachedMethods?: List<Value<string>>
    SmoothStreaming?: Value<boolean>
    ForwardedValues!: ForwardedValues
    MinTTL?: Value<number>
    MaxTTL?: Value<number>

    constructor(properties: DefaultCacheBehavior) {
        Object.assign(this, properties)
    }
}

export class Restrictions {
    GeoRestriction!: GeoRestriction

    constructor(properties: Restrictions) {
        Object.assign(this, properties)
    }
}

export class Origin {
    OriginCustomHeaders?: List<OriginCustomHeader>
    DomainName!: Value<string>
    S3OriginConfig?: S3OriginConfig
    OriginPath?: Value<string>
    Id!: Value<string>
    CustomOriginConfig?: CustomOriginConfig

    constructor(properties: Origin) {
        Object.assign(this, properties)
    }
}

export class GeoRestriction {
    Locations?: List<Value<string>>
    RestrictionType!: Value<string>

    constructor(properties: GeoRestriction) {
        Object.assign(this, properties)
    }
}

export class ViewerCertificate {
    IamCertificateId?: Value<string>
    SslSupportMethod?: Value<string>
    MinimumProtocolVersion?: Value<string>
    CloudFrontDefaultCertificate?: Value<boolean>
    AcmCertificateArn?: Value<string>

    constructor(properties: ViewerCertificate) {
        Object.assign(this, properties)
    }
}

export class S3OriginConfig {
    OriginAccessIdentity?: Value<string>

    constructor(properties: S3OriginConfig) {
        Object.assign(this, properties)
    }
}

export class CustomErrorResponse {
    ResponseCode?: Value<number>
    ErrorCachingMinTTL?: Value<number>
    ErrorCode!: Value<number>
    ResponsePagePath?: Value<string>

    constructor(properties: CustomErrorResponse) {
        Object.assign(this, properties)
    }
}

export class Logging {
    IncludeCookies?: Value<boolean>
    Bucket!: Value<string>
    Prefix?: Value<string>

    constructor(properties: Logging) {
        Object.assign(this, properties)
    }
}

export class DistributionConfig {
    Logging?: Logging
    Comment?: Value<string>
    DefaultRootObject?: Value<string>
    Origins?: List<Origin>
    ViewerCertificate?: ViewerCertificate
    PriceClass?: Value<string>
    DefaultCacheBehavior?: DefaultCacheBehavior
    CustomErrorResponses?: List<CustomErrorResponse>
    Enabled!: Value<boolean>
    Aliases?: List<Value<string>>
    IPV6Enabled?: Value<boolean>
    WebACLId?: Value<string>
    HttpVersion?: Value<string>
    Restrictions?: Restrictions
    CacheBehaviors?: List<CacheBehavior>

    constructor(properties: DistributionConfig) {
        Object.assign(this, properties)
    }
}

export class OriginCustomHeader {
    HeaderValue!: Value<string>
    HeaderName!: Value<string>

    constructor(properties: OriginCustomHeader) {
        Object.assign(this, properties)
    }
}

export interface DistributionProperties {
    DistributionConfig: DistributionConfig
    Tags?: List<ResourceTag>
}

export default class Distribution extends ResourceBase<DistributionProperties> {
    static Cookies = Cookies
    static LambdaFunctionAssociation = LambdaFunctionAssociation
    static CustomOriginConfig = CustomOriginConfig
    static ForwardedValues = ForwardedValues
    static CacheBehavior = CacheBehavior
    static DefaultCacheBehavior = DefaultCacheBehavior
    static Restrictions = Restrictions
    static Origin = Origin
    static GeoRestriction = GeoRestriction
    static ViewerCertificate = ViewerCertificate
    static S3OriginConfig = S3OriginConfig
    static CustomErrorResponse = CustomErrorResponse
    static Logging = Logging
    static DistributionConfig = DistributionConfig
    static OriginCustomHeader = OriginCustomHeader

    constructor(properties: DistributionProperties) {
        super('AWS::CloudFront::Distribution', properties)
    }
}
