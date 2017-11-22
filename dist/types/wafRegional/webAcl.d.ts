import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface RuleProperties {
    Action: Action;
    Priority: Value<number>;
    RuleId: Value<string>;
}
export declare class Rule extends ResourceBase {
    constructor(properties: RuleProperties, dependsOn?: Value<string>);
}
export interface ActionProperties {
    Type: Value<string>;
}
export declare class Action extends ResourceBase {
    constructor(properties: ActionProperties, dependsOn?: Value<string>);
}
export interface WebACLProperties {
    MetricName: Value<string>;
    DefaultAction: Action;
    Rules?: Rule[];
    Name: Value<string>;
}
export default class WebACL extends ResourceBase {
    constructor(properties: WebACLProperties, dependsOn?: Value<string>);
}
