import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface FirewallRuleGroupAssociationProperties {
    FirewallRuleGroupId: Value<string>;
    VpcId: Value<string>;
    Name?: Value<string>;
    Priority: Value<number>;
    MutationProtection?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class FirewallRuleGroupAssociation extends ResourceBase<FirewallRuleGroupAssociationProperties> {
    constructor(properties: FirewallRuleGroupAssociationProperties);
}
