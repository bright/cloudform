import { ResourceBase } from '../resource';
import { Value } from '../internal';
import Predicate from './predicate';
export interface RuleProperties {
    MetricName: Value<string>;
    Name: Value<string>;
    Predicates?: Predicate[];
}
export default class Rule extends ResourceBase {
    constructor(properties: RuleProperties, dependsOn?: Value<string>);
}
