import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface CertificateProperties {
    InactiveDate?: Value<string>;
    Usage: Value<string>;
    PrivateKey?: Value<string>;
    Description?: Value<string>;
    CertificateChain?: Value<string>;
    ActiveDate?: Value<string>;
    Tags?: List<ResourceTag>;
    Certificate: Value<string>;
}
export default class Certificate extends ResourceBase<CertificateProperties> {
    constructor(properties: CertificateProperties);
}
