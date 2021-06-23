import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Cookies {
    Forward: Value<string>;
    WhitelistedNames?: List<Value<string>>;
    constructor(properties: Cookies);
}
export declare class DistributionConfig {
    Aliases?: List<Value<string>>;
    CNAMEs?: List<Value<string>>;
    CacheBehaviors?: List<CacheBehavior>;
    Comment?: Value<string>;
    CustomErrorResponses?: List<CustomErrorResponse>;
    CustomOrigin?: LegacyCustomOrigin;
    DefaultCacheBehavior?: DefaultCacheBehavior;
    DefaultRootObject?: Value<string>;
    Enabled: Value<boolean>;
    HttpVersion?: Value<string>;
    IPV6Enabled?: Value<boolean>;
    Logging?: Logging;
    OriginGroups?: OriginGroups;
    Origins?: List<Origin>;
    PriceClass?: Value<string>;
    Restrictions?: Restrictions;
    S3Origin?: LegacyS3Origin;
    ViewerCertificate?: ViewerCertificate;
    WebACLId?: Value<string>;
    constructor(properties: DistributionConfig);
}
export declare class LegacyS3Origin {
    DNSName: Value<string>;
    OriginAccessIdentity?: Value<string>;
    constructor(properties: LegacyS3Origin);
}
export declare class OriginCustomHeader {
    HeaderName: Value<string>;
    HeaderValue: Value<string>;
    constructor(properties: OriginCustomHeader);
}
export declare class OriginGroup {
    FailoverCriteria: OriginGroupFailoverCriteria;
    Id: Value<string>;
    Members: OriginGroupMembers;
    constructor(properties: OriginGroup);
}
export declare class CustomOriginConfig {
    HTTPPort?: Value<number>;
    HTTPSPort?: Value<number>;
    OriginKeepaliveTimeout?: Value<number>;
    OriginProtocolPolicy: Value<string>;
    OriginReadTimeout?: Value<number>;
    OriginSSLProtocols?: List<Value<string>>;
    constructor(properties: CustomOriginConfig);
}
export declare class OriginGroups {
    Items?: List<OriginGroup>;
    Quantity: Value<number>;
    constructor(properties: OriginGroups);
}
export declare class OriginGroupMembers {
    Items: List<OriginGroupMember>;
    Quantity: Value<number>;
    constructor(properties: OriginGroupMembers);
}
export declare class GeoRestriction {
    Locations?: List<Value<string>>;
    RestrictionType: Value<string>;
    constructor(properties: GeoRestriction);
}
export declare class ViewerCertificate {
    AcmCertificateArn?: Value<string>;
    CloudFrontDefaultCertificate?: Value<boolean>;
    IamCertificateId?: Value<string>;
    MinimumProtocolVersion?: Value<string>;
    SslSupportMethod?: Value<string>;
    constructor(properties: ViewerCertificate);
}
export declare class CustomErrorResponse {
    ErrorCachingMinTTL?: Value<number>;
    ErrorCode: Value<number>;
    ResponseCode?: Value<number>;
    ResponsePagePath?: Value<string>;
    constructor(properties: CustomErrorResponse);
}
export declare class LambdaFunctionAssociation {
    EventType?: Value<string>;
    IncludeBody?: Value<boolean>;
    LambdaFunctionARN?: Value<string>;
    constructor(properties: LambdaFunctionAssociation);
}
export declare class OriginGroupMember {
    OriginId: Value<string>;
    constructor(properties: OriginGroupMember);
}
export declare class CacheBehavior {
    AllowedMethods?: List<Value<string>>;
    CachePolicyId?: Value<string>;
    CachedMethods?: List<Value<string>>;
    Compress?: Value<boolean>;
    DefaultTTL?: Value<number>;
    FieldLevelEncryptionId?: Value<string>;
    ForwardedValues?: ForwardedValues;
    FunctionAssociations?: List<FunctionAssociation>;
    LambdaFunctionAssociations?: List<LambdaFunctionAssociation>;
    MaxTTL?: Value<number>;
    MinTTL?: Value<number>;
    OriginRequestPolicyId?: Value<string>;
    PathPattern: Value<string>;
    RealtimeLogConfigArn?: Value<string>;
    SmoothStreaming?: Value<boolean>;
    TargetOriginId: Value<string>;
    TrustedKeyGroups?: List<Value<string>>;
    TrustedSigners?: List<Value<string>>;
    ViewerProtocolPolicy: Value<string>;
    constructor(properties: CacheBehavior);
}
export declare class LegacyCustomOrigin {
    DNSName: Value<string>;
    HTTPPort?: Value<number>;
    HTTPSPort?: Value<number>;
    OriginProtocolPolicy: Value<string>;
    OriginSSLProtocols: List<Value<string>>;
    constructor(properties: LegacyCustomOrigin);
}
export declare class DefaultCacheBehavior {
    AllowedMethods?: List<Value<string>>;
    CachePolicyId?: Value<string>;
    CachedMethods?: List<Value<string>>;
    Compress?: Value<boolean>;
    DefaultTTL?: Value<number>;
    FieldLevelEncryptionId?: Value<string>;
    ForwardedValues?: ForwardedValues;
    FunctionAssociations?: List<FunctionAssociation>;
    LambdaFunctionAssociations?: List<LambdaFunctionAssociation>;
    MaxTTL?: Value<number>;
    MinTTL?: Value<number>;
    OriginRequestPolicyId?: Value<string>;
    RealtimeLogConfigArn?: Value<string>;
    SmoothStreaming?: Value<boolean>;
    TargetOriginId: Value<string>;
    TrustedKeyGroups?: List<Value<string>>;
    TrustedSigners?: List<Value<string>>;
    ViewerProtocolPolicy: Value<string>;
    constructor(properties: DefaultCacheBehavior);
}
export declare class Restrictions {
    GeoRestriction: GeoRestriction;
    constructor(properties: Restrictions);
}
export declare class Origin {
    ConnectionAttempts?: Value<number>;
    ConnectionTimeout?: Value<number>;
    CustomOriginConfig?: CustomOriginConfig;
    DomainName: Value<string>;
    Id: Value<string>;
    OriginCustomHeaders?: List<OriginCustomHeader>;
    OriginPath?: Value<string>;
    OriginShield?: OriginShield;
    S3OriginConfig?: S3OriginConfig;
    constructor(properties: Origin);
}
export declare class StatusCodes {
    Items: List<Value<number>>;
    Quantity: Value<number>;
    constructor(properties: StatusCodes);
}
export declare class OriginGroupFailoverCriteria {
    StatusCodes: StatusCodes;
    constructor(properties: OriginGroupFailoverCriteria);
}
export declare class ForwardedValues {
    Cookies?: Cookies;
    Headers?: List<Value<string>>;
    QueryString: Value<boolean>;
    QueryStringCacheKeys?: List<Value<string>>;
    constructor(properties: ForwardedValues);
}
export declare class OriginShield {
    Enabled?: Value<boolean>;
    OriginShieldRegion?: Value<string>;
    constructor(properties: OriginShield);
}
export declare class S3OriginConfig {
    OriginAccessIdentity?: Value<string>;
    constructor(properties: S3OriginConfig);
}
export declare class Logging {
    Bucket: Value<string>;
    IncludeCookies?: Value<boolean>;
    Prefix?: Value<string>;
    constructor(properties: Logging);
}
export declare class FunctionAssociation {
    EventType?: Value<string>;
    FunctionARN?: Value<string>;
    constructor(properties: FunctionAssociation);
}
export interface DistributionProperties {
    DistributionConfig: DistributionConfig;
    Tags?: List<ResourceTag>;
}
export default class Distribution extends ResourceBase<DistributionProperties> {
    static Cookies: typeof Cookies;
    static DistributionConfig: typeof DistributionConfig;
    static LegacyS3Origin: typeof LegacyS3Origin;
    static OriginCustomHeader: typeof OriginCustomHeader;
    static OriginGroup: typeof OriginGroup;
    static CustomOriginConfig: typeof CustomOriginConfig;
    static OriginGroups: typeof OriginGroups;
    static OriginGroupMembers: typeof OriginGroupMembers;
    static GeoRestriction: typeof GeoRestriction;
    static ViewerCertificate: typeof ViewerCertificate;
    static CustomErrorResponse: typeof CustomErrorResponse;
    static LambdaFunctionAssociation: typeof LambdaFunctionAssociation;
    static OriginGroupMember: typeof OriginGroupMember;
    static CacheBehavior: typeof CacheBehavior;
    static LegacyCustomOrigin: typeof LegacyCustomOrigin;
    static DefaultCacheBehavior: typeof DefaultCacheBehavior;
    static Restrictions: typeof Restrictions;
    static Origin: typeof Origin;
    static StatusCodes: typeof StatusCodes;
    static OriginGroupFailoverCriteria: typeof OriginGroupFailoverCriteria;
    static ForwardedValues: typeof ForwardedValues;
    static OriginShield: typeof OriginShield;
    static S3OriginConfig: typeof S3OriginConfig;
    static Logging: typeof Logging;
    static FunctionAssociation: typeof FunctionAssociation;
    constructor(properties: DistributionProperties);
}
