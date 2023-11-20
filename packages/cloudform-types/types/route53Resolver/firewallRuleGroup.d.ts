import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FirewallRule {
    Action: Value<string>;
    Priority: Value<number>;
    BlockOverrideDomain?: Value<string>;
    FirewallDomainListId: Value<string>;
    BlockResponse?: Value<string>;
    BlockOverrideTtl?: Value<number>;
    BlockOverrideDnsType?: Value<string>;
    constructor(properties: FirewallRule);
}
export interface FirewallRuleGroupProperties {
    FirewallRules?: List<FirewallRule>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class FirewallRuleGroup extends ResourceBase<FirewallRuleGroupProperties> {
    static FirewallRule: typeof FirewallRule;
    constructor(properties?: FirewallRuleGroupProperties);
}
