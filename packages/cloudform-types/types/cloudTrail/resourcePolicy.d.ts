import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ResourcePolicyProperties {
    ResourceArn: Value<string>;
    ResourcePolicy: {
        [key: string]: any;
    };
}
export default class ResourcePolicy extends ResourceBase<ResourcePolicyProperties> {
    constructor(properties: ResourcePolicyProperties);
}
