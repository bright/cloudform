import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AttributeDetails {
    Expression: Value<string>;
    Attributes: List<AttributeItem>;
    constructor(properties: AttributeDetails);
}
export declare class AttributeItem {
    Name: Value<string>;
    constructor(properties: AttributeItem);
}
export declare class Conditions {
    Range?: Range;
    ObjectCount?: Value<number>;
    Threshold?: Threshold;
    constructor(properties: Conditions);
}
export declare class Range {
    Value: Value<number>;
    Unit: Value<string>;
    constructor(properties: Range);
}
export declare class Threshold {
    Operator: Value<string>;
    Value: Value<string>;
    constructor(properties: Threshold);
}
export interface CalculatedAttributeDefinitionProperties {
    Description?: Value<string>;
    AttributeDetails: AttributeDetails;
    Statistic: Value<string>;
    DomainName: Value<string>;
    DisplayName?: Value<string>;
    CalculatedAttributeName: Value<string>;
    Conditions?: Conditions;
    Tags?: List<ResourceTag>;
}
export default class CalculatedAttributeDefinition extends ResourceBase<CalculatedAttributeDefinitionProperties> {
    static AttributeDetails: typeof AttributeDetails;
    static AttributeItem: typeof AttributeItem;
    static Conditions: typeof Conditions;
    static Range: typeof Range;
    static Threshold: typeof Threshold;
    constructor(properties: CalculatedAttributeDefinitionProperties);
}
