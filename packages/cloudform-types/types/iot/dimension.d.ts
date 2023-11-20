import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DimensionProperties {
    Type: Value<string>;
    StringValues: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class Dimension extends ResourceBase<DimensionProperties> {
    constructor(properties: DimensionProperties);
}
