import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AssertionRule {
    AssertedControls: List<Value<string>>;
    WaitPeriodMs: Value<number>;
    constructor(properties: AssertionRule);
}
export declare class GatingRule {
    TargetControls: List<Value<string>>;
    GatingControls: List<Value<string>>;
    WaitPeriodMs: Value<number>;
    constructor(properties: GatingRule);
}
export declare class RuleConfig {
    Type: Value<string>;
    Inverted: Value<boolean>;
    Threshold: Value<number>;
    constructor(properties: RuleConfig);
}
export interface SafetyRuleProperties {
    ControlPanelArn: Value<string>;
    AssertionRule?: AssertionRule;
    RuleConfig: RuleConfig;
    GatingRule?: GatingRule;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class SafetyRule extends ResourceBase<SafetyRuleProperties> {
    static AssertionRule: typeof AssertionRule;
    static GatingRule: typeof GatingRule;
    static RuleConfig: typeof RuleConfig;
    constructor(properties: SafetyRuleProperties);
}
