import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccessControlAllowHeaders {
    Items: List<Value<string>>;
    constructor(properties: AccessControlAllowHeaders);
}
export declare class AccessControlAllowMethods {
    Items: List<Value<string>>;
    constructor(properties: AccessControlAllowMethods);
}
export declare class AccessControlAllowOrigins {
    Items: List<Value<string>>;
    constructor(properties: AccessControlAllowOrigins);
}
export declare class AccessControlExposeHeaders {
    Items: List<Value<string>>;
    constructor(properties: AccessControlExposeHeaders);
}
export declare class ContentSecurityPolicy {
    ContentSecurityPolicy: Value<string>;
    Override: Value<boolean>;
    constructor(properties: ContentSecurityPolicy);
}
export declare class ContentTypeOptions {
    Override: Value<boolean>;
    constructor(properties: ContentTypeOptions);
}
export declare class CorsConfig {
    AccessControlAllowCredentials: Value<boolean>;
    AccessControlAllowHeaders: AccessControlAllowHeaders;
    OriginOverride: Value<boolean>;
    AccessControlAllowMethods: AccessControlAllowMethods;
    AccessControlExposeHeaders?: AccessControlExposeHeaders;
    AccessControlAllowOrigins: AccessControlAllowOrigins;
    AccessControlMaxAgeSec?: Value<number>;
    constructor(properties: CorsConfig);
}
export declare class CustomHeader {
    Header: Value<string>;
    Value: Value<string>;
    Override: Value<boolean>;
    constructor(properties: CustomHeader);
}
export declare class CustomHeadersConfig {
    Items: List<CustomHeader>;
    constructor(properties: CustomHeadersConfig);
}
export declare class FrameOptions {
    FrameOption: Value<string>;
    Override: Value<boolean>;
    constructor(properties: FrameOptions);
}
export declare class ReferrerPolicy {
    Override: Value<boolean>;
    ReferrerPolicy: Value<string>;
    constructor(properties: ReferrerPolicy);
}
export declare class RemoveHeader {
    Header: Value<string>;
    constructor(properties: RemoveHeader);
}
export declare class RemoveHeadersConfig {
    Items: List<RemoveHeader>;
    constructor(properties: RemoveHeadersConfig);
}
export declare class ResponseHeadersPolicyConfig {
    Comment?: Value<string>;
    SecurityHeadersConfig?: SecurityHeadersConfig;
    RemoveHeadersConfig?: RemoveHeadersConfig;
    CorsConfig?: CorsConfig;
    ServerTimingHeadersConfig?: ServerTimingHeadersConfig;
    CustomHeadersConfig?: CustomHeadersConfig;
    Name: Value<string>;
    constructor(properties: ResponseHeadersPolicyConfig);
}
export declare class SecurityHeadersConfig {
    ContentSecurityPolicy?: ContentSecurityPolicy;
    FrameOptions?: FrameOptions;
    ContentTypeOptions?: ContentTypeOptions;
    StrictTransportSecurity?: StrictTransportSecurity;
    XSSProtection?: XSSProtection;
    ReferrerPolicy?: ReferrerPolicy;
    constructor(properties: SecurityHeadersConfig);
}
export declare class ServerTimingHeadersConfig {
    Enabled: Value<boolean>;
    SamplingRate?: Value<number>;
    constructor(properties: ServerTimingHeadersConfig);
}
export declare class StrictTransportSecurity {
    Preload?: Value<boolean>;
    AccessControlMaxAgeSec: Value<number>;
    IncludeSubdomains?: Value<boolean>;
    Override: Value<boolean>;
    constructor(properties: StrictTransportSecurity);
}
export declare class XSSProtection {
    ReportUri?: Value<string>;
    Override: Value<boolean>;
    Protection: Value<boolean>;
    ModeBlock?: Value<boolean>;
    constructor(properties: XSSProtection);
}
export interface ResponseHeadersPolicyProperties {
    ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig;
}
export default class ResponseHeadersPolicy extends ResourceBase<ResponseHeadersPolicyProperties> {
    static AccessControlAllowHeaders: typeof AccessControlAllowHeaders;
    static AccessControlAllowMethods: typeof AccessControlAllowMethods;
    static AccessControlAllowOrigins: typeof AccessControlAllowOrigins;
    static AccessControlExposeHeaders: typeof AccessControlExposeHeaders;
    static ContentSecurityPolicy: typeof ContentSecurityPolicy;
    static ContentTypeOptions: typeof ContentTypeOptions;
    static CorsConfig: typeof CorsConfig;
    static CustomHeader: typeof CustomHeader;
    static CustomHeadersConfig: typeof CustomHeadersConfig;
    static FrameOptions: typeof FrameOptions;
    static ReferrerPolicy: typeof ReferrerPolicy;
    static RemoveHeader: typeof RemoveHeader;
    static RemoveHeadersConfig: typeof RemoveHeadersConfig;
    static ResponseHeadersPolicyConfig: typeof ResponseHeadersPolicyConfig;
    static SecurityHeadersConfig: typeof SecurityHeadersConfig;
    static ServerTimingHeadersConfig: typeof ServerTimingHeadersConfig;
    static StrictTransportSecurity: typeof StrictTransportSecurity;
    static XSSProtection: typeof XSSProtection;
    constructor(properties: ResponseHeadersPolicyProperties);
}
