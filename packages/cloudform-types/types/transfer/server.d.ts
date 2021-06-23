import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class IdentityProviderDetails {
    InvocationRole: Value<string>;
    Url: Value<string>;
    DirectoryId?: Value<string>;
    constructor(properties: IdentityProviderDetails);
}
export declare class EndpointDetails {
    AddressAllocationIds?: List<Value<string>>;
    VpcId?: Value<string>;
    VpcEndpointId?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    constructor(properties: EndpointDetails);
}
export declare type Protocol = Value<string>;
export declare class ProtocolDetails {
    PassiveIp?: Value<string>;
    constructor(properties: ProtocolDetails);
}
export interface ServerProperties {
    LoggingRole?: Value<string>;
    Protocols?: List<Protocol>;
    IdentityProviderDetails?: IdentityProviderDetails;
    EndpointType?: Value<string>;
    SecurityPolicyName?: Value<string>;
    Domain?: Value<string>;
    EndpointDetails?: EndpointDetails;
    IdentityProviderType?: Value<string>;
    Tags?: List<ResourceTag>;
    Certificate?: Value<string>;
    ProtocolDetails?: ProtocolDetails;
}
export default class Server extends ResourceBase<ServerProperties> {
    static IdentityProviderDetails: typeof IdentityProviderDetails;
    static EndpointDetails: typeof EndpointDetails;
    static ProtocolDetails: typeof ProtocolDetails;
    constructor(properties?: ServerProperties);
}
