import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Condition {
    Equals?: List<Value<string>>;
    LessThan?: Value<number>;
    LessThanOrEqual?: Value<number>;
    GreaterThan?: Value<number>;
    Lt?: Value<number>;
    Gte?: Value<number>;
    GreaterThanOrEqual?: Value<number>;
    Neq?: List<Value<string>>;
    Eq?: List<Value<string>>;
    Lte?: Value<number>;
    Gt?: Value<number>;
    NotEquals?: List<Value<string>>;
    constructor(properties: Condition);
}
export declare class FindingCriteria {
    Criterion?: {
        [key: string]: any;
    };
    ItemType?: Condition;
    constructor(properties: FindingCriteria);
}
export interface FilterProperties {
    Action: Value<string>;
    Description: Value<string>;
    DetectorId: Value<string>;
    FindingCriteria: FindingCriteria;
    Rank: Value<number>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Filter extends ResourceBase<FilterProperties> {
    static Condition: typeof Condition;
    static FindingCriteria: typeof FindingCriteria;
    constructor(properties: FilterProperties);
}
