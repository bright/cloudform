import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface WafActionProperties {
    Type: Value<string>;
}
export declare class WafAction extends ResourceBase {
    constructor(properties: WafActionProperties, dependsOn?: Value<string>);
}
export interface ActivatedRuleProperties {
    Action: WafAction;
    Priority: Value<number>;
    RuleId: Value<string>;
}
export declare class ActivatedRule extends ResourceBase {
    constructor(properties: ActivatedRuleProperties, dependsOn?: Value<string>);
}
export interface WebACLProperties {
    DefaultAction: WafAction;
    MetricName: Value<string>;
    Name: Value<string>;
    Rules?: ActivatedRule[];
}
export default class WebACL extends ResourceBase {
    constructor(properties: WebACLProperties, dependsOn?: Value<string>);
}
