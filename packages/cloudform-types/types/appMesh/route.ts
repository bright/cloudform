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
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Duration {
    Value!: Value<number>
    Unit!: Value<string>

    constructor(properties: Duration) {
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

export class GrpcRoute {
    Action!: GrpcRouteAction
    Timeout?: GrpcTimeout
    RetryPolicy?: GrpcRetryPolicy
    Match!: GrpcRouteMatch

    constructor(properties: GrpcRoute) {
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
    Port?: Value<number>
    Metadata?: List<GrpcRouteMetadata>
    MethodName?: Value<string>

    constructor(properties: GrpcRouteMatch) {
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

export class GrpcTimeout {
    PerRequest?: Duration
    Idle?: Duration

    constructor(properties: GrpcTimeout) {
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

export class HttpPathMatch {
    Regex?: Value<string>
    Exact?: Value<string>

    constructor(properties: HttpPathMatch) {
        Object.assign(this, properties)
    }
}

export class HttpQueryParameterMatch {
    Exact?: Value<string>

    constructor(properties: HttpQueryParameterMatch) {
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

export class HttpRoute {
    Action!: HttpRouteAction
    Timeout?: HttpTimeout
    RetryPolicy?: HttpRetryPolicy
    Match!: HttpRouteMatch

    constructor(properties: HttpRoute) {
        Object.assign(this, properties)
    }
}

export class HttpRouteAction {
    WeightedTargets!: List<WeightedTarget>

    constructor(properties: HttpRouteAction) {
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

export class HttpRouteMatch {
    Path?: HttpPathMatch
    Scheme?: Value<string>
    Headers?: List<HttpRouteHeader>
    Port?: Value<number>
    Prefix?: Value<string>
    Method?: Value<string>
    QueryParameters?: List<QueryParameter>

    constructor(properties: HttpRouteMatch) {
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

export class MatchRange {
    Start!: Value<number>
    End!: Value<number>

    constructor(properties: MatchRange) {
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

export class TcpRoute {
    Action!: TcpRouteAction
    Timeout?: TcpTimeout
    Match?: TcpRouteMatch

    constructor(properties: TcpRoute) {
        Object.assign(this, properties)
    }
}

export class TcpRouteAction {
    WeightedTargets!: List<WeightedTarget>

    constructor(properties: TcpRouteAction) {
        Object.assign(this, properties)
    }
}

export class TcpRouteMatch {
    Port?: Value<number>

    constructor(properties: TcpRouteMatch) {
        Object.assign(this, properties)
    }
}

export class TcpTimeout {
    Idle?: Duration

    constructor(properties: TcpTimeout) {
        Object.assign(this, properties)
    }
}

export class WeightedTarget {
    VirtualNode!: Value<string>
    Port?: Value<number>
    Weight!: Value<number>

    constructor(properties: WeightedTarget) {
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
    static GrpcRetryPolicy = GrpcRetryPolicy
    static GrpcRoute = GrpcRoute
    static GrpcRouteAction = GrpcRouteAction
    static GrpcRouteMatch = GrpcRouteMatch
    static GrpcRouteMetadata = GrpcRouteMetadata
    static GrpcRouteMetadataMatchMethod = GrpcRouteMetadataMatchMethod
    static GrpcTimeout = GrpcTimeout
    static HeaderMatchMethod = HeaderMatchMethod
    static HttpPathMatch = HttpPathMatch
    static HttpQueryParameterMatch = HttpQueryParameterMatch
    static HttpRetryPolicy = HttpRetryPolicy
    static HttpRoute = HttpRoute
    static HttpRouteAction = HttpRouteAction
    static HttpRouteHeader = HttpRouteHeader
    static HttpRouteMatch = HttpRouteMatch
    static HttpTimeout = HttpTimeout
    static MatchRange = MatchRange
    static QueryParameter = QueryParameter
    static RouteSpec = RouteSpec
    static TcpRoute = TcpRoute
    static TcpRouteAction = TcpRouteAction
    static TcpRouteMatch = TcpRouteMatch
    static TcpTimeout = TcpTimeout
    static WeightedTarget = WeightedTarget

    constructor(properties: RouteProperties) {
        super('AWS::AppMesh::Route', properties)
    }
}
