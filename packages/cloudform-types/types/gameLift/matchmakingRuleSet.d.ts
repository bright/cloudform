import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface MatchmakingRuleSetProperties {
    RuleSetBody: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class MatchmakingRuleSet extends ResourceBase<MatchmakingRuleSetProperties> {
    constructor(properties: MatchmakingRuleSetProperties);
}
