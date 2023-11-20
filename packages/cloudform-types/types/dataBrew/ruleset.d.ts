import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ColumnSelector {
    Regex?: Value<string>;
    Name?: Value<string>;
    constructor(properties: ColumnSelector);
}
export declare class Rule {
    ColumnSelectors?: List<ColumnSelector>;
    Disabled?: Value<boolean>;
    SubstitutionMap?: List<SubstitutionValue>;
    Name: Value<string>;
    CheckExpression: Value<string>;
    Threshold?: Threshold;
    constructor(properties: Rule);
}
export declare class SubstitutionValue {
    Value: Value<string>;
    ValueReference: Value<string>;
    constructor(properties: SubstitutionValue);
}
export declare class Threshold {
    Type?: Value<string>;
    Value: Value<number>;
    Unit?: Value<string>;
    constructor(properties: Threshold);
}
export interface RulesetProperties {
    Description?: Value<string>;
    TargetArn: Value<string>;
    Rules: List<Rule>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Ruleset extends ResourceBase<RulesetProperties> {
    static ColumnSelector: typeof ColumnSelector;
    static Rule: typeof Rule;
    static SubstitutionValue: typeof SubstitutionValue;
    static Threshold: typeof Threshold;
    constructor(properties: RulesetProperties);
}
