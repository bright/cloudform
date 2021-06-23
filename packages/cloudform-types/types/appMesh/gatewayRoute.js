"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class HttpQueryParameterMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpQueryParameterMatch = HttpQueryParameterMatch;
class HttpGatewayRoutePrefixRewrite {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpGatewayRoutePrefixRewrite = HttpGatewayRoutePrefixRewrite;
class HttpGatewayRouteHeaderMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpGatewayRouteHeaderMatch = HttpGatewayRouteHeaderMatch;
class GatewayRouteSpec {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GatewayRouteSpec = GatewayRouteSpec;
class HttpGatewayRouteHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpGatewayRouteHeader = HttpGatewayRouteHeader;
class GatewayRouteHostnameRewrite {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GatewayRouteHostnameRewrite = GatewayRouteHostnameRewrite;
class QueryParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.QueryParameter = QueryParameter;
class GatewayRouteMetadataMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GatewayRouteMetadataMatch = GatewayRouteMetadataMatch;
class GrpcGatewayRouteAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcGatewayRouteAction = GrpcGatewayRouteAction;
class GrpcGatewayRouteRewrite {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcGatewayRouteRewrite = GrpcGatewayRouteRewrite;
class GatewayRouteTarget {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GatewayRouteTarget = GatewayRouteTarget;
class GrpcGatewayRouteMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcGatewayRouteMatch = GrpcGatewayRouteMatch;
class HttpGatewayRoutePathRewrite {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpGatewayRoutePathRewrite = HttpGatewayRoutePathRewrite;
class GrpcGatewayRoute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcGatewayRoute = GrpcGatewayRoute;
class GatewayRouteRangeMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GatewayRouteRangeMatch = GatewayRouteRangeMatch;
class HttpGatewayRouteRewrite {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpGatewayRouteRewrite = HttpGatewayRouteRewrite;
class GrpcGatewayRouteMetadata {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcGatewayRouteMetadata = GrpcGatewayRouteMetadata;
class HttpGatewayRouteAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpGatewayRouteAction = HttpGatewayRouteAction;
class GatewayRouteHostnameMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GatewayRouteHostnameMatch = GatewayRouteHostnameMatch;
class GatewayRouteVirtualService {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GatewayRouteVirtualService = GatewayRouteVirtualService;
class HttpGatewayRouteMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpGatewayRouteMatch = HttpGatewayRouteMatch;
class HttpPathMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpPathMatch = HttpPathMatch;
class HttpGatewayRoute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpGatewayRoute = HttpGatewayRoute;
class GatewayRoute extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AppMesh::GatewayRoute', properties);
    }
}
exports.default = GatewayRoute;
GatewayRoute.HttpQueryParameterMatch = HttpQueryParameterMatch;
GatewayRoute.HttpGatewayRoutePrefixRewrite = HttpGatewayRoutePrefixRewrite;
GatewayRoute.HttpGatewayRouteHeaderMatch = HttpGatewayRouteHeaderMatch;
GatewayRoute.GatewayRouteSpec = GatewayRouteSpec;
GatewayRoute.HttpGatewayRouteHeader = HttpGatewayRouteHeader;
GatewayRoute.GatewayRouteHostnameRewrite = GatewayRouteHostnameRewrite;
GatewayRoute.QueryParameter = QueryParameter;
GatewayRoute.GatewayRouteMetadataMatch = GatewayRouteMetadataMatch;
GatewayRoute.GrpcGatewayRouteAction = GrpcGatewayRouteAction;
GatewayRoute.GrpcGatewayRouteRewrite = GrpcGatewayRouteRewrite;
GatewayRoute.GatewayRouteTarget = GatewayRouteTarget;
GatewayRoute.GrpcGatewayRouteMatch = GrpcGatewayRouteMatch;
GatewayRoute.HttpGatewayRoutePathRewrite = HttpGatewayRoutePathRewrite;
GatewayRoute.GrpcGatewayRoute = GrpcGatewayRoute;
GatewayRoute.GatewayRouteRangeMatch = GatewayRouteRangeMatch;
GatewayRoute.HttpGatewayRouteRewrite = HttpGatewayRouteRewrite;
GatewayRoute.GrpcGatewayRouteMetadata = GrpcGatewayRouteMetadata;
GatewayRoute.HttpGatewayRouteAction = HttpGatewayRouteAction;
GatewayRoute.GatewayRouteHostnameMatch = GatewayRouteHostnameMatch;
GatewayRoute.GatewayRouteVirtualService = GatewayRouteVirtualService;
GatewayRoute.HttpGatewayRouteMatch = HttpGatewayRouteMatch;
GatewayRoute.HttpPathMatch = HttpPathMatch;
GatewayRoute.HttpGatewayRoute = HttpGatewayRoute;
