import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DimensionProperties {
    Name?: Value<string>;
    Type: Value<string>;
    StringValues: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class Dimension extends ResourceBase<DimensionProperties> {
    constructor(properties: DimensionProperties);
}
