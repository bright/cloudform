import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Cookies {
    WhitelistedNames?: List<Value<string>>;
    Forward: Value<string>;
    constructor(properties: Cookies);
}
export declare class LambdaFunctionAssociation {
    IncludeBody?: Value<boolean>;
    EventType?: Value<string>;
    LambdaFunctionARN?: Value<string>;
    constructor(properties: LambdaFunctionAssociation);
}
export declare class OriginGroupMember {
    OriginId: Value<string>;
    constructor(properties: OriginGroupMember);
}
export declare class CacheBehavior {
    Compress?: Value<boolean>;
    LambdaFunctionAssociations?: List<LambdaFunctionAssociation>;
    TargetOriginId: Value<string>;
    ViewerProtocolPolicy: Value<string>;
    TrustedSigners?: List<Value<string>>;
    DefaultTTL?: Value<number>;
    FieldLevelEncryptionId?: Value<string>;
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
export declare class DefaultCacheBehavior {
    Compress?: Value<boolean>;
    LambdaFunctionAssociations?: List<LambdaFunctionAssociation>;
    TargetOriginId: Value<string>;
    ViewerProtocolPolicy: Value<string>;
    TrustedSigners?: List<Value<string>>;
    DefaultTTL?: Value<number>;
    FieldLevelEncryptionId?: Value<string>;
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
export declare class Restrictions {
    GeoRestriction: GeoRestriction;
    constructor(properties: Restrictions);
}
export declare class Origin {
    ConnectionTimeout?: Value<number>;
    OriginCustomHeaders?: List<OriginCustomHeader>;
    ConnectionAttempts?: Value<number>;
    DomainName: Value<string>;
    S3OriginConfig?: S3OriginConfig;
    OriginPath?: Value<string>;
    Id: Value<string>;
    CustomOriginConfig?: CustomOriginConfig;
    constructor(properties: Origin);
}
export declare class DistributionConfig {
    Logging?: Logging;
    Comment?: Value<string>;
    DefaultRootObject?: Value<string>;
    Origins?: List<Origin>;
    ViewerCertificate?: ViewerCertificate;
    PriceClass?: Value<string>;
    DefaultCacheBehavior?: DefaultCacheBehavior;
    CustomErrorResponses?: List<CustomErrorResponse>;
    OriginGroups?: OriginGroups;
    Enabled: Value<boolean>;
    Aliases?: List<Value<string>>;
    IPV6Enabled?: Value<boolean>;
    WebACLId?: Value<string>;
    HttpVersion?: Value<string>;
    Restrictions?: Restrictions;
    CacheBehaviors?: List<CacheBehavior>;
    constructor(properties: DistributionConfig);
}
export declare class StatusCodes {
    Quantity: Value<number>;
    Items: List<Value<number>>;
    constructor(properties: StatusCodes);
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
export declare class CustomOriginConfig {
    OriginReadTimeout?: Value<number>;
    HTTPSPort?: Value<number>;
    OriginKeepaliveTimeout?: Value<number>;
    OriginSSLProtocols?: List<Value<string>>;
    HTTPPort?: Value<number>;
    OriginProtocolPolicy: Value<string>;
    constructor(properties: CustomOriginConfig);
}
export declare class OriginGroups {
    Quantity: Value<number>;
    Items?: List<OriginGroup>;
    constructor(properties: OriginGroups);
}
export declare class OriginGroupMembers {
    Quantity: Value<number>;
    Items: List<OriginGroupMember>;
    constructor(properties: OriginGroupMembers);
}
export declare class ForwardedValues {
    Cookies?: Cookies;
    Headers?: List<Value<string>>;
    QueryString: Value<boolean>;
    QueryStringCacheKeys?: List<Value<string>>;
    constructor(properties: ForwardedValues);
}
export declare class GeoRestriction {
    Locations?: List<Value<string>>;
    RestrictionType: Value<string>;
    constructor(properties: GeoRestriction);
}
export declare class ViewerCertificate {
    IamCertificateId?: Value<string>;
    SslSupportMethod?: Value<string>;
    MinimumProtocolVersion?: Value<string>;
    CloudFrontDefaultCertificate?: Value<boolean>;
    AcmCertificateArn?: Value<string>;
    constructor(properties: ViewerCertificate);
}
export declare class S3OriginConfig {
    OriginAccessIdentity?: Value<string>;
    constructor(properties: S3OriginConfig);
}
export declare class CustomErrorResponse {
    ResponseCode?: Value<number>;
    ErrorCachingMinTTL?: Value<number>;
    ErrorCode: Value<number>;
    ResponsePagePath?: Value<string>;
    constructor(properties: CustomErrorResponse);
}
export declare class Logging {
    IncludeCookies?: Value<boolean>;
    Bucket: Value<string>;
    Prefix?: Value<string>;
    constructor(properties: Logging);
}
export interface DistributionProperties {
    DistributionConfig: DistributionConfig;
    Tags?: List<ResourceTag>;
}
export default class Distribution extends ResourceBase<DistributionProperties> {
    static Cookies: typeof Cookies;
    static LambdaFunctionAssociation: typeof LambdaFunctionAssociation;
    static OriginGroupMember: typeof OriginGroupMember;
    static CacheBehavior: typeof CacheBehavior;
    static DefaultCacheBehavior: typeof DefaultCacheBehavior;
    static Restrictions: typeof Restrictions;
    static Origin: typeof Origin;
    static DistributionConfig: typeof DistributionConfig;
    static StatusCodes: typeof StatusCodes;
    static OriginCustomHeader: typeof OriginCustomHeader;
    static OriginGroup: typeof OriginGroup;
    static OriginGroupFailoverCriteria: typeof OriginGroupFailoverCriteria;
    static CustomOriginConfig: typeof CustomOriginConfig;
    static OriginGroups: typeof OriginGroups;
    static OriginGroupMembers: typeof OriginGroupMembers;
    static ForwardedValues: typeof ForwardedValues;
    static GeoRestriction: typeof GeoRestriction;
    static ViewerCertificate: typeof ViewerCertificate;
    static S3OriginConfig: typeof S3OriginConfig;
    static CustomErrorResponse: typeof CustomErrorResponse;
    static Logging: typeof Logging;
    constructor(properties: DistributionProperties);
}
