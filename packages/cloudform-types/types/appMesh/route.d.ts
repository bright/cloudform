import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
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
    constructor(properties: TcpRoute);
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
    TcpRoute?: TcpRoute;
    constructor(properties: RouteSpec);
}
export declare class HttpRouteHeader {
    Invert?: Value<boolean>;
    Name: Value<string>;
    Match?: HeaderMatchMethod;
    constructor(properties: HttpRouteHeader);
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
export declare class HttpRoute {
    Action: HttpRouteAction;
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
    RouteName: Value<string>;
    Spec: RouteSpec;
    Tags?: List<ResourceTag>;
}
export default class Route extends ResourceBase<RouteProperties> {
    static Duration: typeof Duration;
    static WeightedTarget: typeof WeightedTarget;
    static TcpRoute: typeof TcpRoute;
    static HttpRetryPolicy: typeof HttpRetryPolicy;
    static HeaderMatchMethod: typeof HeaderMatchMethod;
    static RouteSpec: typeof RouteSpec;
    static HttpRouteHeader: typeof HttpRouteHeader;
    static HttpRouteMatch: typeof HttpRouteMatch;
    static HttpRouteAction: typeof HttpRouteAction;
    static HttpRoute: typeof HttpRoute;
    static MatchRange: typeof MatchRange;
    static TcpRouteAction: typeof TcpRouteAction;
    constructor(properties: RouteProperties);
}
