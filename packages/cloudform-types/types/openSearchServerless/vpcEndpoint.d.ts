import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface VpcEndpointProperties {
    VpcId: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds: List<Value<string>>;
    Name: Value<string>;
}
export default class VpcEndpoint extends ResourceBase<VpcEndpointProperties> {
    constructor(properties: VpcEndpointProperties);
}
