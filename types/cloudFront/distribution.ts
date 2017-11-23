/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'

export interface CookiesProperties {
    WhitelistedNames?: Value<string>[]
    Forward: Value<string>
}

export class Cookies extends ResourceBase {
    constructor(properties: CookiesProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::Cookies', properties, dependsOn)
    }
}

export interface LambdaFunctionAssociationProperties {
    EventType?: Value<string>
    LambdaFunctionARN?: Value<string>
}

export class LambdaFunctionAssociation extends ResourceBase {
    constructor(properties: LambdaFunctionAssociationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::LambdaFunctionAssociation', properties, dependsOn)
    }
}

export interface CustomOriginConfigProperties {
    OriginReadTimeout?: Value<number>
    HTTPSPort?: Value<number>
    OriginKeepaliveTimeout?: Value<number>
    OriginSSLProtocols?: Value<string>[]
    HTTPPort?: Value<number>
    OriginProtocolPolicy: Value<string>
}

export class CustomOriginConfig extends ResourceBase {
    constructor(properties: CustomOriginConfigProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::CustomOriginConfig', properties, dependsOn)
    }
}

export interface ForwardedValuesProperties {
    Cookies?: Cookies
    Headers?: Value<string>[]
    QueryString: Value<boolean>
    QueryStringCacheKeys?: Value<string>[]
}

export class ForwardedValues extends ResourceBase {
    constructor(properties: ForwardedValuesProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::ForwardedValues', properties, dependsOn)
    }
}

export interface CacheBehaviorProperties {
    Compress?: Value<boolean>
    LambdaFunctionAssociations?: LambdaFunctionAssociation[]
    TargetOriginId: Value<string>
    ViewerProtocolPolicy: Value<string>
    TrustedSigners?: Value<string>[]
    DefaultTTL?: Value<number>
    AllowedMethods?: Value<string>[]
    PathPattern: Value<string>
    CachedMethods?: Value<string>[]
    SmoothStreaming?: Value<boolean>
    ForwardedValues: ForwardedValues
    MinTTL?: Value<number>
    MaxTTL?: Value<number>
}

export class CacheBehavior extends ResourceBase {
    constructor(properties: CacheBehaviorProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::CacheBehavior', properties, dependsOn)
    }
}

export interface LegacyCustomOriginProperties {
    HTTPSPort?: Value<number>
    OriginSSLProtocols?: Value<string>[]
    DNSName: Value<string>
    HTTPPort?: Value<number>
    OriginProtocolPolicy: Value<string>
}

export class LegacyCustomOrigin extends ResourceBase {
    constructor(properties: LegacyCustomOriginProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::LegacyCustomOrigin', properties, dependsOn)
    }
}

export interface DefaultCacheBehaviorProperties {
    Compress?: Value<boolean>
    AllowedMethods?: Value<string>[]
    CachedMethods?: Value<string>[]
    LambdaFunctionAssociations?: LambdaFunctionAssociation[]
    SmoothStreaming?: Value<boolean>
    TargetOriginId: Value<string>
    ViewerProtocolPolicy: Value<string>
    ForwardedValues: ForwardedValues
    MinTTL?: Value<number>
    MaxTTL?: Value<number>
    TrustedSigners?: Value<string>[]
    DefaultTTL?: Value<number>
}

export class DefaultCacheBehavior extends ResourceBase {
    constructor(properties: DefaultCacheBehaviorProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::DefaultCacheBehavior', properties, dependsOn)
    }
}

export interface RestrictionsProperties {
    GeoRestriction: GeoRestriction
}

export class Restrictions extends ResourceBase {
    constructor(properties: RestrictionsProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::Restrictions', properties, dependsOn)
    }
}

export interface OriginProperties {
    OriginCustomHeaders?: OriginCustomHeader[]
    DomainName: Value<string>
    S3OriginConfig?: S3OriginConfig
    OriginPath?: Value<string>
    Id: Value<string>
    CustomOriginConfig?: CustomOriginConfig
}

export class Origin extends ResourceBase {
    constructor(properties: OriginProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::Origin', properties, dependsOn)
    }
}

export interface GeoRestrictionProperties {
    Locations?: Value<string>[]
    RestrictionType: Value<string>
}

export class GeoRestriction extends ResourceBase {
    constructor(properties: GeoRestrictionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::GeoRestriction', properties, dependsOn)
    }
}

export interface ViewerCertificateProperties {
    IamCertificateId?: Value<string>
    SslSupportMethod?: Value<string>
    MinimumProtocolVersion?: Value<string>
    CloudFrontDefaultCertificate?: Value<boolean>
    AcmCertificateArn?: Value<string>
}

export class ViewerCertificate extends ResourceBase {
    constructor(properties: ViewerCertificateProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::ViewerCertificate', properties, dependsOn)
    }
}

export interface S3OriginConfigProperties {
    OriginAccessIdentity?: Value<string>
}

export class S3OriginConfig extends ResourceBase {
    constructor(properties: S3OriginConfigProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::S3OriginConfig', properties, dependsOn)
    }
}

export interface CustomErrorResponseProperties {
    ResponseCode?: Value<number>
    ErrorCachingMinTTL?: Value<number>
    ErrorCode: Value<number>
    ResponsePagePath?: Value<string>
}

export class CustomErrorResponse extends ResourceBase {
    constructor(properties: CustomErrorResponseProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::CustomErrorResponse', properties, dependsOn)
    }
}

export interface LoggingProperties {
    IncludeCookies?: Value<boolean>
    Bucket: Value<string>
    Prefix?: Value<string>
}

export class Logging extends ResourceBase {
    constructor(properties: LoggingProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::Logging', properties, dependsOn)
    }
}

export interface DistributionConfigProperties {
    Logging?: Logging
    Comment?: Value<string>
    DefaultRootObject?: Value<string>
    Origins?: Origin[]
    ViewerCertificate?: ViewerCertificate
    PriceClass?: Value<string>
    S3Origin?: LegacyS3Origin
    CustomOrigin?: LegacyCustomOrigin
    DefaultCacheBehavior?: DefaultCacheBehavior
    CustomErrorResponses?: CustomErrorResponse[]
    Enabled: Value<boolean>
    Aliases?: Value<string>[]
    IPV6Enabled?: Value<boolean>
    WebACLId?: Value<string>
    CNAMEs?: Value<string>[]
    HttpVersion?: Value<string>
    Restrictions?: Restrictions
    CacheBehaviors?: CacheBehavior[]
}

export class DistributionConfig extends ResourceBase {
    constructor(properties: DistributionConfigProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::DistributionConfig', properties, dependsOn)
    }
}

export interface LegacyS3OriginProperties {
    OriginAccessIdentity?: Value<string>
    DNSName: Value<string>
}

export class LegacyS3Origin extends ResourceBase {
    constructor(properties: LegacyS3OriginProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::LegacyS3Origin', properties, dependsOn)
    }
}

export interface OriginCustomHeaderProperties {
    HeaderValue: Value<string>
    HeaderName: Value<string>
}

export class OriginCustomHeader extends ResourceBase {
    constructor(properties: OriginCustomHeaderProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::OriginCustomHeader', properties, dependsOn)
    }
}

export interface DistributionProperties {
    DistributionConfig: DistributionConfig
    Tags?: ResourceTag[]
}

export default class Distribution extends ResourceBase {
    constructor(properties: DistributionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CloudFront::Distribution', properties, dependsOn)
    }
}
