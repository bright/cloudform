import { ResourceBase, ResourceTag } from '../resource';
import { List } from '../dataTypes';
export interface ResourcePolicyProperties {
    Content: {
        [key: string]: any;
    };
    Tags?: List<ResourceTag>;
}
export default class ResourcePolicy extends ResourceBase<ResourcePolicyProperties> {
    constructor(properties: ResourcePolicyProperties);
}
