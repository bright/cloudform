import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CachePolicyConfig {
    Comment?: Value<string>;
    MinTTL: Value<number>;
    MaxTTL: Value<number>;
    ParametersInCacheKeyAndForwardedToOrigin: ParametersInCacheKeyAndForwardedToOrigin;
    DefaultTTL: Value<number>;
    Name: Value<string>;
    constructor(properties: CachePolicyConfig);
}
export declare class CookiesConfig {
    Cookies?: List<Value<string>>;
    CookieBehavior: Value<string>;
    constructor(properties: CookiesConfig);
}
export declare class HeadersConfig {
    Headers?: List<Value<string>>;
    HeaderBehavior: Value<string>;
    constructor(properties: HeadersConfig);
}
export declare class ParametersInCacheKeyAndForwardedToOrigin {
    EnableAcceptEncodingBrotli?: Value<boolean>;
    HeadersConfig: HeadersConfig;
    CookiesConfig: CookiesConfig;
    EnableAcceptEncodingGzip: Value<boolean>;
    QueryStringsConfig: QueryStringsConfig;
    constructor(properties: ParametersInCacheKeyAndForwardedToOrigin);
}
export declare class QueryStringsConfig {
    QueryStrings?: List<Value<string>>;
    QueryStringBehavior: Value<string>;
    constructor(properties: QueryStringsConfig);
}
export interface CachePolicyProperties {
    CachePolicyConfig: CachePolicyConfig;
}
export default class CachePolicy extends ResourceBase<CachePolicyProperties> {
    static CachePolicyConfig: typeof CachePolicyConfig;
    static CookiesConfig: typeof CookiesConfig;
    static HeadersConfig: typeof HeadersConfig;
    static ParametersInCacheKeyAndForwardedToOrigin: typeof ParametersInCacheKeyAndForwardedToOrigin;
    static QueryStringsConfig: typeof QueryStringsConfig;
    constructor(properties: CachePolicyProperties);
}
