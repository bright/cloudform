import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class OriginRequestPolicyConfig {
    Comment?: Value<string>;
    CookiesConfig: CookiesConfig;
    HeadersConfig: HeadersConfig;
    Name: Value<string>;
    QueryStringsConfig: QueryStringsConfig;
    constructor(properties: OriginRequestPolicyConfig);
}
export declare class CookiesConfig {
    CookieBehavior: Value<string>;
    Cookies?: List<Value<string>>;
    constructor(properties: CookiesConfig);
}
export declare class QueryStringsConfig {
    QueryStringBehavior: Value<string>;
    QueryStrings?: List<Value<string>>;
    constructor(properties: QueryStringsConfig);
}
export declare class HeadersConfig {
    HeaderBehavior: Value<string>;
    Headers?: List<Value<string>>;
    constructor(properties: HeadersConfig);
}
export interface OriginRequestPolicyProperties {
    OriginRequestPolicyConfig: OriginRequestPolicyConfig;
}
export default class OriginRequestPolicy extends ResourceBase<OriginRequestPolicyProperties> {
    static OriginRequestPolicyConfig: typeof OriginRequestPolicyConfig;
    static CookiesConfig: typeof CookiesConfig;
    static QueryStringsConfig: typeof QueryStringsConfig;
    static HeadersConfig: typeof HeadersConfig;
    constructor(properties: OriginRequestPolicyProperties);
}
