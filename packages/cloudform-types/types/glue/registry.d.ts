import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface RegistryProperties {
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Registry extends ResourceBase<RegistryProperties> {
    constructor(properties: RegistryProperties);
}
