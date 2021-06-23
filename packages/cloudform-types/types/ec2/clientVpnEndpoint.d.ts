import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ClientConnectOptions {
    LambdaFunctionArn?: Value<string>;
    Enabled: Value<boolean>;
    constructor(properties: ClientConnectOptions);
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
    SelfServiceSAMLProviderArn?: Value<string>;
    SAMLProviderArn: Value<string>;
    constructor(properties: FederatedAuthenticationRequest);
}
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
export interface ClientVpnEndpointProperties {
    ClientCidrBlock: Value<string>;
    ClientConnectOptions?: ClientConnectOptions;
    Description?: Value<string>;
    TagSpecifications?: List<TagSpecification>;
    AuthenticationOptions: List<ClientAuthenticationRequest>;
    ServerCertificateArn: Value<string>;
    DnsServers?: List<Value<string>>;
    SecurityGroupIds?: List<Value<string>>;
    ConnectionLogOptions: ConnectionLogOptions;
    SplitTunnel?: Value<boolean>;
    VpcId?: Value<string>;
    SelfServicePortal?: Value<string>;
    TransportProtocol?: Value<string>;
    VpnPort?: Value<number>;
}
export default class ClientVpnEndpoint extends ResourceBase<ClientVpnEndpointProperties> {
    static ClientConnectOptions: typeof ClientConnectOptions;
    static DirectoryServiceAuthenticationRequest: typeof DirectoryServiceAuthenticationRequest;
    static TagSpecification: typeof TagSpecification;
    static ClientAuthenticationRequest: typeof ClientAuthenticationRequest;
    static FederatedAuthenticationRequest: typeof FederatedAuthenticationRequest;
    static ConnectionLogOptions: typeof ConnectionLogOptions;
    static CertificateAuthenticationRequest: typeof CertificateAuthenticationRequest;
    constructor(properties: ClientVpnEndpointProperties);
}
