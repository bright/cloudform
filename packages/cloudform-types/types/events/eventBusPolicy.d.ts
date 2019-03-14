import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class Condition {
    Type?: Value<string>;
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: Condition);
}
export interface EventBusPolicyProperties {
    Condition?: Condition;
    Action: Value<string>;
    StatementId: Value<string>;
    Principal: Value<string>;
}
export default class EventBusPolicy extends ResourceBase<EventBusPolicyProperties> {
    static Condition: typeof Condition;
    constructor(properties: EventBusPolicyProperties);
}
