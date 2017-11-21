import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
import LoadBalancerAttributes from './loadBalancerAttributes';
export declare type Scheme = "*" | "internet-facing" | "internal";
export declare type IpAddressType = "*" | "ipv4" | "dualstack";
export interface LoadBalancerProperties {
    LoadBalancerAttributes?: LoadBalancerAttributes;
    Name?: Value<string>;
    Scheme?: Value<Scheme>;
    SecurityGroups?: Value<string>[];
    Subnets?: Value<string>[];
    IpAddressType?: Value<IpAddressType>;
    Tags?: ResourceTag[];
}
export default class LoadBalancer extends ResourceBase {
    constructor(properties: LoadBalancerProperties, dependsOn?: Value<string>);
}
