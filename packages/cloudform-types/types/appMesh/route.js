"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Duration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Duration = Duration;
class WeightedTarget {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WeightedTarget = WeightedTarget;
class TcpRoute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TcpRoute = TcpRoute;
class HttpRetryPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpRetryPolicy = HttpRetryPolicy;
class HeaderMatchMethod {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HeaderMatchMethod = HeaderMatchMethod;
class RouteSpec {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RouteSpec = RouteSpec;
class HttpRouteHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpRouteHeader = HttpRouteHeader;
class HttpRouteMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpRouteMatch = HttpRouteMatch;
class HttpRouteAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpRouteAction = HttpRouteAction;
class HttpRoute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpRoute = HttpRoute;
class MatchRange {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MatchRange = MatchRange;
class TcpRouteAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TcpRouteAction = TcpRouteAction;
class Route extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AppMesh::Route', properties);
    }
}
Route.Duration = Duration;
Route.WeightedTarget = WeightedTarget;
Route.TcpRoute = TcpRoute;
Route.HttpRetryPolicy = HttpRetryPolicy;
Route.HeaderMatchMethod = HeaderMatchMethod;
Route.RouteSpec = RouteSpec;
Route.HttpRouteHeader = HttpRouteHeader;
Route.HttpRouteMatch = HttpRouteMatch;
Route.HttpRouteAction = HttpRouteAction;
Route.HttpRoute = HttpRoute;
Route.MatchRange = MatchRange;
Route.TcpRouteAction = TcpRouteAction;
exports.default = Route;
