import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface EntityTypeProperties {
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class EntityType extends ResourceBase<EntityTypeProperties> {
    constructor(properties: EntityTypeProperties);
}
