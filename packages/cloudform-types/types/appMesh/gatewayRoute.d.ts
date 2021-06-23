import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class HttpQueryParameterMatch {
    Exact?: Value<string>;
    constructor(properties: HttpQueryParameterMatch);
}
export declare class HttpGatewayRoutePrefixRewrite {
    Value?: Value<string>;
    DefaultPrefix?: Value<string>;
    constructor(properties: HttpGatewayRoutePrefixRewrite);
}
export declare class HttpGatewayRouteHeaderMatch {
    Suffix?: Value<string>;
    Regex?: Value<string>;
    Exact?: Value<string>;
    Prefix?: Value<string>;
    Range?: GatewayRouteRangeMatch;
    constructor(properties: HttpGatewayRouteHeaderMatch);
}
export declare class GatewayRouteSpec {
    HttpRoute?: HttpGatewayRoute;
    Http2Route?: HttpGatewayRoute;
    GrpcRoute?: GrpcGatewayRoute;
    constructor(properties: GatewayRouteSpec);
}
export declare class HttpGatewayRouteHeader {
    Invert?: Value<boolean>;
    Name: Value<string>;
    Match?: HttpGatewayRouteHeaderMatch;
    constructor(properties: HttpGatewayRouteHeader);
}
export declare class GatewayRouteHostnameRewrite {
    DefaultTargetHostname?: Value<string>;
    constructor(properties: GatewayRouteHostnameRewrite);
}
export declare class QueryParameter {
    Name: Value<string>;
    Match?: HttpQueryParameterMatch;
    constructor(properties: QueryParameter);
}
export declare class GatewayRouteMetadataMatch {
    Suffix?: Value<string>;
    Regex?: Value<string>;
    Exact?: Value<string>;
    Prefix?: Value<string>;
    Range?: GatewayRouteRangeMatch;
    constructor(properties: GatewayRouteMetadataMatch);
}
export declare class GrpcGatewayRouteAction {
    Target: GatewayRouteTarget;
    Rewrite?: GrpcGatewayRouteRewrite;
    constructor(properties: GrpcGatewayRouteAction);
}
export declare class GrpcGatewayRouteRewrite {
    Hostname?: GatewayRouteHostnameRewrite;
    constructor(properties: GrpcGatewayRouteRewrite);
}
export declare class GatewayRouteTarget {
    VirtualService: GatewayRouteVirtualService;
    constructor(properties: GatewayRouteTarget);
}
export declare class GrpcGatewayRouteMatch {
    ServiceName?: Value<string>;
    Hostname?: GatewayRouteHostnameMatch;
    Metadata?: List<GrpcGatewayRouteMetadata>;
    constructor(properties: GrpcGatewayRouteMatch);
}
export declare class HttpGatewayRoutePathRewrite {
    Exact?: Value<string>;
    constructor(properties: HttpGatewayRoutePathRewrite);
}
export declare class GrpcGatewayRoute {
    Action: GrpcGatewayRouteAction;
    Match: GrpcGatewayRouteMatch;
    constructor(properties: GrpcGatewayRoute);
}
export declare class GatewayRouteRangeMatch {
    Start: Value<number>;
    End: Value<number>;
    constructor(properties: GatewayRouteRangeMatch);
}
export declare class HttpGatewayRouteRewrite {
    Path?: HttpGatewayRoutePathRewrite;
    Hostname?: GatewayRouteHostnameRewrite;
    Prefix?: HttpGatewayRoutePrefixRewrite;
    constructor(properties: HttpGatewayRouteRewrite);
}
export declare class GrpcGatewayRouteMetadata {
    Invert?: Value<boolean>;
    Name: Value<string>;
    Match?: GatewayRouteMetadataMatch;
    constructor(properties: GrpcGatewayRouteMetadata);
}
export declare class HttpGatewayRouteAction {
    Target: GatewayRouteTarget;
    Rewrite?: HttpGatewayRouteRewrite;
    constructor(properties: HttpGatewayRouteAction);
}
export declare class GatewayRouteHostnameMatch {
    Suffix?: Value<string>;
    Exact?: Value<string>;
    constructor(properties: GatewayRouteHostnameMatch);
}
export declare class GatewayRouteVirtualService {
    VirtualServiceName: Value<string>;
    constructor(properties: GatewayRouteVirtualService);
}
export declare class HttpGatewayRouteMatch {
    Path?: HttpPathMatch;
    Headers?: List<HttpGatewayRouteHeader>;
    Hostname?: GatewayRouteHostnameMatch;
    Prefix?: Value<string>;
    Method?: Value<string>;
    QueryParameters?: List<QueryParameter>;
    constructor(properties: HttpGatewayRouteMatch);
}
export declare class HttpPathMatch {
    Regex?: Value<string>;
    Exact?: Value<string>;
    constructor(properties: HttpPathMatch);
}
export declare class HttpGatewayRoute {
    Action: HttpGatewayRouteAction;
    Match: HttpGatewayRouteMatch;
    constructor(properties: HttpGatewayRoute);
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
    static HttpQueryParameterMatch: typeof HttpQueryParameterMatch;
    static HttpGatewayRoutePrefixRewrite: typeof HttpGatewayRoutePrefixRewrite;
    static HttpGatewayRouteHeaderMatch: typeof HttpGatewayRouteHeaderMatch;
    static GatewayRouteSpec: typeof GatewayRouteSpec;
    static HttpGatewayRouteHeader: typeof HttpGatewayRouteHeader;
    static GatewayRouteHostnameRewrite: typeof GatewayRouteHostnameRewrite;
    static QueryParameter: typeof QueryParameter;
    static GatewayRouteMetadataMatch: typeof GatewayRouteMetadataMatch;
    static GrpcGatewayRouteAction: typeof GrpcGatewayRouteAction;
    static GrpcGatewayRouteRewrite: typeof GrpcGatewayRouteRewrite;
    static GatewayRouteTarget: typeof GatewayRouteTarget;
    static GrpcGatewayRouteMatch: typeof GrpcGatewayRouteMatch;
    static HttpGatewayRoutePathRewrite: typeof HttpGatewayRoutePathRewrite;
    static GrpcGatewayRoute: typeof GrpcGatewayRoute;
    static GatewayRouteRangeMatch: typeof GatewayRouteRangeMatch;
    static HttpGatewayRouteRewrite: typeof HttpGatewayRouteRewrite;
    static GrpcGatewayRouteMetadata: typeof GrpcGatewayRouteMetadata;
    static HttpGatewayRouteAction: typeof HttpGatewayRouteAction;
    static GatewayRouteHostnameMatch: typeof GatewayRouteHostnameMatch;
    static GatewayRouteVirtualService: typeof GatewayRouteVirtualService;
    static HttpGatewayRouteMatch: typeof HttpGatewayRouteMatch;
    static HttpPathMatch: typeof HttpPathMatch;
    static HttpGatewayRoute: typeof HttpGatewayRoute;
    constructor(properties: GatewayRouteProperties);
}
