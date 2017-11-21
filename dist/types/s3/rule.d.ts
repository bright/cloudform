import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Status = "Enabled" | "Disabled";
export interface RuleProperties {
    Destination: Value<string>;
    Id?: Value<string>;
    Prefix: Value<string>;
    Status: Value<Status>;
}
export default class Rule extends ResourceBase {
    constructor(properties: RuleProperties, dependsOn?: Value<string>);
}
