import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LoadBalancerOptions {
    LoadBalancerArn?: Value<string>;
    Port?: Value<number>;
    Protocol?: Value<string>;
    SubnetIds?: List<Value<string>>;
    constructor(properties: LoadBalancerOptions);
}
export declare class NetworkInterfaceOptions {
    Port?: Value<number>;
    NetworkInterfaceId?: Value<string>;
    Protocol?: Value<string>;
    constructor(properties: NetworkInterfaceOptions);
}
export declare class SseSpecification {
    CustomerManagedKeyEnabled?: Value<boolean>;
    KmsKeyArn?: Value<string>;
    constructor(properties: SseSpecification);
}
export interface VerifiedAccessEndpointProperties {
    AttachmentType: Value<string>;
    Description?: Value<string>;
    DomainCertificateArn: Value<string>;
    VerifiedAccessGroupId: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    LoadBalancerOptions?: LoadBalancerOptions;
    ApplicationDomain: Value<string>;
    PolicyEnabled?: Value<boolean>;
    EndpointDomainPrefix: Value<string>;
    EndpointType: Value<string>;
    PolicyDocument?: Value<string>;
    SseSpecification?: SseSpecification;
    Tags?: List<ResourceTag>;
    NetworkInterfaceOptions?: NetworkInterfaceOptions;
}
export default class VerifiedAccessEndpoint extends ResourceBase<VerifiedAccessEndpointProperties> {
    static LoadBalancerOptions: typeof LoadBalancerOptions;
    static NetworkInterfaceOptions: typeof NetworkInterfaceOptions;
    static SseSpecification: typeof SseSpecification;
    constructor(properties: VerifiedAccessEndpointProperties);
}
