/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class WeightedTarget {
    VirtualNode!: Value<string>
    Weight!: Value<number>

    constructor(properties: WeightedTarget) {
        Object.assign(this, properties)
    }
}

export class TcpRoute {
    Action!: TcpRouteAction

    constructor(properties: TcpRoute) {
        Object.assign(this, properties)
    }
}

export class RouteSpec {
    HttpRoute?: HttpRoute
    TcpRoute?: TcpRoute

    constructor(properties: RouteSpec) {
        Object.assign(this, properties)
    }
}

export class HttpRouteMatch {
    Prefix!: Value<string>

    constructor(properties: HttpRouteMatch) {
        Object.assign(this, properties)
    }
}

export class HttpRouteAction {
    WeightedTargets!: List<WeightedTarget>

    constructor(properties: HttpRouteAction) {
        Object.assign(this, properties)
    }
}

export class HttpRoute {
    Action!: HttpRouteAction
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

export interface RouteProperties {
    MeshName: Value<string>
    VirtualRouterName: Value<string>
    RouteName: Value<string>
    Spec: RouteSpec
    Tags?: List<ResourceTag>
}

export default class Route extends ResourceBase<RouteProperties> {
    static WeightedTarget = WeightedTarget
    static TcpRoute = TcpRoute
    static RouteSpec = RouteSpec
    static HttpRouteMatch = HttpRouteMatch
    static HttpRouteAction = HttpRouteAction
    static HttpRoute = HttpRoute
    static TcpRouteAction = TcpRouteAction

    constructor(properties: RouteProperties) {
        super('AWS::AppMesh::Route', properties)
    }
}
