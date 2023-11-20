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

export type As2Transport = Value<string>

export class EndpointDetails {
    AddressAllocationIds?: List<Value<string>>
    VpcId?: Value<string>
    VpcEndpointId?: Value<string>
    SecurityGroupIds?: List<Value<string>>
    SubnetIds?: List<Value<string>>

    constructor(properties: EndpointDetails) {
        Object.assign(this, properties)
    }
}

export class IdentityProviderDetails {
    Function?: Value<string>
    DirectoryId?: Value<string>
    InvocationRole?: Value<string>
    Url?: Value<string>
    SftpAuthenticationMethods?: Value<string>

    constructor(properties: IdentityProviderDetails) {
        Object.assign(this, properties)
    }
}

export type Protocol = Value<string>

export class ProtocolDetails {
    As2Transports?: List<As2Transport>
    PassiveIp?: Value<string>
    SetStatOption?: Value<string>
    TlsSessionResumptionMode?: Value<string>

    constructor(properties: ProtocolDetails) {
        Object.assign(this, properties)
    }
}

export type StructuredLogDestination = Value<string>

export class WorkflowDetail {
    WorkflowId!: Value<string>
    ExecutionRole!: Value<string>

    constructor(properties: WorkflowDetail) {
        Object.assign(this, properties)
    }
}

export class WorkflowDetails {
    OnUpload?: List<WorkflowDetail>
    OnPartialUpload?: List<WorkflowDetail>

    constructor(properties: WorkflowDetails) {
        Object.assign(this, properties)
    }
}

export interface ServerProperties {
    LoggingRole?: Value<string>
    Protocols?: List<Protocol>
    IdentityProviderDetails?: IdentityProviderDetails
    EndpointDetails?: EndpointDetails
    StructuredLogDestinations?: List<StructuredLogDestination>
    PreAuthenticationLoginBanner?: Value<string>
    PostAuthenticationLoginBanner?: Value<string>
    EndpointType?: Value<string>
    SecurityPolicyName?: Value<string>
    ProtocolDetails?: ProtocolDetails
    WorkflowDetails?: WorkflowDetails
    Domain?: Value<string>
    IdentityProviderType?: Value<string>
    Tags?: List<ResourceTag>
    Certificate?: Value<string>
}

export default class Server extends ResourceBase<ServerProperties> {
    static EndpointDetails = EndpointDetails
    static IdentityProviderDetails = IdentityProviderDetails
    static ProtocolDetails = ProtocolDetails
    static WorkflowDetail = WorkflowDetail
    static WorkflowDetails = WorkflowDetails

    constructor(properties?: ServerProperties) {
        super('AWS::Transfer::Server', properties || {})
    }
}
