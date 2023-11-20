import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class NetworkInterface {
    Status?: Value<string>;
    AvailabilityZone?: Value<string>;
    SubnetId?: Value<string>;
    ErrorMessage?: Value<string>;
    NetworkInterfaceId?: Value<string>;
    constructor(properties: NetworkInterface);
}
export interface VPCConnectionProperties {
    DnsResolvers?: List<Value<string>>;
    AvailabilityStatus?: Value<string>;
    AwsAccountId?: Value<string>;
    VPCConnectionId?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    RoleArn?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class VPCConnection extends ResourceBase<VPCConnectionProperties> {
    static NetworkInterface: typeof NetworkInterface;
    constructor(properties?: VPCConnectionProperties);
}
