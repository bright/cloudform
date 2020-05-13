/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class VirtualServiceSpec {
    Provider?: VirtualServiceProvider

    constructor(properties: VirtualServiceSpec) {
        Object.assign(this, properties)
    }
}

export class VirtualRouterServiceProvider {
    VirtualRouterName!: Value<string>

    constructor(properties: VirtualRouterServiceProvider) {
        Object.assign(this, properties)
    }
}

export class VirtualNodeServiceProvider {
    VirtualNodeName!: Value<string>

    constructor(properties: VirtualNodeServiceProvider) {
        Object.assign(this, properties)
    }
}

export class VirtualServiceProvider {
    VirtualNode?: VirtualNodeServiceProvider
    VirtualRouter?: VirtualRouterServiceProvider

    constructor(properties: VirtualServiceProvider) {
        Object.assign(this, properties)
    }
}

export interface VirtualServiceProperties {
    MeshName: Value<string>
    MeshOwner?: Value<string>
    VirtualServiceName: Value<string>
    Spec: VirtualServiceSpec
    Tags?: List<ResourceTag>
}

export default class VirtualService extends ResourceBase<VirtualServiceProperties> {
    static VirtualServiceSpec = VirtualServiceSpec
    static VirtualRouterServiceProvider = VirtualRouterServiceProvider
    static VirtualNodeServiceProvider = VirtualNodeServiceProvider
    static VirtualServiceProvider = VirtualServiceProvider

    constructor(properties: VirtualServiceProperties) {
        super('AWS::AppMesh::VirtualService', properties)
    }
}
