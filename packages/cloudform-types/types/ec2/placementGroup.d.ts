import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface PlacementGroupProperties {
    SpreadLevel?: Value<string>;
    Strategy?: Value<string>;
    PartitionCount?: Value<number>;
    Tags?: List<ResourceTag>;
}
export default class PlacementGroup extends ResourceBase<PlacementGroupProperties> {
    constructor(properties?: PlacementGroupProperties);
}
