import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface VPCEndpointProperties {
    VpcId: Value<string>;
    RouteTableIds?: List<Value<string>>;
    ServiceName: Value<string>;
    PolicyDocument?: any;
    IsPrivateDnsEnabled?: Value<boolean>;
    SubnetIds?: List<Value<string>>;
    SecurityGroupIds?: List<Value<string>>;
    VPCEndpointType?: Value<string>;
}
export default class VPCEndpoint extends ResourceBase {
    constructor(properties?: VPCEndpointProperties);
}
