import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EndpointConfiguration {
    Types?: List<Value<string>>;
    constructor(properties: EndpointConfiguration);
}
export interface DomainNameProperties {
    CertificateArn?: Value<string>;
    DomainName: Value<string>;
    EndpointConfiguration?: EndpointConfiguration;
    RegionalCertificateArn?: Value<string>;
    SecurityPolicy?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class DomainName extends ResourceBase<DomainNameProperties> {
    static EndpointConfiguration: typeof EndpointConfiguration;
    constructor(properties: DomainNameProperties);
}
