import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
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
export declare class OriginRequestPolicyConfig {
    Comment?: Value<string>;
    HeadersConfig: HeadersConfig;
    CookiesConfig: CookiesConfig;
    QueryStringsConfig: QueryStringsConfig;
    Name: Value<string>;
    constructor(properties: OriginRequestPolicyConfig);
}
export declare class QueryStringsConfig {
    QueryStrings?: List<Value<string>>;
    QueryStringBehavior: Value<string>;
    constructor(properties: QueryStringsConfig);
}
export interface OriginRequestPolicyProperties {
    OriginRequestPolicyConfig: OriginRequestPolicyConfig;
}
export default class OriginRequestPolicy extends ResourceBase<OriginRequestPolicyProperties> {
    static CookiesConfig: typeof CookiesConfig;
    static HeadersConfig: typeof HeadersConfig;
    static OriginRequestPolicyConfig: typeof OriginRequestPolicyConfig;
    static QueryStringsConfig: typeof QueryStringsConfig;
    constructor(properties: OriginRequestPolicyProperties);
}
