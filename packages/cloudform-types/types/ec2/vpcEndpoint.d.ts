import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface VPCEndpointProperties {
    PrivateDnsEnabled?: Value<boolean>;
    VpcId: Value<string>;
    RouteTableIds?: List<Value<string>>;
    ServiceName: Value<string>;
    PolicyDocument?: {
        [key: string]: any;
    };
    VpcEndpointType?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
}
export default class VPCEndpoint extends ResourceBase<VPCEndpointProperties> {
    constructor(properties: VPCEndpointProperties);
}
