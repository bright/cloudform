import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ResourceAssociationProperties {
    Application: Value<string>;
    Resource: Value<string>;
    ResourceType: Value<string>;
}
export default class ResourceAssociation extends ResourceBase<ResourceAssociationProperties> {
    constructor(properties: ResourceAssociationProperties);
}
