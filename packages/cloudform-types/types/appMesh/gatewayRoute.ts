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
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class HttpQueryParameterMatch {
    Exact?: Value<string>

    constructor(properties: HttpQueryParameterMatch) {
        Object.assign(this, properties)
    }
}

export class HttpGatewayRoutePrefixRewrite {
    Value?: Value<string>
    DefaultPrefix?: Value<string>

    constructor(properties: HttpGatewayRoutePrefixRewrite) {
        Object.assign(this, properties)
    }
}

export class HttpGatewayRouteHeaderMatch {
    Suffix?: Value<string>
    Regex?: Value<string>
    Exact?: Value<string>
    Prefix?: Value<string>
    Range?: GatewayRouteRangeMatch

    constructor(properties: HttpGatewayRouteHeaderMatch) {
        Object.assign(this, properties)
    }
}

export class GatewayRouteSpec {
    HttpRoute?: HttpGatewayRoute
    Http2Route?: HttpGatewayRoute
    GrpcRoute?: GrpcGatewayRoute

    constructor(properties: GatewayRouteSpec) {
        Object.assign(this, properties)
    }
}

export class HttpGatewayRouteHeader {
    Invert?: Value<boolean>
    Name!: Value<string>
    Match?: HttpGatewayRouteHeaderMatch

    constructor(properties: HttpGatewayRouteHeader) {
        Object.assign(this, properties)
    }
}

export class GatewayRouteHostnameRewrite {
    DefaultTargetHostname?: Value<string>

    constructor(properties: GatewayRouteHostnameRewrite) {
        Object.assign(this, properties)
    }
}

export class QueryParameter {
    Name!: Value<string>
    Match?: HttpQueryParameterMatch

    constructor(properties: QueryParameter) {
        Object.assign(this, properties)
    }
}

export class GatewayRouteMetadataMatch {
    Suffix?: Value<string>
    Regex?: Value<string>
    Exact?: Value<string>
    Prefix?: Value<string>
    Range?: GatewayRouteRangeMatch

    constructor(properties: GatewayRouteMetadataMatch) {
        Object.assign(this, properties)
    }
}

export class GrpcGatewayRouteAction {
    Target!: GatewayRouteTarget
    Rewrite?: GrpcGatewayRouteRewrite

    constructor(properties: GrpcGatewayRouteAction) {
        Object.assign(this, properties)
    }
}

export class GrpcGatewayRouteRewrite {
    Hostname?: GatewayRouteHostnameRewrite

    constructor(properties: GrpcGatewayRouteRewrite) {
        Object.assign(this, properties)
    }
}

export class GatewayRouteTarget {
    VirtualService!: GatewayRouteVirtualService

    constructor(properties: GatewayRouteTarget) {
        Object.assign(this, properties)
    }
}

export class GrpcGatewayRouteMatch {
    ServiceName?: Value<string>
    Hostname?: GatewayRouteHostnameMatch
    Metadata?: List<GrpcGatewayRouteMetadata>

    constructor(properties: GrpcGatewayRouteMatch) {
        Object.assign(this, properties)
    }
}

export class HttpGatewayRoutePathRewrite {
    Exact?: Value<string>

    constructor(properties: HttpGatewayRoutePathRewrite) {
        Object.assign(this, properties)
    }
}

export class GrpcGatewayRoute {
    Action!: GrpcGatewayRouteAction
    Match!: GrpcGatewayRouteMatch

    constructor(properties: GrpcGatewayRoute) {
        Object.assign(this, properties)
    }
}

export class GatewayRouteRangeMatch {
    Start!: Value<number>
    End!: Value<number>

    constructor(properties: GatewayRouteRangeMatch) {
        Object.assign(this, properties)
    }
}

export class HttpGatewayRouteRewrite {
    Path?: HttpGatewayRoutePathRewrite
    Hostname?: GatewayRouteHostnameRewrite
    Prefix?: HttpGatewayRoutePrefixRewrite

