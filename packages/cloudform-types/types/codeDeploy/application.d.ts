import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ApplicationProperties {
    ApplicationName?: Value<string>;
    ComputePlatform?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Application extends ResourceBase<ApplicationProperties> {
    constructor(properties?: ApplicationProperties);
}
