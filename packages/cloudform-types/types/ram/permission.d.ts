import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface PermissionProperties {
    ResourceType: Value<string>;
    PolicyTemplate: {
        [key: string]: any;
    };
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Permission extends ResourceBase<PermissionProperties> {
    constructor(properties: PermissionProperties);
}
