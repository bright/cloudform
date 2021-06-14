/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Duration {
    Value!: Value<number>
    Unit!: Value<string>

    constructor(properties: Duration) {
        Object.assign(this, properties)
    }
}

export class WeightedTarget {
    VirtualNode!: Value<string>
    Weight!: Value<number>

    constructor(properties: WeightedTarget) {
        Object.assign(this, properties)
    }
}

export class GrpcRouteMetadataMatchMethod {
    Suffix?: Value<string>
    Regex?: Value<string>
    Exact?: Value<string>
    Prefix?: Value<string>

    constructor(properties: GrpcRouteMetadataMatchMethod) {
        Object.assign(this, properties)
    }
}

export class HeaderMatchMethod {
    Suffix?: Value<string>
    Regex?: Value<string>
    Exact?: Value<string>
    Prefix?: Value<string>

    constructor(properties: HeaderMatchMethod) {
        Object.assign(this, properties)
    }
}

export class RouteSpec {
    Priority?: Value<number>

    constructor(properties: RouteSpec) {
        Object.assign(this, properties)
    }
}

export class GrpcRouteMetadata {
    Invert?: Value<boolean>
    Name!: Value<string>

    constructor(properties: GrpcRouteMetadata) {
        Object.assign(this, properties)
    }
}

export class HttpRouteMatch {
    Scheme?: Value<string>
    Prefix!: Value<string>
    Method?: Value<string>

    constructor(properties: HttpRouteMatch) {
        Object.assign(this, properties)
    }
}

export class GrpcRouteAction {


    constructor(properties: GrpcRouteAction) {
        Object.assign(this, properties)
    }
}

export class GrpcRouteMatch {
    ServiceName?: Value<string>
    MethodName?: Value<string>

    constructor(properties: GrpcRouteMatch) {
        Object.assign(this, properties)
    }
}

export class HttpRoute {


    constructor(properties: HttpRoute) {
        Object.assign(this, properties)
    }
}

export class TcpRouteAction {


    constructor(properties: TcpRouteAction) {
        Object.assign(this, properties)
    }
}

export class GrpcRetryPolicy {
    MaxRetries!: Value<number>

    constructor(properties: GrpcRetryPolicy) {
        Object.assign(this, properties)
    }
}

export class TcpRoute {


    constructor(properties: TcpRoute) {
        Object.assign(this, properties)
    }
}

export class HttpRetryPolicy {
    MaxRetries!: Value<number>

    constructor(properties: HttpRetryPolicy) {
        Object.assign(this, properties)
    }
}

export class GrpcTimeout {


    constructor(properties: GrpcTimeout) {
        Object.assign(this, properties)
    }
}

export class GrpcRoute {


    constructor(properties: GrpcRoute) {
        Object.assign(this, properties)
    }
}

export class TcpTimeout {


    constructor(properties: TcpTimeout) {
        Object.assign(this, properties)
    }
}

export class HttpTimeout {


    constructor(properties: HttpTimeout) {
        Object.assign(this, properties)
    }
}

export class HttpRouteHeader {
    Invert?: Value<boolean>
    Name!: Value<string>

    constructor(properties: HttpRouteHeader) {
        Object.assign(this, properties)
    }
}

export class HttpRouteAction {


    constructor(properties: HttpRouteAction) {
        Object.assign(this, properties)
    }
}

export class MatchRange {
    Start!: Value<number>
    End!: Value<number>

    constructor(properties: MatchRange) {
        Object.assign(this, properties)
    }
}

export interface RouteProperties {
    MeshName: Value<string>
    VirtualRouterName: Value<string>
    MeshOwner?: Value<string>
    RouteName?: Value<string>
}

export default class Route extends ResourceBase<RouteProperties> {
    static Duration = Duration
    static WeightedTarget = WeightedTarget
    static GrpcRouteMetadataMatchMethod = GrpcRouteMetadataMatchMethod
    static HeaderMatchMethod = HeaderMatchMethod
    static RouteSpec = RouteSpec
    static GrpcRouteMetadata = GrpcRouteMetadata
    static HttpRouteMatch = HttpRouteMatch
    static GrpcRouteAction = GrpcRouteAction
    static GrpcRouteMatch = GrpcRouteMatch
    static HttpRoute = HttpRoute
    static TcpRouteAction = TcpRouteAction
    static GrpcRetryPolicy = GrpcRetryPolicy
    static TcpRoute = TcpRoute
    static HttpRetryPolicy = HttpRetryPolicy
    static GrpcTimeout = GrpcTimeout
    static GrpcRoute = GrpcRoute
    static TcpTimeout = TcpTimeout
    static HttpTimeout = HttpTimeout
    static HttpRouteHeader = HttpRouteHeader
    static HttpRouteAction = HttpRouteAction
    static MatchRange = MatchRange

    constructor(properties: RouteProperties) {
        super('AWS::AppMesh::Route', properties)
    }
}
