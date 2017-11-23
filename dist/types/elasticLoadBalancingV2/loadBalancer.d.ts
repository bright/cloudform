import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface LoadBalancerAttributeProperties {
    Key?: Value<string>;
    Value?: Value<string>;
}
export declare class LoadBalancerAttribute extends ResourceBase {
    constructor(properties: LoadBalancerAttributeProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SubnetMappingProperties {
    AllocationId: Value<string>;
    SubnetId: Value<string>;
}
export declare class SubnetMapping extends ResourceBase {
    constructor(properties: SubnetMappingProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface LoadBalancerProperties {
    IpAddressType?: Value<string>;
    LoadBalancerAttributes?: LoadBalancerAttribute[];
    Name?: Value<string>;
    Scheme?: Value<string>;
    SecurityGroups?: Value<string>[];
    SubnetMappings?: SubnetMapping[];
    Subnets?: Value<string>[];
    Tags?: ResourceTag[];
    Type?: Value<string>;
}
export default class LoadBalancer extends ResourceBase {
    constructor(properties: LoadBalancerProperties, dependsOn?: Value<string> | Value<string>[]);
}
