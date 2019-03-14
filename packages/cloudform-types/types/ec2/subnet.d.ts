import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface SubnetProperties {
    AssignIpv6AddressOnCreation?: Value<boolean>;
    AvailabilityZone?: Value<string>;
    CidrBlock: Value<string>;
    Ipv6CidrBlock?: Value<string>;
    MapPublicIpOnLaunch?: Value<boolean>;
    Tags?: List<ResourceTag>;
    VpcId: Value<string>;
}
export default class Subnet extends ResourceBase<SubnetProperties> {
    constructor(properties: SubnetProperties);
}
