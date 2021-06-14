/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Cookies {
    Forward!: Value<string>

    constructor(properties: Cookies) {
        Object.assign(this, properties)
    }
}

export class DistributionConfig {
    Comment?: Value<string>
    DefaultRootObject?: Value<string>
    Enabled!: Value<boolean>
    HttpVersion?: Value<string>
    IPV6Enabled?: Value<boolean>
    PriceClass?: Value<string>
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
    Id!: Value<string>

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

    constructor(properties: CustomOriginConfig) {
        Object.assign(this, properties)
    }
}

export class OriginGroups {
    Quantity!: Value<number>

    constructor(properties: OriginGroups) {
        Object.assign(this, properties)
    }
}

export class OriginGroupMembers {
    Quantity!: Value<number>

    constructor(properties: OriginGroupMembers) {
        Object.assign(this, properties)
    }
}

export class GeoRestriction {
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
    CachePolicyId?: Value<string>
    Compress?: Value<boolean>
    DefaultTTL?: Value<number>
    FieldLevelEncryptionId?: Value<string>
    MaxTTL?: Value<number>
    MinTTL?: Value<number>
    OriginRequestPolicyId?: Value<string>
    PathPattern!: Value<string>
    RealtimeLogConfigArn?: Value<string>
    SmoothStreaming?: Value<boolean>
    TargetOriginId!: Value<string>
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

    constructor(properties: LegacyCustomOrigin) {
        Object.assign(this, properties)
    }
}

export class DefaultCacheBehavior {
    CachePolicyId?: Value<string>
    Compress?: Value<boolean>
    DefaultTTL?: Value<number>
    FieldLevelEncryptionId?: Value<string>
    MaxTTL?: Value<number>
    MinTTL?: Value<number>
    OriginRequestPolicyId?: Value<string>
    RealtimeLogConfigArn?: Value<string>
    SmoothStreaming?: Value<boolean>
    TargetOriginId!: Value<string>
    ViewerProtocolPolicy!: Value<string>

    constructor(properties: DefaultCacheBehavior) {
        Object.assign(this, properties)
    }
}

export class Restrictions {


    constructor(properties: Restrictions) {
        Object.assign(this, properties)
    }
}

export class Origin {
    ConnectionAttempts?: Value<number>
    ConnectionTimeout?: Value<number>
    DomainName!: Value<string>
    Id!: Value<string>
    OriginPath?: Value<string>

    constructor(properties: Origin) {
        Object.assign(this, properties)
    }
}

export class StatusCodes {
    Quantity!: Value<number>

    constructor(properties: StatusCodes) {
        Object.assign(this, properties)
    }
}

export class OriginGroupFailoverCriteria {


    constructor(properties: OriginGroupFailoverCriteria) {
        Object.assign(this, properties)
    }
}

export class ForwardedValues {
    QueryString!: Value<boolean>

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
