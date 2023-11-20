import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface RuleGroupsNamespaceProperties {
    Data: Value<string>;
    Tags?: List<ResourceTag>;
    Workspace: Value<string>;
    Name: Value<string>;
}
export default class RuleGroupsNamespace extends ResourceBase<RuleGroupsNamespaceProperties> {
    constructor(properties: RuleGroupsNamespaceProperties);
}
