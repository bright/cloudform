"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightedTarget = exports.TcpTimeout = exports.TcpRouteMatch = exports.TcpRouteAction = exports.TcpRoute = exports.RouteSpec = exports.QueryParameter = exports.MatchRange = exports.HttpTimeout = exports.HttpRouteMatch = exports.HttpRouteHeader = exports.HttpRouteAction = exports.HttpRoute = exports.HttpRetryPolicy = exports.HttpQueryParameterMatch = exports.HttpPathMatch = exports.HeaderMatchMethod = exports.GrpcTimeout = exports.GrpcRouteMetadataMatchMethod = exports.GrpcRouteMetadata = exports.GrpcRouteMatch = exports.GrpcRouteAction = exports.GrpcRoute = exports.GrpcRetryPolicy = exports.Duration = void 0;
const resource_1 = require("../resource");
class Duration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Duration = Duration;
class GrpcRetryPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcRetryPolicy = GrpcRetryPolicy;
class GrpcRoute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcRoute = GrpcRoute;
class GrpcRouteAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcRouteAction = GrpcRouteAction;
class GrpcRouteMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcRouteMatch = GrpcRouteMatch;
class GrpcRouteMetadata {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcRouteMetadata = GrpcRouteMetadata;
class GrpcRouteMetadataMatchMethod {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcRouteMetadataMatchMethod = GrpcRouteMetadataMatchMethod;
class GrpcTimeout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcTimeout = GrpcTimeout;
class HeaderMatchMethod {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HeaderMatchMethod = HeaderMatchMethod;
class HttpPathMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpPathMatch = HttpPathMatch;
class HttpQueryParameterMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpQueryParameterMatch = HttpQueryParameterMatch;
class HttpRetryPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpRetryPolicy = HttpRetryPolicy;
class HttpRoute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpRoute = HttpRoute;
class HttpRouteAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpRouteAction = HttpRouteAction;
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
class HttpTimeout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpTimeout = HttpTimeout;
class MatchRange {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MatchRange = MatchRange;
class QueryParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.QueryParameter = QueryParameter;
class RouteSpec {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RouteSpec = RouteSpec;
class TcpRoute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TcpRoute = TcpRoute;
class TcpRouteAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TcpRouteAction = TcpRouteAction;
class TcpRouteMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TcpRouteMatch = TcpRouteMatch;
class TcpTimeout {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TcpTimeout = TcpTimeout;
class WeightedTarget {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WeightedTarget = WeightedTarget;
class Route extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AppMesh::Route', properties);
    }
}
exports.default = Route;
Route.Duration = Duration;
Route.GrpcRetryPolicy = GrpcRetryPolicy;
Route.GrpcRoute = GrpcRoute;
Route.GrpcRouteAction = GrpcRouteAction;
Route.GrpcRouteMatch = GrpcRouteMatch;
Route.GrpcRouteMetadata = GrpcRouteMetadata;
Route.GrpcRouteMetadataMatchMethod = GrpcRouteMetadataMatchMethod;
Route.GrpcTimeout = GrpcTimeout;
Route.HeaderMatchMethod = HeaderMatchMethod;
Route.HttpPathMatch = HttpPathMatch;
Route.HttpQueryParameterMatch = HttpQueryParameterMatch;
Route.HttpRetryPolicy = HttpRetryPolicy;
Route.HttpRoute = HttpRoute;
Route.HttpRouteAction = HttpRouteAction;
Route.HttpRouteHeader = HttpRouteHeader;
Route.HttpRouteMatch = HttpRouteMatch;
Route.HttpTimeout = HttpTimeout;
Route.MatchRange = MatchRange;
Route.QueryParameter = QueryParameter;
Route.RouteSpec = RouteSpec;
Route.TcpRoute = TcpRoute;
Route.TcpRouteAction = TcpRouteAction;
Route.TcpRouteMatch = TcpRouteMatch;
Route.TcpTimeout = TcpTimeout;
Route.WeightedTarget = WeightedTarget;
