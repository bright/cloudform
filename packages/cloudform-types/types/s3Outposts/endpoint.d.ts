import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class FailedReason {
    Message?: Value<string>;
    ErrorCode?: Value<string>;
    constructor(properties: FailedReason);
}
export declare class NetworkInterface {
    NetworkInterfaceId: Value<string>;
    constructor(properties: NetworkInterface);
}
export interface EndpointProperties {
    OutpostId: Value<string>;
    SecurityGroupId: Value<string>;
    FailedReason?: FailedReason;
    SubnetId: Value<string>;
    AccessType?: Value<string>;
    CustomerOwnedIpv4Pool?: Value<string>;
}
export default class Endpoint extends ResourceBase<EndpointProperties> {
    static FailedReason: typeof FailedReason;
    static NetworkInterface: typeof NetworkInterface;
    constructor(properties: EndpointProperties);
}
