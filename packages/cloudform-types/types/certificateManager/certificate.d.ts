import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DomainValidationOption {
    DomainName: Value<string>;
    HostedZoneId?: Value<string>;
    ValidationDomain?: Value<string>;
    constructor(properties: DomainValidationOption);
}
export interface CertificateProperties {
    CertificateAuthorityArn?: Value<string>;
    CertificateTransparencyLoggingPreference?: Value<string>;
    DomainName: Value<string>;
    DomainValidationOptions?: List<DomainValidationOption>;
    KeyAlgorithm?: Value<string>;
    SubjectAlternativeNames?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    ValidationMethod?: Value<string>;
}
export default class Certificate extends ResourceBase<CertificateProperties> {
    static DomainValidationOption: typeof DomainValidationOption;
    constructor(properties: CertificateProperties);
}
