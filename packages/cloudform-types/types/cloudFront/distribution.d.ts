import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CacheBehavior {
    Compress?: Value<boolean>;
    FunctionAssociations?: List<FunctionAssociation>;
    LambdaFunctionAssociations?: List<LambdaFunctionAssociation>;
    TargetOriginId: Value<string>;
    ViewerProtocolPolicy: Value<string>;
    ResponseHeadersPolicyId?: Value<string>;
    RealtimeLogConfigArn?: Value<string>;
    TrustedSigners?: List<Value<string>>;
    DefaultTTL?: Value<number>;
    FieldLevelEncryptionId?: Value<string>;
    TrustedKeyGroups?: List<Value<string>>;
    AllowedMethods?: List<Value<string>>;
    PathPattern: Value<string>;
    CachedMethods?: List<Value<string>>;
    SmoothStreaming?: Value<boolean>;
    ForwardedValues?: ForwardedValues;
    OriginRequestPolicyId?: Value<string>;
    MinTTL?: Value<number>;
    CachePolicyId?: Value<string>;
    MaxTTL?: Value<number>;
    constructor(properties: CacheBehavior);
}
export declare class Cookies {
    WhitelistedNames?: List<Value<string>>;
    Forward: Value<string>;
    constructor(properties: Cookies);
}
export declare class CustomErrorResponse {
    ResponseCode?: Value<number>;
    ErrorCachingMinTTL?: Value<number>;
    ErrorCode: Value<number>;
    ResponsePagePath?: Value<string>;
    constructor(properties: CustomErrorResponse);
}
export declare class CustomOriginConfig {
    OriginReadTimeout?: Value<number>;
    HTTPSPort?: Value<number>;
    OriginKeepaliveTimeout?: Value<number>;
    OriginSSLProtocols?: List<Value<string>>;
    HTTPPort?: Value<number>;
    OriginProtocolPolicy: Value<string>;
    constructor(properties: CustomOriginConfig);
}
export declare class DefaultCacheBehavior {
    Compress?: Value<boolean>;
    FunctionAssociations?: List<FunctionAssociation>;
    LambdaFunctionAssociations?: List<LambdaFunctionAssociation>;
    TargetOriginId: Value<string>;
    ViewerProtocolPolicy: Value<string>;
    ResponseHeadersPolicyId?: Value<string>;
    RealtimeLogConfigArn?: Value<string>;
    TrustedSigners?: List<Value<string>>;
    DefaultTTL?: Value<number>;
    FieldLevelEncryptionId?: Value<string>;
    TrustedKeyGroups?: List<Value<string>>;
    AllowedMethods?: List<Value<string>>;
    CachedMethods?: List<Value<string>>;
    SmoothStreaming?: Value<boolean>;
    ForwardedValues?: ForwardedValues;
    OriginRequestPolicyId?: Value<string>;
    MinTTL?: Value<number>;
    CachePolicyId?: Value<string>;
    MaxTTL?: Value<number>;
    constructor(properties: DefaultCacheBehavior);
}
export declare class DistributionConfig {
    Logging?: Logging;
    Comment?: Value<string>;
    DefaultRootObject?: Value<string>;
    Origins?: List<Origin>;
    ViewerCertificate?: ViewerCertificate;
    PriceClass?: Value<string>;
    CustomOrigin?: LegacyCustomOrigin;
    S3Origin?: LegacyS3Origin;
    DefaultCacheBehavior: DefaultCacheBehavior;
    Staging?: Value<boolean>;
    CustomErrorResponses?: List<CustomErrorResponse>;
    ContinuousDeploymentPolicyId?: Value<string>;
    OriginGroups?: OriginGroups;
    Enabled: Value<boolean>;
    Aliases?: List<Value<string>>;
    IPV6Enabled?: Value<boolean>;
    CNAMEs?: List<Value<string>>;
    WebACLId?: Value<string>;
    HttpVersion?: Value<string>;
    Restrictions?: Restrictions;
    CacheBehaviors?: List<CacheBehavior>;
    constructor(properties: DistributionConfig);
}
export declare class ForwardedValues {
    Cookies?: Cookies;
    Headers?: List<Value<string>>;
    QueryString: Value<boolean>;
    QueryStringCacheKeys?: List<Value<string>>;
    constructor(properties: ForwardedValues);
}
export declare class FunctionAssociation {
    FunctionARN?: Value<string>;
    EventType?: Value<string>;
    constructor(properties: FunctionAssociation);
}
export declare class GeoRestriction {
    Locations?: List<Value<string>>;
    RestrictionType: Value<string>;
    constructor(properties: GeoRestriction);
}
export declare class LambdaFunctionAssociation {
    IncludeBody?: Value<boolean>;
    EventType?: Value<string>;
    LambdaFunctionARN?: Value<string>;
    constructor(properties: LambdaFunctionAssociation);
}
export declare class LegacyCustomOrigin {
    HTTPSPort?: Value<number>;
    OriginSSLProtocols: List<Value<string>>;
    DNSName: Value<string>;
    HTTPPort?: Value<number>;
    OriginProtocolPolicy: Value<string>;
    constructor(properties: LegacyCustomOrigin);
}
export declare class LegacyS3Origin {
    OriginAccessIdentity?: Value<string>;
    DNSName: Value<string>;
    constructor(properties: LegacyS3Origin);
}
export declare class Logging {
    IncludeCookies?: Value<boolean>;
    Bucket: Value<string>;
    Prefix?: Value<string>;
    constructor(properties: Logging);
}
export declare class Origin {
    ConnectionTimeout?: Value<number>;
    OriginAccessControlId?: Value<string>;
    ConnectionAttempts?: Value<number>;
    OriginCustomHeaders?: List<OriginCustomHeader>;
    DomainName: Value<string>;
    OriginShield?: OriginShield;
    S3OriginConfig?: S3OriginConfig;
    OriginPath?: Value<string>;
    Id: Value<string>;
    CustomOriginConfig?: CustomOriginConfig;
    constructor(properties: Origin);
}
export declare class OriginCustomHeader {
    HeaderValue: Value<string>;
    HeaderName: Value<string>;
    constructor(properties: OriginCustomHeader);
}
export declare class OriginGroup {
    Id: Value<string>;
    FailoverCriteria: OriginGroupFailoverCriteria;
    Members: OriginGroupMembers;
    constructor(properties: OriginGroup);
}
export declare class OriginGroupFailoverCriteria {
    StatusCodes: StatusCodes;
    constructor(properties: OriginGroupFailoverCriteria);
}
export declare class OriginGroupMember {
    OriginId: Value<string>;
    constructor(properties: OriginGroupMember);
}
export declare class OriginGroupMembers {
    Quantity: Value<number>;
    Items: List<OriginGroupMember>;
    constructor(properties: OriginGroupMembers);
}
export declare class OriginGroups {
    Quantity: Value<number>;
    Items?: List<OriginGroup>;
    constructor(properties: OriginGroups);
}
export declare class OriginShield {
    OriginShieldRegion?: Value<string>;
    Enabled?: Value<boolean>;
    constructor(properties: OriginShield);
}
export declare class Restrictions {
    GeoRestriction: GeoRestriction;
    constructor(properties: Restrictions);
}
export declare class S3OriginConfig {
    OriginAccessIdentity?: Value<string>;
    constructor(properties: S3OriginConfig);
}
export declare class StatusCodes {
    Quantity: Value<number>;
    Items: List<Value<number>>;
    constructor(properties: StatusCodes);
}
export declare class ViewerCertificate {
    IamCertificateId?: Value<string>;
    SslSupportMethod?: Value<string>;
    MinimumProtocolVersion?: Value<string>;
    CloudFrontDefaultCertificate?: Value<boolean>;
    AcmCertificateArn?: Value<string>;
    constructor(properties: ViewerCertificate);
}
export interface DistributionProperties {
    DistributionConfig: DistributionConfig;
    Tags?: List<ResourceTag>;
}
export default class Distribution extends ResourceBase<DistributionProperties> {
    static CacheBehavior: typeof CacheBehavior;
    static Cookies: typeof Cookies;
    static CustomErrorResponse: typeof CustomErrorResponse;
    static CustomOriginConfig: typeof CustomOriginConfig;
    static DefaultCacheBehavior: typeof DefaultCacheBehavior;
    static DistributionConfig: typeof DistributionConfig;
    static ForwardedValues: typeof ForwardedValues;
    static FunctionAssociation: typeof FunctionAssociation;
    static GeoRestriction: typeof GeoRestriction;
    static LambdaFunctionAssociation: typeof LambdaFunctionAssociation;
    static LegacyCustomOrigin: typeof LegacyCustomOrigin;
    static LegacyS3Origin: typeof LegacyS3Origin;
    static Logging: typeof Logging;
    static Origin: typeof Origin;
    static OriginCustomHeader: typeof OriginCustomHeader;
    static OriginGroup: typeof OriginGroup;
    static OriginGroupFailoverCriteria: typeof OriginGroupFailoverCriteria;
    static OriginGroupMember: typeof OriginGroupMember;
    static OriginGroupMembers: typeof OriginGroupMembers;
    static OriginGroups: typeof OriginGroups;
    static OriginShield: typeof OriginShield;
    static Restrictions: typeof Restrictions;
    static S3OriginConfig: typeof S3OriginConfig;
    static StatusCodes: typeof StatusCodes;
    static ViewerCertificate: typeof ViewerCertificate;
    constructor(properties: DistributionProperties);
}
