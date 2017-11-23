import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface IcmpProperties {
    Code?: Value<number>;
    Type?: Value<number>;
}
export declare class Icmp extends ResourceBase {
    constructor(properties: IcmpProperties, dependsOn?: Value<string>);
}
export interface PortRangeProperties {
    From?: Value<number>;
    To?: Value<number>;
}
export declare class PortRange extends ResourceBase {
    constructor(properties: PortRangeProperties, dependsOn?: Value<string>);
}
export interface NetworkAclEntryProperties {
    CidrBlock: Value<string>;
    Egress?: Value<boolean>;
    Icmp?: Icmp;
    Ipv6CidrBlock?: Value<string>;
    NetworkAclId: Value<string>;
    PortRange?: PortRange;
    Protocol: Value<number>;
    RuleAction: Value<string>;
    RuleNumber: Value<number>;
}
export default class NetworkAclEntry extends ResourceBase {
    constructor(properties: NetworkAclEntryProperties, dependsOn?: Value<string>);
}
