import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DomainNameConfiguration {
    EndpointType?: Value<string>;
    CertificateName?: Value<string>;
    CertificateArn?: Value<string>;
    constructor(properties: DomainNameConfiguration);
}
export interface DomainNameProperties {
    DomainName: Value<string>;
    DomainNameConfigurations?: List<DomainNameConfiguration>;
    Tags?: {
        [key: string]: any;
    };
}
export default class DomainName extends ResourceBase<DomainNameProperties> {
    static DomainNameConfiguration: typeof DomainNameConfiguration;
    constructor(properties: DomainNameProperties);
}
