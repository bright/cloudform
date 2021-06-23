import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MutualTlsAuthentication {
    TruststoreVersion?: Value<string>;
    TruststoreUri?: Value<string>;
    constructor(properties: MutualTlsAuthentication);
}
export declare class DomainNameConfiguration {
    SecurityPolicy?: Value<string>;
    EndpointType?: Value<string>;
    CertificateName?: Value<string>;
    CertificateArn?: Value<string>;
    constructor(properties: DomainNameConfiguration);
}
export interface DomainNameProperties {
    MutualTlsAuthentication?: MutualTlsAuthentication;
    DomainName: Value<string>;
    DomainNameConfigurations?: List<DomainNameConfiguration>;
    Tags?: {
        [key: string]: any;
    };
}
export default class DomainName extends ResourceBase<DomainNameProperties> {
    static MutualTlsAuthentication: typeof MutualTlsAuthentication;
    static DomainNameConfiguration: typeof DomainNameConfiguration;
    constructor(properties: DomainNameProperties);
}
