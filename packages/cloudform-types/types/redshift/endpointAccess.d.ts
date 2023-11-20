import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class NetworkInterface {
    PrivateIpAddress?: Value<string>;
    AvailabilityZone?: Value<string>;
    SubnetId?: Value<string>;
    NetworkInterfaceId?: Value<string>;
    constructor(properties: NetworkInterface);
}
export declare class VpcEndpoint {
    VpcId?: Value<string>;
    NetworkInterfaces?: List<NetworkInterface>;
    VpcEndpointId?: Value<string>;
    constructor(properties: VpcEndpoint);
}
export declare class VpcSecurityGroup {
    Status?: Value<string>;
    VpcSecurityGroupId?: Value<string>;
    constructor(properties: VpcSecurityGroup);
}
export interface EndpointAccessProperties {
    EndpointName: Value<string>;
    VpcSecurityGroupIds: List<Value<string>>;
    ResourceOwner?: Value<string>;
    SubnetGroupName: Value<string>;
    ClusterIdentifier: Value<string>;
}
export default class EndpointAccess extends ResourceBase<EndpointAccessProperties> {
    static NetworkInterface: typeof NetworkInterface;
    static VpcEndpoint: typeof VpcEndpoint;
    static VpcSecurityGroup: typeof VpcSecurityGroup;
    constructor(properties: EndpointAccessProperties);
}
