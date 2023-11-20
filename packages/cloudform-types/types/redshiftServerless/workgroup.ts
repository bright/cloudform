/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ConfigParameter {
    ParameterValue?: Value<string>
    ParameterKey?: Value<string>

    constructor(properties: ConfigParameter) {
        Object.assign(this, properties)
    }
}

export class Endpoint {
    Address?: Value<string>
    VpcEndpoints?: List<VpcEndpoint>
    Port?: Value<number>

    constructor(properties: Endpoint) {
        Object.assign(this, properties)
    }
}

export class NetworkInterface {
    PrivateIpAddress?: Value<string>
    AvailabilityZone?: Value<string>
    SubnetId?: Value<string>
    NetworkInterfaceId?: Value<string>

    constructor(properties: NetworkInterface) {
        Object.assign(this, properties)
    }
}

export class VpcEndpoint {
    VpcId?: Value<string>
    NetworkInterfaces?: List<NetworkInterface>
    VpcEndpointId?: Value<string>

    constructor(properties: VpcEndpoint) {
        Object.assign(this, properties)
    }
}

export class WorkgroupInner {
    Status?: Value<string>
    CreationDate?: Value<string>
    WorkgroupName?: Value<string>
    WorkgroupArn?: Value<string>
    BaseCapacity?: Value<number>
    EnhancedVpcRouting?: Value<boolean>
    WorkgroupId?: Value<string>
    SecurityGroupIds?: List<Value<string>>
    SubnetIds?: List<Value<string>>
    NamespaceName?: Value<string>
    Endpoint?: Endpoint
    ConfigParameters?: List<ConfigParameter>
    PubliclyAccessible?: Value<boolean>

    constructor(properties: WorkgroupInner) {
        Object.assign(this, properties)
    }
}

export interface WorkgroupProperties {
    NamespaceName?: Value<string>
    ConfigParameters?: List<ConfigParameter>
    Port?: Value<number>
    WorkgroupName: Value<string>
    BaseCapacity?: Value<number>
    EnhancedVpcRouting?: Value<boolean>
    PubliclyAccessible?: Value<boolean>
    SecurityGroupIds?: List<Value<string>>
    SubnetIds?: List<Value<string>>
    Tags?: List<ResourceTag>
}

export default class Workgroup extends ResourceBase<WorkgroupProperties> {
    static ConfigParameter = ConfigParameter
    static Endpoint = Endpoint
    static NetworkInterface = NetworkInterface
    static VpcEndpoint = VpcEndpoint
    static Workgroup = WorkgroupInner

    constructor(properties: WorkgroupProperties) {
        super('AWS::RedshiftServerless::Workgroup', properties)
    }
}
