import { ResourceBase } from '../resource';
import { Value } from '../internal';
import Icmp from './icmp';
import PortRange from './portRange';
export declare type RuleAction = "allow" | "deny";
export interface NetworkAclEntryProperties {
    NetworkAclId: Value<string>;
    RuleNumber: Value<number>;
    Protocol: Value<number>;
    RuleAction: Value<RuleAction>;
    Egress: Value<boolean>;
    CidrBlock: Value<string>;
    Icmp?: Icmp;
    Ipv6CidrBlock?: Value<string>;
    PortRange?: PortRange;
}
export default class NetworkAclEntry extends ResourceBase {
    constructor(properties: NetworkAclEntryProperties, dependsOn?: Value<string>);
}
