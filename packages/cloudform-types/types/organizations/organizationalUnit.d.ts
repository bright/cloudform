import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface OrganizationalUnitProperties {
    ParentId: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class OrganizationalUnit extends ResourceBase<OrganizationalUnitProperties> {
    constructor(properties: OrganizationalUnitProperties);
}
