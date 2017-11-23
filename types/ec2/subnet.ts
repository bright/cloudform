/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'



export interface SubnetProperties {
    AssignIpv6AddressOnCreation?: Value<boolean>
    AvailabilityZone?: Value<string>
    CidrBlock: Value<string>
    Ipv6CidrBlock?: Value<string>
    MapPublicIpOnLaunch?: Value<boolean>
    Tags?: ResourceTag[]
    VpcId: Value<string>
}

export default class Subnet extends ResourceBase {
    constructor(properties: SubnetProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::Subnet', properties, dependsOn)
    }
}