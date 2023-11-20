import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EntityOverride {
    EntityId?: Value<string>;
    Variation?: Value<string>;
    constructor(properties: EntityOverride);
}
export declare class VariationObject {
    VariationName: Value<string>;
    DoubleValue?: Value<number>;
    BooleanValue?: Value<boolean>;
    LongValue?: Value<number>;
    StringValue?: Value<string>;
    constructor(properties: VariationObject);
}
export interface FeatureProperties {
    Project: Value<string>;
    Description?: Value<string>;
    EvaluationStrategy?: Value<string>;
    DefaultVariation?: Value<string>;
    EntityOverrides?: List<EntityOverride>;
    Variations: List<VariationObject>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Feature extends ResourceBase<FeatureProperties> {
    static EntityOverride: typeof EntityOverride;
    static VariationObject: typeof VariationObject;
    constructor(properties: FeatureProperties);
}
