import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class IdentityProviderDetails {
    InvocationRole: Value<string>;
    Url: Value<string>;
    constructor(properties: IdentityProviderDetails);
}
export declare class EndpointDetails {
    VpcEndpointId: Value<string>;
    constructor(properties: EndpointDetails);
}
export interface ServerProperties {
    LoggingRole?: Value<string>;
    IdentityProviderDetails?: IdentityProviderDetails;
    EndpointType?: Value<string>;
    EndpointDetails?: EndpointDetails;
    IdentityProviderType?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Server extends ResourceBase<ServerProperties> {
    static IdentityProviderDetails: typeof IdentityProviderDetails;
    static EndpointDetails: typeof EndpointDetails;
    constructor(properties?: ServerProperties);
}
