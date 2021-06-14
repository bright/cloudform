/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class GatewayRouteSpec {


    constructor(properties: GatewayRouteSpec) {
        Object.assign(this, properties)
    }
}

export class GrpcGatewayRouteAction {


    constructor(properties: GrpcGatewayRouteAction) {
        Object.assign(this, properties)
    }
}

export class GatewayRouteTarget {


    constructor(properties: GatewayRouteTarget) {
        Object.assign(this, properties)
    }
}

export class GrpcGatewayRouteMatch {
    ServiceName?: Value<string>

    constructor(properties: GrpcGatewayRouteMatch) {
        Object.assign(this, properties)
    }
}

export class GrpcGatewayRoute {


    constructor(properties: GrpcGatewayRoute) {
        Object.assign(this, properties)
    }
}

export class HttpGatewayRouteAction {


    constructor(properties: HttpGatewayRouteAction) {
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
    Prefix!: Value<string>

    constructor(properties: HttpGatewayRouteMatch) {
        Object.assign(this, properties)
    }
}

export class HttpGatewayRoute {


    constructor(properties: HttpGatewayRoute) {
        Object.assign(this, properties)
    }
}

export interface GatewayRouteProperties {
    MeshName: Value<string>
    VirtualGatewayName: Value<string>
    MeshOwner?: Value<string>
    GatewayRouteName?: Value<string>
}

export default class GatewayRoute extends ResourceBase<GatewayRouteProperties> {
    static GatewayRouteSpec = GatewayRouteSpec
    static GrpcGatewayRouteAction = GrpcGatewayRouteAction
    static GatewayRouteTarget = GatewayRouteTarget
    static GrpcGatewayRouteMatch = GrpcGatewayRouteMatch
    static GrpcGatewayRoute = GrpcGatewayRoute
    static HttpGatewayRouteAction = HttpGatewayRouteAction
    static GatewayRouteVirtualService = GatewayRouteVirtualService
    static HttpGatewayRouteMatch = HttpGatewayRouteMatch
    static HttpGatewayRoute = HttpGatewayRoute

    constructor(properties: GatewayRouteProperties) {
        super('AWS::AppMesh::GatewayRoute', properties)
    }
}
