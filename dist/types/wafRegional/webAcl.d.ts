import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Rule {
    Action: Action;
    Priority: Value<number>;
    RuleId: Value<string>;
    constructor(properties: Rule);
}
export declare class Action {
    Type: Value<string>;
    constructor(properties: Action);
}
export interface WebACLProperties {
    MetricName: Value<string>;
    DefaultAction: Action;
    Rules?: List<Rule>;
    Name: Value<string>;
}
export default class WebACL extends ResourceBase {
    constructor(properties: WebACLProperties);
}
