import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class Icmp {
    Type?: Value<number>;
    Code?: Value<number>;
    constructor(properties: Icmp);
}
export declare class PortRange {
    From?: Value<number>;
    To?: Value<number>;
    constructor(properties: PortRange);
}
export interface NetworkAclEntryProperties {
    PortRange?: PortRange;
    NetworkAclId: Value<string>;
    RuleAction: Value<string>;
    CidrBlock?: Value<string>;
    Egress?: Value<boolean>;
    RuleNumber: Value<number>;
    Ipv6CidrBlock?: Value<string>;
    Protocol: Value<number>;
    Icmp?: Icmp;
}
export default class NetworkAclEntry extends ResourceBase<NetworkAclEntryProperties> {
    static Icmp: typeof Icmp;
    static PortRange: typeof PortRange;
    constructor(properties: NetworkAclEntryProperties);
}
