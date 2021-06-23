import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface EntityTypeProperties {
    Name: Value<string>;
    Tags?: List<ResourceTag>;
    Description?: Value<string>;
}
export default class EntityType extends ResourceBase<EntityTypeProperties> {
    constructor(properties: EntityTypeProperties);
}
