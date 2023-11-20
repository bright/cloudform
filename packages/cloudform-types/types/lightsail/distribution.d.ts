import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CacheBehavior {
    Behavior?: Value<string>;
    constructor(properties: CacheBehavior);
}
export declare class CacheBehaviorPerPath {
    Path?: Value<string>;
    Behavior?: Value<string>;
    constructor(properties: CacheBehaviorPerPath);
}
export declare class CacheSettings {
    ForwardedCookies?: CookieObject;
    MinimumTTL?: Value<number>;
    CachedHTTPMethods?: Value<string>;
    AllowedHTTPMethods?: Value<string>;
    MaximumTTL?: Value<number>;
    ForwardedHeaders?: HeaderObject;
    DefaultTTL?: Value<number>;
    ForwardedQueryStrings?: QueryStringObject;
    constructor(properties: CacheSettings);
}
export declare class CookieObject {
    CookiesAllowList?: List<Value<string>>;
    Option?: Value<string>;
    constructor(properties: CookieObject);
}
export declare class HeaderObject {
    HeadersAllowList?: List<Value<string>>;
    Option?: Value<string>;
    constructor(properties: HeaderObject);
}
export declare class InputOrigin {
    RegionName?: Value<string>;
    ProtocolPolicy?: Value<string>;
    Name?: Value<string>;
    constructor(properties: InputOrigin);
}
export declare class QueryStringObject {
    Option?: Value<boolean>;
    QueryStringsAllowList?: List<Value<string>>;
    constructor(properties: QueryStringObject);
}
export interface DistributionProperties {
    IpAddressType?: Value<string>;
    Origin: InputOrigin;
    DistributionName: Value<string>;
    BundleId: Value<string>;
    DefaultCacheBehavior: CacheBehavior;
    IsEnabled?: Value<boolean>;
    CacheBehaviorSettings?: CacheSettings;
    CertificateName?: Value<string>;
    Tags?: List<ResourceTag>;
    CacheBehaviors?: List<CacheBehaviorPerPath>;
}
export default class Distribution extends ResourceBase<DistributionProperties> {
    static CacheBehavior: typeof CacheBehavior;
    static CacheBehaviorPerPath: typeof CacheBehaviorPerPath;
    static CacheSettings: typeof CacheSettings;
    static CookieObject: typeof CookieObject;
    static HeaderObject: typeof HeaderObject;
    static InputOrigin: typeof InputOrigin;
    static QueryStringObject: typeof QueryStringObject;
    constructor(properties: DistributionProperties);
}
