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

export class Cookies {
    Forward!: Value<string>
    WhitelistedNames?: List<Value<string>>

    constructor(properties: Cookies) {
        Object.assign(this, properties)
    }
}

export class DistributionConfig {
    Aliases?: List<Value<string>>
    CNAMEs?: List<Value<string>>
    CacheBehaviors?: List<CacheBehavior>
    Comment?: Value<string>
    CustomErrorResponses?: List<CustomErrorResponse>
    CustomOrigin?: LegacyCustomOrigin
    DefaultCacheBehavior?: DefaultCacheBehavior
    DefaultRootObject?: Value<string>
    Enabled!: Value<boolean>
    HttpVersion?: Value<string>
    IPV6Enabled?: Value<boolean>
    Logging?: Logging
    OriginGroups?: OriginGroups
    Origins?: List<Origin>
    PriceClass?: Value<string>
    Restrictions?: Restrictions
    S3Origin?: LegacyS3Origin
    ViewerCertificate?: ViewerCertificate
    WebACLId?: Value<string>

    constructor(properties: DistributionConfig) {
        Object.assign(this, properties)
    }
}

export class LegacyS3Origin {
    DNSName!: Value<string>
    OriginAccessIdentity?: Value<string>

    constructor(properties: LegacyS3Origin) {
        Object.assign(this, properties)
    }
}

export class OriginCustomHeader {
    HeaderName!: Value<string>
    HeaderValue!: Value<string>

    constructor(properties: OriginCustomHeader) {
        Object.assign(this, properties)
    }
}

export class OriginGroup {
    FailoverCriteria!: OriginGroupFailoverCriteria
    Id!: Value<string>
    Members!: OriginGroupMembers

    constructor(properties: OriginGroup) {
        Object.assign(this, properties)
    }
}

export class CustomOriginConfig {
    HTTPPort?: Value<number>
    HTTPSPort?: Value<number>
    OriginKeepaliveTimeout?: Value<number>
    OriginProtocolPolicy!: Value<string>
    OriginReadTimeout?: Value<number>
    OriginSSLProtocols?: List<Value<string>>

    constructor(properties: CustomOriginConfig) {
        Object.assign(this, properties)
    }
}

export class OriginGroups {
    Items?: List<OriginGroup>
    Quantity!: Value<number>

    constructor(properties: OriginGroups) {
        Object.assign(this, properties)
    }
}

export class OriginGroupMembers {
    Items!: List<OriginGroupMember>
    Quantity!: Value<number>

    constructor(properties: OriginGroupMembers) {
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
    AcmCertificateArn?: Value<string>
    CloudFrontDefaultCertificate?: Value<boolean>
    IamCertificateId?: Value<string>
    MinimumProtocolVersion?: Value<string>
    SslSupportMethod?: Value<string>

    constructor(properties: ViewerCertificate) {
        Object.assign(this, properties)
    }
}

export class CustomErrorResponse {
    ErrorCachingMinTTL?: Value<number>
    ErrorCode!: Value<number>
    ResponseCode?: Value<number>
    ResponsePagePath?: Value<string>

    constructor(properties: CustomErrorResponse) {
        Object.assign(this, properties)
    }
}

export class LambdaFunctionAssociation {
    EventType?: Value<string>
    IncludeBody?: Value<boolean>
    LambdaFunctionARN?: Value<string>

    constructor(properties: LambdaFunctionAssociation) {
        Object.assign(this, properties)
    }
}

export class OriginGroupMember {
    OriginId!: Value<string>

    constructor(properties: OriginGroupMember) {
        Object.assign(this, properties)
    }
}

export class CacheBehavior {
    AllowedMethods?: List<Value<string>>
    CachePolicyId?: Value<string>
    CachedMethods?: List<Value<string>>
    Compress?: Value<boolean>
    DefaultTTL?: Value<number>
    FieldLevelEncryptionId?: Value<string>
    ForwardedValues?: ForwardedValues
    FunctionAssociations?: List<FunctionAssociation>
    LambdaFunctionAssociations?: List<LambdaFunctionAssociation>
    MaxTTL?: Value<number>
    MinTTL?: Value<number>
    OriginRequestPolicyId?: Value<string>
    PathPattern!: Value<string>
    RealtimeLogConfigArn?: Value<string>
    SmoothStreaming?: Value<boolean>
    TargetOriginId!: Value<string>
    TrustedKeyGroups?: List<Value<string>>
    TrustedSigners?: List<Value<string>>
    ViewerProtocolPolicy!: Value<string>

