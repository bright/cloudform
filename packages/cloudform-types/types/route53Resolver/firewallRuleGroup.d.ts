import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FirewallRule {
    FirewallDomainListId: Value<string>;
    Priority: Value<number>;
    Action: Value<string>;
    BlockResponse?: Value<string>;
    BlockOverrideDomain?: Value<string>;
    BlockOverrideDnsType?: Value<string>;
    BlockOverrideTtl?: Value<number>;
    constructor(properties: FirewallRule);
}
export interface FirewallRuleGroupProperties {
    Name?: Value<string>;
    FirewallRules?: List<FirewallRule>;
    Tags?: List<ResourceTag>;
}
export default class FirewallRuleGroup extends ResourceBase<FirewallRuleGroupProperties> {
    static FirewallRule: typeof FirewallRule;
    constructor(properties?: FirewallRuleGroupProperties);
}
