import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface PredicateProperties {
    DataId: Value<string>;
    Negated: Value<boolean>;
    Type: Value<string>;
}
export declare class Predicate extends ResourceBase {
    constructor(properties: PredicateProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface RuleProperties {
    MetricName: Value<string>;
    Name: Value<string>;
    Predicates?: Predicate[];
}
export default class Rule extends ResourceBase {
    constructor(properties: RuleProperties, dependsOn?: Value<string> | Value<string>[]);
}