    constructor(properties: CacheBehavior) {
        Object.assign(this, properties)
    }
}

export class LegacyCustomOrigin {
    DNSName!: Value<string>
    HTTPPort?: Value<number>
    HTTPSPort?: Value<number>
    OriginProtocolPolicy!: Value<string>
    OriginSSLProtocols!: List<Value<string>>

    constructor(properties: LegacyCustomOrigin) {
        Object.assign(this, properties)
    }
}

export class DefaultCacheBehavior {
    AllowedMethods?: List<Value<string>>
    CachePolicyId?: Value<string>
    CachedMethods?: List<Value<string>>
    Compress?: Value<boolean>
    DefaultTTL?: Value<number>
    FieldLevelEncryptionId?: Value<string>
    ForwardedValues?: ForwardedValues
    FunctionAssociations?: List<FunctionAssociation>
    LambdaFunctionAssociations?: List<LambdaFunctionAssociation>
    MaxTTL?: Value<number>
    MinTTL?: Value<number>
    OriginRequestPolicyId?: Value<string>
    RealtimeLogConfigArn?: Value<string>
    SmoothStreaming?: Value<boolean>
    TargetOriginId!: Value<string>
    TrustedKeyGroups?: List<Value<string>>
    TrustedSigners?: List<Value<string>>
    ViewerProtocolPolicy!: Value<string>

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
    ConnectionAttempts?: Value<number>
    ConnectionTimeout?: Value<number>
    CustomOriginConfig?: CustomOriginConfig
    DomainName!: Value<string>
    Id!: Value<string>
    OriginCustomHeaders?: List<OriginCustomHeader>
    OriginPath?: Value<string>
    OriginShield?: OriginShield
    S3OriginConfig?: S3OriginConfig

    constructor(properties: Origin) {
        Object.assign(this, properties)
    }
}

export class StatusCodes {
    Items!: List<Value<number>>
    Quantity!: Value<number>

    constructor(properties: StatusCodes) {
        Object.assign(this, properties)
    }
}

export class OriginGroupFailoverCriteria {
    StatusCodes!: StatusCodes

    constructor(properties: OriginGroupFailoverCriteria) {
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

export class OriginShield {
    Enabled?: Value<boolean>
    OriginShieldRegion?: Value<string>

    constructor(properties: OriginShield) {
        Object.assign(this, properties)
    }
}

export class S3OriginConfig {
    OriginAccessIdentity?: Value<string>

    constructor(properties: S3OriginConfig) {
        Object.assign(this, properties)
    }
}

export class Logging {
    Bucket!: Value<string>
    IncludeCookies?: Value<boolean>
    Prefix?: Value<string>

    constructor(properties: Logging) {
        Object.assign(this, properties)
    }
}

export class FunctionAssociation {
    EventType?: Value<string>
    FunctionARN?: Value<string>

    constructor(properties: FunctionAssociation) {
        Object.assign(this, properties)
    }
}

export interface DistributionProperties {
    DistributionConfig: DistributionConfig
    Tags?: List<ResourceTag>
}

export default class Distribution extends ResourceBase<DistributionProperties> {
    static Cookies = Cookies
    static DistributionConfig = DistributionConfig
    static LegacyS3Origin = LegacyS3Origin
    static OriginCustomHeader = OriginCustomHeader
    static OriginGroup = OriginGroup
    static CustomOriginConfig = CustomOriginConfig
    static OriginGroups = OriginGroups
    static OriginGroupMembers = OriginGroupMembers
    static GeoRestriction = GeoRestriction
    static ViewerCertificate = ViewerCertificate
    static CustomErrorResponse = CustomErrorResponse
    static LambdaFunctionAssociation = LambdaFunctionAssociation
    static OriginGroupMember = OriginGroupMember
    static CacheBehavior = CacheBehavior
    static LegacyCustomOrigin = LegacyCustomOrigin
    static DefaultCacheBehavior = DefaultCacheBehavior
    static Restrictions = Restrictions
    static Origin = Origin
    static StatusCodes = StatusCodes
    static OriginGroupFailoverCriteria = OriginGroupFailoverCriteria
    static ForwardedValues = ForwardedValues
    static OriginShield = OriginShield
    static S3OriginConfig = S3OriginConfig
    static Logging = Logging
    static FunctionAssociation = FunctionAssociation

    constructor(properties: DistributionProperties) {
        super('AWS::CloudFront::Distribution', properties)
    }
}
