import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ConnectionLogOptions {
    CloudwatchLogStream?: Value<string>;
    Enabled: Value<boolean>;
    CloudwatchLogGroup?: Value<string>;
    constructor(properties: ConnectionLogOptions);
}
export declare class CertificateAuthenticationRequest {
    ClientRootCertificateChainArn: Value<string>;
    constructor(properties: CertificateAuthenticationRequest);
}
export declare class DirectoryServiceAuthenticationRequest {
    DirectoryId: Value<string>;
    constructor(properties: DirectoryServiceAuthenticationRequest);
}
export declare class TagSpecification {
    ResourceType: Value<string>;
    Tags: List<ResourceTag>;
    constructor(properties: TagSpecification);
}
export declare class ClientAuthenticationRequest {
    MutualAuthentication?: CertificateAuthenticationRequest;
    Type: Value<string>;
    FederatedAuthentication?: FederatedAuthenticationRequest;
    ActiveDirectory?: DirectoryServiceAuthenticationRequest;
    constructor(properties: ClientAuthenticationRequest);
}
export declare class FederatedAuthenticationRequest {
    SAMLProviderArn: Value<string>;
    constructor(properties: FederatedAuthenticationRequest);
}
export interface ClientVpnEndpointProperties {
    ClientCidrBlock: Value<string>;
    ConnectionLogOptions: ConnectionLogOptions;
    SplitTunnel?: Value<boolean>;
    Description?: Value<string>;
    TagSpecifications?: List<TagSpecification>;
    VpcId?: Value<string>;
    AuthenticationOptions: List<ClientAuthenticationRequest>;
    ServerCertificateArn: Value<string>;
    DnsServers?: List<Value<string>>;
    TransportProtocol?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    VpnPort?: Value<number>;
}
export default class ClientVpnEndpoint extends ResourceBase<ClientVpnEndpointProperties> {
    static ConnectionLogOptions: typeof ConnectionLogOptions;
    static CertificateAuthenticationRequest: typeof CertificateAuthenticationRequest;
    static DirectoryServiceAuthenticationRequest: typeof DirectoryServiceAuthenticationRequest;
    static TagSpecification: typeof TagSpecification;
    static ClientAuthenticationRequest: typeof ClientAuthenticationRequest;
    static FederatedAuthenticationRequest: typeof FederatedAuthenticationRequest;
    constructor(properties: ClientVpnEndpointProperties);
}
