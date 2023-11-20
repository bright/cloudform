import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CriterionAdditionalProperties {
    lt?: Value<number>;
    gte?: Value<number>;
    neq?: List<Value<string>>;
    lte?: Value<number>;
    eq?: List<Value<string>>;
    gt?: Value<number>;
    constructor(properties: CriterionAdditionalProperties);
}
export declare class FindingCriteria {
    Criterion?: {
        [key: string]: CriterionAdditionalProperties;
    };
    constructor(properties: FindingCriteria);
}
export interface FindingsFilterProperties {
    Action?: Value<string>;
    Description?: Value<string>;
    Position?: Value<number>;
    FindingCriteria: FindingCriteria;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class FindingsFilter extends ResourceBase<FindingsFilterProperties> {
    static CriterionAdditionalProperties: typeof CriterionAdditionalProperties;
    static FindingCriteria: typeof FindingCriteria;
    constructor(properties: FindingsFilterProperties);
}
