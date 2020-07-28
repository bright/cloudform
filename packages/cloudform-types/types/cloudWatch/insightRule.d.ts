import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare type Tags = List<ResourceTag>;
export interface InsightRuleProperties {
    RuleState: Value<string>;
    RuleBody: Value<string>;
    RuleName: Value<string>;
    Tags?: Tags;
}
export default class InsightRule extends ResourceBase<InsightRuleProperties> {
    constructor(properties: InsightRuleProperties);
}
