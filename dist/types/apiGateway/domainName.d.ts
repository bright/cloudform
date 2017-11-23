import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface EndpointConfigurationProperties {
    Types?: List<Value<string>>;
}
export declare class EndpointConfiguration extends ResourceBase {
    constructor(properties: EndpointConfigurationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface DomainNameProperties {
    CertificateArn?: Value<string>;
    DomainName: Value<string>;
    EndpointConfiguration?: EndpointConfiguration;
    RegionalCertificateArn?: Value<string>;
}
export default class DomainName extends ResourceBase {
    constructor(properties: DomainNameProperties, dependsOn?: Value<string> | Value<string>[]);
}
