import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare type As2Transport = Value<string>;
export declare class EndpointDetails {
    AddressAllocationIds?: List<Value<string>>;
    VpcId?: Value<string>;
    VpcEndpointId?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    constructor(properties: EndpointDetails);
}
export declare class IdentityProviderDetails {
    Function?: Value<string>;
    DirectoryId?: Value<string>;
    InvocationRole?: Value<string>;
    Url?: Value<string>;
    SftpAuthenticationMethods?: Value<string>;
    constructor(properties: IdentityProviderDetails);
}
export declare type Protocol = Value<string>;
export declare class ProtocolDetails {
    As2Transports?: List<As2Transport>;
    PassiveIp?: Value<string>;
    SetStatOption?: Value<string>;
    TlsSessionResumptionMode?: Value<string>;
    constructor(properties: ProtocolDetails);
}
export declare type StructuredLogDestination = Value<string>;
export declare class WorkflowDetail {
    WorkflowId: Value<string>;
    ExecutionRole: Value<string>;
    constructor(properties: WorkflowDetail);
}
export declare class WorkflowDetails {
    OnUpload?: List<WorkflowDetail>;
    OnPartialUpload?: List<WorkflowDetail>;
    constructor(properties: WorkflowDetails);
}
export interface ServerProperties {
    LoggingRole?: Value<string>;
    Protocols?: List<Protocol>;
    IdentityProviderDetails?: IdentityProviderDetails;
    EndpointDetails?: EndpointDetails;
    StructuredLogDestinations?: List<StructuredLogDestination>;
    PreAuthenticationLoginBanner?: Value<string>;
    PostAuthenticationLoginBanner?: Value<string>;
    EndpointType?: Value<string>;
    SecurityPolicyName?: Value<string>;
    ProtocolDetails?: ProtocolDetails;
    WorkflowDetails?: WorkflowDetails;
    Domain?: Value<string>;
    IdentityProviderType?: Value<string>;
    Tags?: List<ResourceTag>;
    Certificate?: Value<string>;
}
export default class Server extends ResourceBase<ServerProperties> {
    static EndpointDetails: typeof EndpointDetails;
    static IdentityProviderDetails: typeof IdentityProviderDetails;
    static ProtocolDetails: typeof ProtocolDetails;
    static WorkflowDetail: typeof WorkflowDetail;
    static WorkflowDetails: typeof WorkflowDetails;
    constructor(properties?: ServerProperties);
}
