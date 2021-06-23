import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface RegistryProperties {
    Name: Value<string>;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Registry extends ResourceBase<RegistryProperties> {
    constructor(properties: RegistryProperties);
}
