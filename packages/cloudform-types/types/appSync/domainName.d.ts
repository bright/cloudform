import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface DomainNameProperties {
    Description?: Value<string>;
    DomainName: Value<string>;
    CertificateArn: Value<string>;
}
export default class DomainName extends ResourceBase<DomainNameProperties> {
    constructor(properties: DomainNameProperties);
}
