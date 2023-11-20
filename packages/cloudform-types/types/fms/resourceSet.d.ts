import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ResourceSetProperties {
    Description?: Value<string>;
    ResourceTypeList: List<Value<string>>;
    Resources?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class ResourceSet extends ResourceBase<ResourceSetProperties> {
    constructor(properties: ResourceSetProperties);
}
