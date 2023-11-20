import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ThingTypeProperties {
    ThingTypeDescription?: Value<string>;
    SearchableAttributes?: List<Value<string>>;
    constructor(properties: ThingTypeProperties);
}
export interface ThingTypeProperties {
    DeprecateThingType?: Value<boolean>;
    ThingTypeName?: Value<string>;
    ThingTypeProperties?: ThingTypeProperties;
    Tags?: List<ResourceTag>;
}
export default class ThingType extends ResourceBase<ThingTypeProperties> {
    static ThingTypeProperties: typeof ThingTypeProperties;
    constructor(properties?: ThingTypeProperties);
}
