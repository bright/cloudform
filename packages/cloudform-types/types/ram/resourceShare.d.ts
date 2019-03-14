import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ResourceShareProperties {
    Principals?: List<Value<string>>;
    AllowExternalPrincipals?: Value<boolean>;
    ResourceArns?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class ResourceShare extends ResourceBase<ResourceShareProperties> {
    constructor(properties: ResourceShareProperties);
}
