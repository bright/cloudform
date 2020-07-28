import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ResourceProperties {
    ResourceArn: Value<string>;
    UseServiceLinkedRole: Value<boolean>;
    RoleArn?: Value<string>;
}
export default class Resource extends ResourceBase<ResourceProperties> {
    constructor(properties: ResourceProperties);
}
