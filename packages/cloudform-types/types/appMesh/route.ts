/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
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
    Range?: MatchRange

    constructor(properties: GrpcRouteMetadataMatchMethod) {
        Object.assign(this, properties)
    }
}

export class HeaderMatchMethod {
    Suffix?: Value<string>
    Regex?: Value<string>
    Exact?: Value<string>
    Prefix?: Value<string>
    Range?: MatchRange

    constructor(properties: HeaderMatchMethod) {
        Object.assign(this, properties)
    }
}

export class RouteSpec {
    HttpRoute?: HttpRoute
    Priority?: Value<number>
    Http2Route?: HttpRoute
    GrpcRoute?: GrpcRoute
    TcpRoute?: TcpRoute

    constructor(properties: RouteSpec) {
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

export class GrpcRouteMetadata {
    Invert?: Value<boolean>
    Name!: Value<string>
    Match?: GrpcRouteMetadataMatchMethod

    constructor(properties: GrpcRouteMetadata) {
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

export class HttpRouteMatch {
    Path?: HttpPathMatch
    Scheme?: Value<string>
    Headers?: List<HttpRouteHeader>
    Prefix?: Value<string>
    Method?: Value<string>
    QueryParameters?: List<QueryParameter>

    constructor(properties: HttpRouteMatch) {
        Object.assign(this, properties)
    }
}

export class HttpQueryParameterMatch {
    Exact?: Value<string>

    constructor(properties: HttpQueryParameterMatch) {
        Object.assign(this, properties)
    }
}

export class GrpcRouteAction {
    WeightedTargets!: List<WeightedTarget>

    constructor(properties: GrpcRouteAction) {
        Object.assign(this, properties)
    }
}

export class GrpcRouteMatch {
    ServiceName?: Value<string>
    Metadata?: List<GrpcRouteMetadata>
    MethodName?: Value<string>

    constructor(properties: GrpcRouteMatch) {
        Object.assign(this, properties)
    }
}

export class HttpRoute {
    Action!: HttpRouteAction
    Timeout?: HttpTimeout
    RetryPolicy?: HttpRetryPolicy
    Match!: HttpRouteMatch

    constructor(properties: HttpRoute) {
        Object.assign(this, properties)
    }
}

export class TcpRouteAction {
    WeightedTargets!: List<WeightedTarget>

    constructor(properties: TcpRouteAction) {
        Object.assign(this, properties)
    }
}

export class GrpcRetryPolicy {
    MaxRetries!: Value<number>
    PerRetryTimeout!: Duration
    GrpcRetryEvents?: List<Value<string>>
    HttpRetryEvents?: List<Value<string>>
    TcpRetryEvents?: List<Value<string>>

    constructor(properties: GrpcRetryPolicy) {
        Object.assign(this, properties)
    }
}

export class TcpRoute {
    Action!: TcpRouteAction
    Timeout?: TcpTimeout

    constructor(properties: TcpRoute) {
        Object.assign(this, properties)
    }
}

export class HttpRetryPolicy {
    MaxRetries!: Value<number>
    PerRetryTimeout!: Duration
    HttpRetryEvents?: List<Value<string>>
    TcpRetryEvents?: List<Value<string>>

    constructor(properties: HttpRetryPolicy) {
        Object.assign(this, properties)
    }
}

export class GrpcTimeout {
    PerRequest?: Duration
    Idle?: Duration

    constructor(properties: GrpcTimeout) {
        Object.assign(this, properties)
    }
}

export class GrpcRoute {
    Action!: GrpcRouteAction
    Timeout?: GrpcTimeout
    RetryPolicy?: GrpcRetryPolicy
    Match!: GrpcRouteMatch

    constructor(properties: GrpcRoute) {
        Object.assign(this, properties)
    }
}

export class TcpTimeout {
    Idle?: Duration

    constructor(properties: TcpTimeout) {
        Object.assign(this, properties)
    }
}

export class HttpTimeout {
    PerRequest?: Duration
    Idle?: Duration

    constructor(properties: HttpTimeout) {
        Object.assign(this, properties)
    }
}

export class HttpRouteHeader {
    Invert?: Value<boolean>
    Name!: Value<string>
    Match?: HeaderMatchMethod

    constructor(properties: HttpRouteHeader) {
        Object.assign(this, properties)
    }
}

export class HttpRouteAction {
    WeightedTargets!: List<WeightedTarget>

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
    Spec: RouteSpec
    Tags?: List<ResourceTag>
}

export default class Route extends ResourceBase<RouteProperties> {
    static Duration = Duration
    static WeightedTarget = WeightedTarget
    static GrpcRouteMetadataMatchMethod = GrpcRouteMetadataMatchMethod
    static HeaderMatchMethod = HeaderMatchMethod
    static RouteSpec = RouteSpec
    static HttpPathMatch = HttpPathMatch
    static GrpcRouteMetadata = GrpcRouteMetadata
    static QueryParameter = QueryParameter
    static HttpRouteMatch = HttpRouteMatch
    static HttpQueryParameterMatch = HttpQueryParameterMatch
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
