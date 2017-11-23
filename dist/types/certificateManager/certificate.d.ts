import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DomainValidationOption {
    DomainName: Value<string>;
    ValidationDomain: Value<string>;
    constructor(properties: DomainValidationOption);
}
export interface CertificateProperties {
    DomainName: Value<string>;
    DomainValidationOptions?: List<DomainValidationOption>;
    SubjectAlternativeNames?: List<Value<string>>;
    Tags?: ResourceTag[];
}
export default class Certificate extends ResourceBase {
    constructor(properties: CertificateProperties, dependsOn?: Value<string> | Value<string>[]);
}
