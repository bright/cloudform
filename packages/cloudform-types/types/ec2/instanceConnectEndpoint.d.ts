import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface InstanceConnectEndpointProperties {
    PreserveClientIp?: Value<boolean>;
    SubnetId: Value<string>;
    ClientToken?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class InstanceConnectEndpoint extends ResourceBase<InstanceConnectEndpointProperties> {
    constructor(properties: InstanceConnectEndpointProperties);
}
