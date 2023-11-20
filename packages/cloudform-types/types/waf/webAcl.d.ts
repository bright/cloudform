import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ActivatedRule {
    Action?: WafAction;
    Priority: Value<number>;
    RuleId: Value<string>;
    constructor(properties: ActivatedRule);
}
export declare class WafAction {
    Type: Value<string>;
    constructor(properties: WafAction);
}
export interface WebACLProperties {
    DefaultAction: WafAction;
    MetricName: Value<string>;
    Name: Value<string>;
    Rules?: List<ActivatedRule>;
}
export default class WebACL extends ResourceBase<WebACLProperties> {
    static ActivatedRule: typeof ActivatedRule;
    static WafAction: typeof WafAction;
    constructor(properties: WebACLProperties);
}
