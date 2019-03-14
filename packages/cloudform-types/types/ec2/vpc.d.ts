import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface VPCProperties {
    CidrBlock: Value<string>;
    EnableDnsHostnames?: Value<boolean>;
    EnableDnsSupport?: Value<boolean>;
    InstanceTenancy?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class VPC extends ResourceBase<VPCProperties> {
    constructor(properties: VPCProperties);
}
