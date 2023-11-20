import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class IpAddressRequest {
    Ipv6?: Value<string>;
    Ip?: Value<string>;
    SubnetId: Value<string>;
    constructor(properties: IpAddressRequest);
}
export interface ResolverEndpointProperties {
    IpAddresses: List<IpAddressRequest>;
    OutpostArn?: Value<string>;
    PreferredInstanceType?: Value<string>;
    ResolverEndpointType?: Value<string>;
    Direction: Value<string>;
    SecurityGroupIds: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class ResolverEndpoint extends ResourceBase<ResolverEndpointProperties> {
    static IpAddressRequest: typeof IpAddressRequest;
    constructor(properties: ResolverEndpointProperties);
}
