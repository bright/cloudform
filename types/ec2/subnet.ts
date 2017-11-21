import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'




export interface SubnetProperties {
    AvailabilityZone?: Value<string>
    CidrBlock: Value<string>
    MapPublicIpOnLaunch?: Value<boolean>
    VpcId: Value<string>
    Tags?: ResourceTag[]
}

export default class Subnet extends ResourceBase {
    constructor(properties: SubnetProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::Subnet', properties, dependsOn)
    }
}