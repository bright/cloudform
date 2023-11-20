import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface LocationProperties {
    Tags?: List<ResourceTag>;
    LocationName: Value<string>;
}
export default class Location extends ResourceBase<LocationProperties> {
    constructor(properties: LocationProperties);
}
