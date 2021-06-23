import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MutualTlsAuthentication {
    TruststoreUri?: Value<string>;
    TruststoreVersion?: Value<string>;
    constructor(properties: MutualTlsAuthentication);
}
export declare class EndpointConfiguration {
    Types?: List<Value<string>>;
    constructor(properties: EndpointConfiguration);
}
export interface DomainNameProperties {
    DomainName?: Value<string>;
    EndpointConfiguration?: EndpointConfiguration;
    MutualTlsAuthentication?: MutualTlsAuthentication;
    CertificateArn?: Value<string>;
    RegionalCertificateArn?: Value<string>;
    SecurityPolicy?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class DomainName extends ResourceBase<DomainNameProperties> {
    static MutualTlsAuthentication: typeof MutualTlsAuthentication;
    static EndpointConfiguration: typeof EndpointConfiguration;
    constructor(properties?: DomainNameProperties);
}
