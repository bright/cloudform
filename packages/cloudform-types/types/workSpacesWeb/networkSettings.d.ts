import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface NetworkSettingsProperties {
    VpcId: Value<string>;
    SecurityGroupIds: List<Value<string>>;
    SubnetIds: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class NetworkSettings extends ResourceBase<NetworkSettingsProperties> {
    constructor(properties: NetworkSettingsProperties);
}
