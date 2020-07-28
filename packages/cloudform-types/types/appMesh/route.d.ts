import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class GrpcRetryPolicy {
    MaxRetries: Value<number>;
    PerRetryTimeout: Duration;
    GrpcRetryEvents?: List<Value<string>>;
    HttpRetryEvents?: List<Value<string>>;
    TcpRetryEvents?: List<Value<string>>;
    constructor(properties: GrpcRetryPolicy);
}
export declare class Duration {
    Value: Value<number>;
    Unit: Value<string>;
    constructor(properties: Duration);
}
export declare class WeightedTarget {
    VirtualNode: Value<string>;
    Weight: Value<number>;
    constructor(properties: WeightedTarget);
}
export declare class TcpRoute {
    Action: TcpRouteAction;
    Timeout?: TcpTimeout;
    constructor(properties: TcpRoute);
}
export declare class GrpcRouteMetadataMatchMethod {
    Suffix?: Value<string>;
    Regex?: Value<string>;
    Exact?: Value<string>;
    Prefix?: Value<string>;
    Range?: MatchRange;
    constructor(properties: GrpcRouteMetadataMatchMethod);
}
export declare class HttpRetryPolicy {
    MaxRetries: Value<number>;
    PerRetryTimeout: Duration;
    HttpRetryEvents?: List<Value<string>>;
    TcpRetryEvents?: List<Value<string>>;
    constructor(properties: HttpRetryPolicy);
}
export declare class HeaderMatchMethod {
    Suffix?: Value<string>;
    Regex?: Value<string>;
    Exact?: Value<string>;
    Prefix?: Value<string>;
    Range?: MatchRange;
    constructor(properties: HeaderMatchMethod);
}
export declare class RouteSpec {
    HttpRoute?: HttpRoute;
    Priority?: Value<number>;
    Http2Route?: HttpRoute;
    GrpcRoute?: GrpcRoute;
    TcpRoute?: TcpRoute;
    constructor(properties: RouteSpec);
}
export declare class GrpcTimeout {
    PerRequest?: Duration;
    Idle?: Duration;
    constructor(properties: GrpcTimeout);
}
export declare class GrpcRoute {
    Action: GrpcRouteAction;
    Timeout?: GrpcTimeout;
    RetryPolicy?: GrpcRetryPolicy;
    Match: GrpcRouteMatch;
    constructor(properties: GrpcRoute);
}
export declare class TcpTimeout {
    Idle?: Duration;
    constructor(properties: TcpTimeout);
}
export declare class HttpTimeout {
    PerRequest?: Duration;
    Idle?: Duration;
    constructor(properties: HttpTimeout);
}
export declare class HttpRouteHeader {
    Invert?: Value<boolean>;
    Name: Value<string>;
    Match?: HeaderMatchMethod;
    constructor(properties: HttpRouteHeader);
}
export declare class GrpcRouteMetadata {
    Invert?: Value<boolean>;
    Name: Value<string>;
    Match?: GrpcRouteMetadataMatchMethod;
    constructor(properties: GrpcRouteMetadata);
}
export declare class HttpRouteMatch {
    Scheme?: Value<string>;
    Headers?: List<HttpRouteHeader>;
    Prefix: Value<string>;
    Method?: Value<string>;
    constructor(properties: HttpRouteMatch);
}
export declare class HttpRouteAction {
    WeightedTargets: List<WeightedTarget>;
    constructor(properties: HttpRouteAction);
}
export declare class GrpcRouteAction {
    WeightedTargets: List<WeightedTarget>;
    constructor(properties: GrpcRouteAction);
}
export declare class GrpcRouteMatch {
    ServiceName?: Value<string>;
    Metadata?: List<GrpcRouteMetadata>;
    MethodName?: Value<string>;
    constructor(properties: GrpcRouteMatch);
}
export declare class HttpRoute {
    Action: HttpRouteAction;
    Timeout?: HttpTimeout;
    RetryPolicy?: HttpRetryPolicy;
    Match: HttpRouteMatch;
    constructor(properties: HttpRoute);
}
export declare class MatchRange {
    Start: Value<number>;
    End: Value<number>;
    constructor(properties: MatchRange);
}
export declare class TcpRouteAction {
    WeightedTargets: List<WeightedTarget>;
    constructor(properties: TcpRouteAction);
}
export interface RouteProperties {
    MeshName: Value<string>;
    VirtualRouterName: Value<string>;
    MeshOwner?: Value<string>;
    RouteName: Value<string>;
    Spec: RouteSpec;
    Tags?: List<ResourceTag>;
}
export default class Route extends ResourceBase<RouteProperties> {
    static GrpcRetryPolicy: typeof GrpcRetryPolicy;
    static Duration: typeof Duration;
    static WeightedTarget: typeof WeightedTarget;
    static TcpRoute: typeof TcpRoute;
    static GrpcRouteMetadataMatchMethod: typeof GrpcRouteMetadataMatchMethod;
    static HttpRetryPolicy: typeof HttpRetryPolicy;
    static HeaderMatchMethod: typeof HeaderMatchMethod;
    static RouteSpec: typeof RouteSpec;
    static GrpcTimeout: typeof GrpcTimeout;
    static GrpcRoute: typeof GrpcRoute;
    static TcpTimeout: typeof TcpTimeout;
    static HttpTimeout: typeof HttpTimeout;
    static HttpRouteHeader: typeof HttpRouteHeader;
    static GrpcRouteMetadata: typeof GrpcRouteMetadata;
    static HttpRouteMatch: typeof HttpRouteMatch;
    static HttpRouteAction: typeof HttpRouteAction;
    static GrpcRouteAction: typeof GrpcRouteAction;
    static GrpcRouteMatch: typeof GrpcRouteMatch;
    static HttpRoute: typeof HttpRoute;
    static MatchRange: typeof MatchRange;
    static TcpRouteAction: typeof TcpRouteAction;
    constructor(properties: RouteProperties);
}
