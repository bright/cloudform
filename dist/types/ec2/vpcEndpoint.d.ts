import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface VPCEndpointProperties {
    PolicyDocument?: any;
    RouteTableIds?: Value<string>[];
    ServiceName: Value<string>;
    VpcId: Value<string>;
}
export default class VPCEndpoint extends ResourceBase {
    constructor(properties: VPCEndpointProperties, dependsOn?: Value<string>);
}
