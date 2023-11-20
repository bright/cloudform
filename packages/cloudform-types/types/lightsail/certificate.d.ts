import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface CertificateProperties {
    DomainName: Value<string>;
    SubjectAlternativeNames?: List<Value<string>>;
    CertificateName: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Certificate extends ResourceBase<CertificateProperties> {
    constructor(properties: CertificateProperties);
}
