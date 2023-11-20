import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EndpointConfiguration {
    Types?: List<Value<string>>;
    constructor(properties: EndpointConfiguration);
}
export declare class MutualTlsAuthentication {
    TruststoreVersion?: Value<string>;
    TruststoreUri?: Value<string>;
    constructor(properties: MutualTlsAuthentication);
}
export interface DomainNameProperties {
    MutualTlsAuthentication?: MutualTlsAuthentication;
    OwnershipVerificationCertificateArn?: Value<string>;
    DomainName?: Value<string>;
    SecurityPolicy?: Value<string>;
    EndpointConfiguration?: EndpointConfiguration;
    RegionalCertificateArn?: Value<string>;
    Tags?: List<ResourceTag>;
    CertificateArn?: Value<string>;
}
export default class DomainName extends ResourceBase<DomainNameProperties> {
    static EndpointConfiguration: typeof EndpointConfiguration;
    static MutualTlsAuthentication: typeof MutualTlsAuthentication;
    constructor(properties?: DomainNameProperties);
}
