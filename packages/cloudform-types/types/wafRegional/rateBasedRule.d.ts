import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Predicate {
    Type: Value<string>;
    DataId: Value<string>;
    Negated: Value<boolean>;
    constructor(properties: Predicate);
}
export interface RateBasedRuleProperties {
    MetricName: Value<string>;
    RateLimit: Value<number>;
    MatchPredicates?: List<Predicate>;
    RateKey: Value<string>;
    Name: Value<string>;
}
export default class RateBasedRule extends ResourceBase<RateBasedRuleProperties> {
    static Predicate: typeof Predicate;
    constructor(properties: RateBasedRuleProperties);
}