    constructor(properties: HttpGatewayRouteRewrite) {
        Object.assign(this, properties)
    }
}

export class GrpcGatewayRouteMetadata {
    Invert?: Value<boolean>
    Name!: Value<string>
    Match?: GatewayRouteMetadataMatch

    constructor(properties: GrpcGatewayRouteMetadata) {
        Object.assign(this, properties)
    }
}

export class HttpGatewayRouteAction {
    Target!: GatewayRouteTarget
    Rewrite?: HttpGatewayRouteRewrite

    constructor(properties: HttpGatewayRouteAction) {
        Object.assign(this, properties)
    }
}

export class GatewayRouteHostnameMatch {
    Suffix?: Value<string>
    Exact?: Value<string>

    constructor(properties: GatewayRouteHostnameMatch) {
        Object.assign(this, properties)
    }
}

export class GatewayRouteVirtualService {
    VirtualServiceName!: Value<string>

    constructor(properties: GatewayRouteVirtualService) {
        Object.assign(this, properties)
    }
}

export class HttpGatewayRouteMatch {
    Path?: HttpPathMatch
    Headers?: List<HttpGatewayRouteHeader>
    Hostname?: GatewayRouteHostnameMatch
    Prefix?: Value<string>
    Method?: Value<string>
    QueryParameters?: List<QueryParameter>

    constructor(properties: HttpGatewayRouteMatch) {
        Object.assign(this, properties)
    }
}

export class HttpPathMatch {
    Regex?: Value<string>
    Exact?: Value<string>

    constructor(properties: HttpPathMatch) {
        Object.assign(this, properties)
    }
}

export class HttpGatewayRoute {
    Action!: HttpGatewayRouteAction
    Match!: HttpGatewayRouteMatch

    constructor(properties: HttpGatewayRoute) {
        Object.assign(this, properties)
    }
}

export interface GatewayRouteProperties {
    MeshName: Value<string>
    VirtualGatewayName: Value<string>
    MeshOwner?: Value<string>
    GatewayRouteName?: Value<string>
    Spec: GatewayRouteSpec
    Tags?: List<ResourceTag>
}

export default class GatewayRoute extends ResourceBase<GatewayRouteProperties> {
    static HttpQueryParameterMatch = HttpQueryParameterMatch
    static HttpGatewayRoutePrefixRewrite = HttpGatewayRoutePrefixRewrite
    static HttpGatewayRouteHeaderMatch = HttpGatewayRouteHeaderMatch
    static GatewayRouteSpec = GatewayRouteSpec
    static HttpGatewayRouteHeader = HttpGatewayRouteHeader
    static GatewayRouteHostnameRewrite = GatewayRouteHostnameRewrite
    static QueryParameter = QueryParameter
    static GatewayRouteMetadataMatch = GatewayRouteMetadataMatch
    static GrpcGatewayRouteAction = GrpcGatewayRouteAction
    static GrpcGatewayRouteRewrite = GrpcGatewayRouteRewrite
    static GatewayRouteTarget = GatewayRouteTarget
    static GrpcGatewayRouteMatch = GrpcGatewayRouteMatch
    static HttpGatewayRoutePathRewrite = HttpGatewayRoutePathRewrite
    static GrpcGatewayRoute = GrpcGatewayRoute
    static GatewayRouteRangeMatch = GatewayRouteRangeMatch
    static HttpGatewayRouteRewrite = HttpGatewayRouteRewrite
    static GrpcGatewayRouteMetadata = GrpcGatewayRouteMetadata
    static HttpGatewayRouteAction = HttpGatewayRouteAction
    static GatewayRouteHostnameMatch = GatewayRouteHostnameMatch
    static GatewayRouteVirtualService = GatewayRouteVirtualService
    static HttpGatewayRouteMatch = HttpGatewayRouteMatch
    static HttpPathMatch = HttpPathMatch
    static HttpGatewayRoute = HttpGatewayRoute

    constructor(properties: GatewayRouteProperties) {
        super('AWS::AppMesh::GatewayRoute', properties)
    }
}
