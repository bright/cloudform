import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface VPCEndpointProperties {
    PolicyDocument?: {
        [key: string]: any;
    };
    PrivateDnsEnabled?: Value<boolean>;
    RouteTableIds?: List<Value<string>>;
    SecurityGroupIds?: List<Value<string>>;
    ServiceName: Value<string>;
    SubnetIds?: List<Value<string>>;
    VpcEndpointType?: Value<string>;
    VpcId: Value<string>;
    IsPrivateDnsEnabled?: Value<boolean>;
    VPCEndpointType?: Value<string>;
}
export default class VPCEndpoint extends ResourceBase<VPCEndpointProperties> {
    constructor(properties: VPCEndpointProperties);
}
