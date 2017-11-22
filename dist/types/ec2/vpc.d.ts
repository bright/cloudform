import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface VPCProperties {
    CidrBlock: Value<string>;
    EnableDnsHostnames?: Value<boolean>;
    EnableDnsSupport?: Value<boolean>;
    InstanceTenancy?: Value<string>;
    Tags?: ResourceTag[];
}
export default class VPC extends ResourceBase {
    constructor(properties: VPCProperties, dependsOn?: Value<string>);
}
