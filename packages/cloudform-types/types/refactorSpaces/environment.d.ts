import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface EnvironmentProperties {
    Description?: Value<string>;
    NetworkFabricType: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Environment extends ResourceBase<EnvironmentProperties> {
    constructor(properties: EnvironmentProperties);
}
