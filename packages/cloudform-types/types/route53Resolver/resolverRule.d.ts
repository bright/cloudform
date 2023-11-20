import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TargetAddress {
    Ipv6?: Value<string>;
    Ip?: Value<string>;
    Port?: Value<string>;
    constructor(properties: TargetAddress);
}
export interface ResolverRuleProperties {
    ResolverEndpointId?: Value<string>;
    DomainName: Value<string>;
    RuleType: Value<string>;
    Tags?: List<ResourceTag>;
    TargetIps?: List<TargetAddress>;
    Name?: Value<string>;
}
export default class ResolverRule extends ResourceBase<ResolverRuleProperties> {
    static TargetAddress: typeof TargetAddress;
    constructor(properties: ResolverRuleProperties);
}
