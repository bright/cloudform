import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface GlobalNetworkProperties {
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class GlobalNetwork extends ResourceBase<GlobalNetworkProperties> {
    constructor(properties?: GlobalNetworkProperties);
}
