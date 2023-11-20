/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CertificateAuthenticationRequest {
    ClientRootCertificateChainArn!: Value<string>

    constructor(properties: CertificateAuthenticationRequest) {
        Object.assign(this, properties)
    }
}

export class ClientAuthenticationRequest {
    MutualAuthentication?: CertificateAuthenticationRequest
    Type!: Value<string>
    FederatedAuthentication?: FederatedAuthenticationRequest
    ActiveDirectory?: DirectoryServiceAuthenticationRequest

    constructor(properties: ClientAuthenticationRequest) {
        Object.assign(this, properties)
    }
}

export class ClientConnectOptions {
    LambdaFunctionArn?: Value<string>
    Enabled!: Value<boolean>

    constructor(properties: ClientConnectOptions) {
        Object.assign(this, properties)
    }
}

export class ClientLoginBannerOptions {
    Enabled!: Value<boolean>
    BannerText?: Value<string>

    constructor(properties: ClientLoginBannerOptions) {
        Object.assign(this, properties)
    }
}

export class ConnectionLogOptions {
    CloudwatchLogStream?: Value<string>
    Enabled!: Value<boolean>
    CloudwatchLogGroup?: Value<string>

    constructor(properties: ConnectionLogOptions) {
        Object.assign(this, properties)
    }
}

export class DirectoryServiceAuthenticationRequest {
    DirectoryId!: Value<string>

    constructor(properties: DirectoryServiceAuthenticationRequest) {
        Object.assign(this, properties)
    }
}

export class FederatedAuthenticationRequest {
    SelfServiceSAMLProviderArn?: Value<string>
    SAMLProviderArn!: Value<string>

    constructor(properties: FederatedAuthenticationRequest) {
        Object.assign(this, properties)
    }
}

export class TagSpecification {
    ResourceType!: Value<string>
    Tags!: List<ResourceTag>

    constructor(properties: TagSpecification) {
        Object.assign(this, properties)
    }
}

export interface ClientVpnEndpointProperties {
    ClientCidrBlock: Value<string>
    ClientConnectOptions?: ClientConnectOptions
    Description?: Value<string>
    TagSpecifications?: List<TagSpecification>
    AuthenticationOptions: List<ClientAuthenticationRequest>
    ServerCertificateArn: Value<string>
    SessionTimeoutHours?: Value<number>
    DnsServers?: List<Value<string>>
    SecurityGroupIds?: List<Value<string>>
    ConnectionLogOptions: ConnectionLogOptions
    SplitTunnel?: Value<boolean>
    ClientLoginBannerOptions?: ClientLoginBannerOptions
    VpcId?: Value<string>
    SelfServicePortal?: Value<string>
    TransportProtocol?: Value<string>
    VpnPort?: Value<number>
}

export default class ClientVpnEndpoint extends ResourceBase<ClientVpnEndpointProperties> {
    static CertificateAuthenticationRequest = CertificateAuthenticationRequest
    static ClientAuthenticationRequest = ClientAuthenticationRequest
    static ClientConnectOptions = ClientConnectOptions
    static ClientLoginBannerOptions = ClientLoginBannerOptions
    static ConnectionLogOptions = ConnectionLogOptions
    static DirectoryServiceAuthenticationRequest = DirectoryServiceAuthenticationRequest
    static FederatedAuthenticationRequest = FederatedAuthenticationRequest
    static TagSpecification = TagSpecification

    constructor(properties: ClientVpnEndpointProperties) {
        super('AWS::EC2::ClientVpnEndpoint', properties)
    }
}
