import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ResourceAssociationProperties {
    Resource: Value<string>;
    ResourceType: Value<string>;
    Application: Value<string>;
}
export default class ResourceAssociation extends ResourceBase<ResourceAssociationProperties> {
    constructor(properties: ResourceAssociationProperties);
}
