import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface PredicateProperties {
    Type: Value<string>;
    DataId: Value<string>;
    Negated: Value<boolean>;
}
export declare class Predicate extends ResourceBase {
    constructor(properties: PredicateProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface RuleProperties {
    MetricName: Value<string>;
    Predicates?: List<Predicate>;
    Name: Value<string>;
}
export default class Rule extends ResourceBase {
    constructor(properties: RuleProperties, dependsOn?: Value<string> | Value<string>[]);
}
