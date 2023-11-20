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
exports.QueryParameter = exports.HttpQueryParameterMatch = exports.HttpPathMatch = exports.HttpGatewayRouteRewrite = exports.HttpGatewayRoutePrefixRewrite = exports.HttpGatewayRoutePathRewrite = exports.HttpGatewayRouteMatch = exports.HttpGatewayRouteHeaderMatch = exports.HttpGatewayRouteHeader = exports.HttpGatewayRouteAction = exports.HttpGatewayRoute = exports.GrpcGatewayRouteRewrite = exports.GrpcGatewayRouteMetadata = exports.GrpcGatewayRouteMatch = exports.GrpcGatewayRouteAction = exports.GrpcGatewayRoute = exports.GatewayRouteVirtualService = exports.GatewayRouteTarget = exports.GatewayRouteSpec = exports.GatewayRouteRangeMatch = exports.GatewayRouteMetadataMatch = exports.GatewayRouteHostnameRewrite = exports.GatewayRouteHostnameMatch = void 0;
const resource_1 = require("../resource");
class GatewayRouteHostnameMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GatewayRouteHostnameMatch = GatewayRouteHostnameMatch;
class GatewayRouteHostnameRewrite {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GatewayRouteHostnameRewrite = GatewayRouteHostnameRewrite;
class GatewayRouteMetadataMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GatewayRouteMetadataMatch = GatewayRouteMetadataMatch;
class GatewayRouteRangeMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GatewayRouteRangeMatch = GatewayRouteRangeMatch;
class GatewayRouteSpec {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GatewayRouteSpec = GatewayRouteSpec;
class GatewayRouteTarget {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GatewayRouteTarget = GatewayRouteTarget;
class GatewayRouteVirtualService {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GatewayRouteVirtualService = GatewayRouteVirtualService;
class GrpcGatewayRoute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcGatewayRoute = GrpcGatewayRoute;
class GrpcGatewayRouteAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcGatewayRouteAction = GrpcGatewayRouteAction;
class GrpcGatewayRouteMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcGatewayRouteMatch = GrpcGatewayRouteMatch;
class GrpcGatewayRouteMetadata {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcGatewayRouteMetadata = GrpcGatewayRouteMetadata;
class GrpcGatewayRouteRewrite {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrpcGatewayRouteRewrite = GrpcGatewayRouteRewrite;
class HttpGatewayRoute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpGatewayRoute = HttpGatewayRoute;
class HttpGatewayRouteAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpGatewayRouteAction = HttpGatewayRouteAction;
class HttpGatewayRouteHeader {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpGatewayRouteHeader = HttpGatewayRouteHeader;
class HttpGatewayRouteHeaderMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpGatewayRouteHeaderMatch = HttpGatewayRouteHeaderMatch;
class HttpGatewayRouteMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpGatewayRouteMatch = HttpGatewayRouteMatch;
class HttpGatewayRoutePathRewrite {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpGatewayRoutePathRewrite = HttpGatewayRoutePathRewrite;
class HttpGatewayRoutePrefixRewrite {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpGatewayRoutePrefixRewrite = HttpGatewayRoutePrefixRewrite;
class HttpGatewayRouteRewrite {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HttpGatewayRouteRewrite = HttpGatewayRouteRewrite;
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
class QueryParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.QueryParameter = QueryParameter;
class GatewayRoute extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AppMesh::GatewayRoute', properties);
    }
}
exports.default = GatewayRoute;
GatewayRoute.GatewayRouteHostnameMatch = GatewayRouteHostnameMatch;
GatewayRoute.GatewayRouteHostnameRewrite = GatewayRouteHostnameRewrite;
GatewayRoute.GatewayRouteMetadataMatch = GatewayRouteMetadataMatch;
GatewayRoute.GatewayRouteRangeMatch = GatewayRouteRangeMatch;
GatewayRoute.GatewayRouteSpec = GatewayRouteSpec;
GatewayRoute.GatewayRouteTarget = GatewayRouteTarget;
GatewayRoute.GatewayRouteVirtualService = GatewayRouteVirtualService;
GatewayRoute.GrpcGatewayRoute = GrpcGatewayRoute;
GatewayRoute.GrpcGatewayRouteAction = GrpcGatewayRouteAction;
GatewayRoute.GrpcGatewayRouteMatch = GrpcGatewayRouteMatch;
GatewayRoute.GrpcGatewayRouteMetadata = GrpcGatewayRouteMetadata;
GatewayRoute.GrpcGatewayRouteRewrite = GrpcGatewayRouteRewrite;
GatewayRoute.HttpGatewayRoute = HttpGatewayRoute;
GatewayRoute.HttpGatewayRouteAction = HttpGatewayRouteAction;
GatewayRoute.HttpGatewayRouteHeader = HttpGatewayRouteHeader;
GatewayRoute.HttpGatewayRouteHeaderMatch = HttpGatewayRouteHeaderMatch;
GatewayRoute.HttpGatewayRouteMatch = HttpGatewayRouteMatch;
GatewayRoute.HttpGatewayRoutePathRewrite = HttpGatewayRoutePathRewrite;
GatewayRoute.HttpGatewayRoutePrefixRewrite = HttpGatewayRoutePrefixRewrite;
GatewayRoute.HttpGatewayRouteRewrite = HttpGatewayRouteRewrite;
GatewayRoute.HttpPathMatch = HttpPathMatch;
GatewayRoute.HttpQueryParameterMatch = HttpQueryParameterMatch;
GatewayRoute.QueryParameter = QueryParameter;
