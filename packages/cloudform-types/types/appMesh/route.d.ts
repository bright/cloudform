import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class WeightedTarget {
    VirtualNode: Value<string>;
    Weight: Value<number>;
    constructor(properties: WeightedTarget);
}
export declare class TcpRoute {
    Action: TcpRouteAction;
    constructor(properties: TcpRoute);
}
export declare class RouteSpec {
    HttpRoute?: HttpRoute;
    TcpRoute?: TcpRoute;
    constructor(properties: RouteSpec);
}
export declare class HttpRouteMatch {
    Prefix: Value<string>;
    constructor(properties: HttpRouteMatch);
}
export declare class HttpRouteAction {
    WeightedTargets: List<WeightedTarget>;
    constructor(properties: HttpRouteAction);
}
export declare class HttpRoute {
    Action: HttpRouteAction;
    Match: HttpRouteMatch;
    constructor(properties: HttpRoute);
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
    static WeightedTarget: typeof WeightedTarget;
    static TcpRoute: typeof TcpRoute;
    static RouteSpec: typeof RouteSpec;
    static HttpRouteMatch: typeof HttpRouteMatch;
    static HttpRouteAction: typeof HttpRouteAction;
    static HttpRoute: typeof HttpRoute;
    static TcpRouteAction: typeof TcpRouteAction;
    constructor(properties: RouteProperties);
}
