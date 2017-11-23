import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DomainValidationOptionProperties {
    DomainName: Value<string>;
    ValidationDomain: Value<string>;
}
export declare class DomainValidationOption extends ResourceBase {
    constructor(properties: DomainValidationOptionProperties, dependsOn?: Value<string> | Value<string>[]);
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
