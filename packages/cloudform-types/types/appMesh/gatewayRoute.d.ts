import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class GatewayRouteHostnameMatch {
    Suffix?: Value<string>;
    Exact?: Value<string>;
    constructor(properties: GatewayRouteHostnameMatch);
}
export declare class GatewayRouteHostnameRewrite {
    DefaultTargetHostname?: Value<string>;
    constructor(properties: GatewayRouteHostnameRewrite);
}
export declare class GatewayRouteMetadataMatch {
    Suffix?: Value<string>;
    Regex?: Value<string>;
    Exact?: Value<string>;
    Prefix?: Value<string>;
    Range?: GatewayRouteRangeMatch;
    constructor(properties: GatewayRouteMetadataMatch);
}
export declare class GatewayRouteRangeMatch {
    Start: Value<number>;
    End: Value<number>;
    constructor(properties: GatewayRouteRangeMatch);
}
export declare class GatewayRouteSpec {
    HttpRoute?: HttpGatewayRoute;
    Priority?: Value<number>;
    Http2Route?: HttpGatewayRoute;
    GrpcRoute?: GrpcGatewayRoute;
    constructor(properties: GatewayRouteSpec);
}
export declare class GatewayRouteTarget {
    Port?: Value<number>;
    VirtualService: GatewayRouteVirtualService;
    constructor(properties: GatewayRouteTarget);
}
export declare class GatewayRouteVirtualService {
    VirtualServiceName: Value<string>;
    constructor(properties: GatewayRouteVirtualService);
}
export declare class GrpcGatewayRoute {
    Action: GrpcGatewayRouteAction;
    Match: GrpcGatewayRouteMatch;
    constructor(properties: GrpcGatewayRoute);
}
export declare class GrpcGatewayRouteAction {
    Target: GatewayRouteTarget;
    Rewrite?: GrpcGatewayRouteRewrite;
    constructor(properties: GrpcGatewayRouteAction);
}
export declare class GrpcGatewayRouteMatch {
    ServiceName?: Value<string>;
    Port?: Value<number>;
    Hostname?: GatewayRouteHostnameMatch;
    Metadata?: List<GrpcGatewayRouteMetadata>;
    constructor(properties: GrpcGatewayRouteMatch);
}
export declare class GrpcGatewayRouteMetadata {
    Invert?: Value<boolean>;
    Name: Value<string>;
    Match?: GatewayRouteMetadataMatch;
    constructor(properties: GrpcGatewayRouteMetadata);
}
export declare class GrpcGatewayRouteRewrite {
    Hostname?: GatewayRouteHostnameRewrite;
    constructor(properties: GrpcGatewayRouteRewrite);
}
export declare class HttpGatewayRoute {
    Action: HttpGatewayRouteAction;
    Match: HttpGatewayRouteMatch;
    constructor(properties: HttpGatewayRoute);
}
export declare class HttpGatewayRouteAction {
    Target: GatewayRouteTarget;
    Rewrite?: HttpGatewayRouteRewrite;
    constructor(properties: HttpGatewayRouteAction);
}
export declare class HttpGatewayRouteHeader {
    Invert?: Value<boolean>;
    Name: Value<string>;
    Match?: HttpGatewayRouteHeaderMatch;
    constructor(properties: HttpGatewayRouteHeader);
}
export declare class HttpGatewayRouteHeaderMatch {
    Suffix?: Value<string>;
    Regex?: Value<string>;
    Exact?: Value<string>;
    Prefix?: Value<string>;
    Range?: GatewayRouteRangeMatch;
    constructor(properties: HttpGatewayRouteHeaderMatch);
}
export declare class HttpGatewayRouteMatch {
    Path?: HttpPathMatch;
    Headers?: List<HttpGatewayRouteHeader>;
    Port?: Value<number>;
    Hostname?: GatewayRouteHostnameMatch;
    Prefix?: Value<string>;
    Method?: Value<string>;
    QueryParameters?: List<QueryParameter>;
    constructor(properties: HttpGatewayRouteMatch);
}
export declare class HttpGatewayRoutePathRewrite {
    Exact?: Value<string>;
    constructor(properties: HttpGatewayRoutePathRewrite);
}
export declare class HttpGatewayRoutePrefixRewrite {
    Value?: Value<string>;
    DefaultPrefix?: Value<string>;
    constructor(properties: HttpGatewayRoutePrefixRewrite);
}
export declare class HttpGatewayRouteRewrite {
    Path?: HttpGatewayRoutePathRewrite;
    Hostname?: GatewayRouteHostnameRewrite;
    Prefix?: HttpGatewayRoutePrefixRewrite;
    constructor(properties: HttpGatewayRouteRewrite);
}
export declare class HttpPathMatch {
    Regex?: Value<string>;
    Exact?: Value<string>;
    constructor(properties: HttpPathMatch);
}
export declare class HttpQueryParameterMatch {
    Exact?: Value<string>;
    constructor(properties: HttpQueryParameterMatch);
}
export declare class QueryParameter {
    Name: Value<string>;
    Match?: HttpQueryParameterMatch;
    constructor(properties: QueryParameter);
}
export interface GatewayRouteProperties {
    MeshName: Value<string>;
    VirtualGatewayName: Value<string>;
    MeshOwner?: Value<string>;
    GatewayRouteName?: Value<string>;
    Spec: GatewayRouteSpec;
    Tags?: List<ResourceTag>;
}
export default class GatewayRoute extends ResourceBase<GatewayRouteProperties> {
    static GatewayRouteHostnameMatch: typeof GatewayRouteHostnameMatch;
    static GatewayRouteHostnameRewrite: typeof GatewayRouteHostnameRewrite;
    static GatewayRouteMetadataMatch: typeof GatewayRouteMetadataMatch;
    static GatewayRouteRangeMatch: typeof GatewayRouteRangeMatch;
    static GatewayRouteSpec: typeof GatewayRouteSpec;
    static GatewayRouteTarget: typeof GatewayRouteTarget;
    static GatewayRouteVirtualService: typeof GatewayRouteVirtualService;
    static GrpcGatewayRoute: typeof GrpcGatewayRoute;
    static GrpcGatewayRouteAction: typeof GrpcGatewayRouteAction;
    static GrpcGatewayRouteMatch: typeof GrpcGatewayRouteMatch;
    static GrpcGatewayRouteMetadata: typeof GrpcGatewayRouteMetadata;
    static GrpcGatewayRouteRewrite: typeof GrpcGatewayRouteRewrite;
    static HttpGatewayRoute: typeof HttpGatewayRoute;
    static HttpGatewayRouteAction: typeof HttpGatewayRouteAction;
    static HttpGatewayRouteHeader: typeof HttpGatewayRouteHeader;
    static HttpGatewayRouteHeaderMatch: typeof HttpGatewayRouteHeaderMatch;
    static HttpGatewayRouteMatch: typeof HttpGatewayRouteMatch;
    static HttpGatewayRoutePathRewrite: typeof HttpGatewayRoutePathRewrite;
    static HttpGatewayRoutePrefixRewrite: typeof HttpGatewayRoutePrefixRewrite;
    static HttpGatewayRouteRewrite: typeof HttpGatewayRouteRewrite;
    static HttpPathMatch: typeof HttpPathMatch;
    static HttpQueryParameterMatch: typeof HttpQueryParameterMatch;
    static QueryParameter: typeof QueryParameter;
    constructor(properties: GatewayRouteProperties);
}
