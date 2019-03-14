import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class IpAddressRequest {
    Ip?: Value<string>;
    SubnetId: Value<string>;
    constructor(properties: IpAddressRequest);
}
export interface ResolverEndpointProperties {
    IpAddresses: List<IpAddressRequest>;
    Direction: Value<string>;
    SecurityGroupIds: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class ResolverEndpoint extends ResourceBase<ResolverEndpointProperties> {
    static IpAddressRequest: typeof IpAddressRequest;
    constructor(properties: ResolverEndpointProperties);
}
