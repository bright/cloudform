import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class NetworkInterface {
    NetworkInterfaceId: Value<string>;
    constructor(properties: NetworkInterface);
}
export interface EndpointProperties {
    OutpostId: Value<string>;
    SecurityGroupId: Value<string>;
    SubnetId: Value<string>;
}
export default class Endpoint extends ResourceBase<EndpointProperties> {
    static NetworkInterface: typeof NetworkInterface;
    constructor(properties: EndpointProperties);
}
