import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DomainNameConfiguration {
    OwnershipVerificationCertificateArn?: Value<string>;
    SecurityPolicy?: Value<string>;
    EndpointType?: Value<string>;
    CertificateName?: Value<string>;
    CertificateArn?: Value<string>;
    constructor(properties: DomainNameConfiguration);
}
export declare class MutualTlsAuthentication {
    TruststoreVersion?: Value<string>;
    TruststoreUri?: Value<string>;
    constructor(properties: MutualTlsAuthentication);
}
export interface DomainNameProperties {
    MutualTlsAuthentication?: MutualTlsAuthentication;
    DomainName: Value<string>;
    DomainNameConfigurations?: List<DomainNameConfiguration>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class DomainName extends ResourceBase<DomainNameProperties> {
    static DomainNameConfiguration: typeof DomainNameConfiguration;
    static MutualTlsAuthentication: typeof MutualTlsAuthentication;
    constructor(properties: DomainNameProperties);
}
