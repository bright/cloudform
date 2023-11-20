import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ResourcePolicyProperties {
    PolicyName: Value<string>;
    PolicyDocument: Value<string>;
}
export default class ResourcePolicy extends ResourceBase<ResourcePolicyProperties> {
    constructor(properties: ResourcePolicyProperties);
}
