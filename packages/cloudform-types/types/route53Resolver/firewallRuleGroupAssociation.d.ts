import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface FirewallRuleGroupAssociationProperties {
    VpcId: Value<string>;
    FirewallRuleGroupId: Value<string>;
    Priority: Value<number>;
    MutationProtection?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class FirewallRuleGroupAssociation extends ResourceBase<FirewallRuleGroupAssociationProperties> {
    constructor(properties: FirewallRuleGroupAssociationProperties);
}
