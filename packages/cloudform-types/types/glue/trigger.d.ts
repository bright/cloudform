import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Condition {
    State?: Value<string>;
    LogicalOperator?: Value<string>;
    JobName?: Value<string>;
    constructor(properties: Condition);
}
export declare class Predicate {
    Logical?: Value<string>;
    Conditions?: List<Condition>;
    constructor(properties: Predicate);
}
export declare class Action {
    JobName?: Value<string>;
    Arguments?: {
        [key: string]: any;
    };
    SecurityConfiguration?: Value<string>;
    constructor(properties: Action);
}
export interface TriggerProperties {
    Type: Value<string>;
    Description?: Value<string>;
    Actions: List<Action>;
    Schedule?: Value<string>;
    Tags?: {
        [key: string]: any;
    };
    Name?: Value<string>;
    Predicate?: Predicate;
}
export default class Trigger extends ResourceBase<TriggerProperties> {
    static Condition: typeof Condition;
    static Predicate: typeof Predicate;
    static Action: typeof Action;
    constructor(properties: TriggerProperties);
}
