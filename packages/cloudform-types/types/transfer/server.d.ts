import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class IdentityProviderDetails {
    InvocationRole: Value<string>;
    Url: Value<string>;
    constructor(properties: IdentityProviderDetails);
}
export declare class EndpointDetails {
    AddressAllocationIds?: List<Value<string>>;
    VpcId?: Value<string>;
    VpcEndpointId?: Value<string>;
    SubnetIds?: List<Value<string>>;
    constructor(properties: EndpointDetails);
}
export declare type Protocol = Value<string>;
export interface ServerProperties {
    LoggingRole?: Value<string>;
    Protocols?: List<Protocol>;
    IdentityProviderDetails?: IdentityProviderDetails;
    EndpointType?: Value<string>;
    EndpointDetails?: EndpointDetails;
    IdentityProviderType?: Value<string>;
    Tags?: List<ResourceTag>;
    Certificate?: Value<string>;
}
export default class Server extends ResourceBase<ServerProperties> {
    static IdentityProviderDetails: typeof IdentityProviderDetails;
    static EndpointDetails: typeof EndpointDetails;
    constructor(properties?: ServerProperties);
}
