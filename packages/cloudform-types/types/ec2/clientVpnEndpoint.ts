/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ConnectionLogOptions {
    CloudwatchLogStream?: Value<string>
    Enabled!: Value<boolean>
    CloudwatchLogGroup?: Value<string>

    constructor(properties: ConnectionLogOptions) {
        Object.assign(this, properties)
    }
}

export class CertificateAuthenticationRequest {
    ClientRootCertificateChainArn!: Value<string>

    constructor(properties: CertificateAuthenticationRequest) {
        Object.assign(this, properties)
    }
}

export class DirectoryServiceAuthenticationRequest {
    DirectoryId!: Value<string>

    constructor(properties: DirectoryServiceAuthenticationRequest) {
        Object.assign(this, properties)
    }
}

export class TagSpecification {
    ResourceType?: Value<string>
    Tags?: List<ResourceTag>

    constructor(properties: TagSpecification) {
        Object.assign(this, properties)
    }
}

export class ClientAuthenticationRequest {
    MutualAuthentication?: CertificateAuthenticationRequest
    Type!: Value<string>
    ActiveDirectory?: DirectoryServiceAuthenticationRequest

    constructor(properties: ClientAuthenticationRequest) {
        Object.assign(this, properties)
    }
}

export interface ClientVpnEndpointProperties {
    ClientCidrBlock: Value<string>
    ConnectionLogOptions: ConnectionLogOptions
    Description?: Value<string>
    TagSpecifications?: List<TagSpecification>
    AuthenticationOptions: List<ClientAuthenticationRequest>
    ServerCertificateArn: Value<string>
    DnsServers?: List<Value<string>>
    TransportProtocol?: Value<string>
}

export default class ClientVpnEndpoint extends ResourceBase<ClientVpnEndpointProperties> {
    static ConnectionLogOptions = ConnectionLogOptions
    static CertificateAuthenticationRequest = CertificateAuthenticationRequest
    static DirectoryServiceAuthenticationRequest = DirectoryServiceAuthenticationRequest
    static TagSpecification = TagSpecification
    static ClientAuthenticationRequest = ClientAuthenticationRequest

    constructor(properties: ClientVpnEndpointProperties) {
        super('AWS::EC2::ClientVpnEndpoint', properties)
    }
}
