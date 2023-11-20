import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LoadBalancerAttribute {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: LoadBalancerAttribute);
}
export declare class SubnetMapping {
    AllocationId?: Value<string>;
    IPv6Address?: Value<string>;
    SubnetId: Value<string>;
    PrivateIPv4Address?: Value<string>;
    constructor(properties: SubnetMapping);
}
export interface LoadBalancerProperties {
    IpAddressType?: Value<string>;
    SecurityGroups?: List<Value<string>>;
    LoadBalancerAttributes?: List<LoadBalancerAttribute>;
    Subnets?: List<Value<string>>;
    Type?: Value<string>;
    Scheme?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
    SubnetMappings?: List<SubnetMapping>;
}
export default class LoadBalancer extends ResourceBase<LoadBalancerProperties> {
    static LoadBalancerAttribute: typeof LoadBalancerAttribute;
    static SubnetMapping: typeof SubnetMapping;
    constructor(properties?: LoadBalancerProperties);
}
