import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Action {
    Type: Value<string>;
    constructor(properties: Action);
}
export declare class Rule {
    Action: Action;
    Priority: Value<number>;
    RuleId: Value<string>;
    constructor(properties: Rule);
}
export interface WebACLProperties {
    MetricName: Value<string>;
    DefaultAction: Action;
    Rules?: List<Rule>;
    Name: Value<string>;
}
export default class WebACL extends ResourceBase<WebACLProperties> {
    static Action: typeof Action;
    static Rule: typeof Rule;
    constructor(properties: WebACLProperties);
}
