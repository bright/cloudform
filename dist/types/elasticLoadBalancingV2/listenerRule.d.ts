import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ActionProperties {
    TargetGroupArn: Value<string>;
    Type: Value<string>;
}
export declare class Action extends ResourceBase {
    constructor(properties: ActionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface RuleConditionProperties {
    Field?: Value<string>;
    Values?: Value<string>[];
}
export declare class RuleCondition extends ResourceBase {
    constructor(properties: RuleConditionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ListenerRuleProperties {
    Actions: Action[];
    Conditions: RuleCondition[];
    ListenerArn: Value<string>;
    Priority: Value<number>;
}
export default class ListenerRule extends ResourceBase {
    constructor(properties: ListenerRuleProperties, dependsOn?: Value<string> | Value<string>[]);
}
