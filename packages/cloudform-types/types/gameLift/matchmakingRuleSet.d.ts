import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface MatchmakingRuleSetProperties {
    RuleSetBody: Value<string>;
    Name: Value<string>;
}
export default class MatchmakingRuleSet extends ResourceBase<MatchmakingRuleSetProperties> {
    constructor(properties: MatchmakingRuleSetProperties);
}
