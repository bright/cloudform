import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface EndpointConfigurationProperties {
    Types?: Value<string>[];
}
export declare class EndpointConfiguration extends ResourceBase {
    constructor(properties: EndpointConfigurationProperties, dependsOn?: Value<string>);
}
export interface DomainNameProperties {
    CertificateArn?: Value<string>;
    DomainName: Value<string>;
    EndpointConfiguration?: EndpointConfiguration;
    RegionalCertificateArn?: Value<string>;
}
export default class DomainName extends ResourceBase {
    constructor(properties: DomainNameProperties, dependsOn?: Value<string>);
}
