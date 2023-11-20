import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ServiceNetworkProperties {
    AuthType?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class ServiceNetwork extends ResourceBase<ServiceNetworkProperties> {
    constructor(properties?: ServiceNetworkProperties);
}
