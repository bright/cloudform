import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class HeadersConfig {
    HeaderBehavior: Value<string>;
    Headers?: List<Value<string>>;
    constructor(properties: HeadersConfig);
}
export declare class CachePolicyConfig {
    Comment?: Value<string>;
    DefaultTTL: Value<number>;
    MaxTTL: Value<number>;
    MinTTL: Value<number>;
    Name: Value<string>;
    ParametersInCacheKeyAndForwardedToOrigin: ParametersInCacheKeyAndForwardedToOrigin;
    constructor(properties: CachePolicyConfig);
}
export declare class ParametersInCacheKeyAndForwardedToOrigin {
    CookiesConfig: CookiesConfig;
    EnableAcceptEncodingBrotli?: Value<boolean>;
    EnableAcceptEncodingGzip: Value<boolean>;
    HeadersConfig: HeadersConfig;
    QueryStringsConfig: QueryStringsConfig;
    constructor(properties: ParametersInCacheKeyAndForwardedToOrigin);
}
export declare class QueryStringsConfig {
    QueryStringBehavior: Value<string>;
    QueryStrings?: List<Value<string>>;
    constructor(properties: QueryStringsConfig);
}
export declare class CookiesConfig {
    CookieBehavior: Value<string>;
    Cookies?: List<Value<string>>;
    constructor(properties: CookiesConfig);
}
export interface CachePolicyProperties {
    CachePolicyConfig: CachePolicyConfig;
}
export default class CachePolicy extends ResourceBase<CachePolicyProperties> {
    static HeadersConfig: typeof HeadersConfig;
    static CachePolicyConfig: typeof CachePolicyConfig;
    static ParametersInCacheKeyAndForwardedToOrigin: typeof ParametersInCacheKeyAndForwardedToOrigin;
    static QueryStringsConfig: typeof QueryStringsConfig;
    static CookiesConfig: typeof CookiesConfig;
    constructor(properties: CachePolicyProperties);
}
