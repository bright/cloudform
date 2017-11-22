import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface DomainValidationOptionProperties {
    DomainName: Value<string>;
    ValidationDomain: Value<string>;
}
export declare class DomainValidationOption extends ResourceBase {
    constructor(properties: DomainValidationOptionProperties, dependsOn?: Value<string>);
}
export interface CertificateProperties {
    DomainName: Value<string>;
    DomainValidationOptions?: DomainValidationOption[];
    SubjectAlternativeNames?: Value<string>[];
    Tags?: ResourceTag[];
}
export default class Certificate extends ResourceBase {
    constructor(properties: CertificateProperties, dependsOn?: Value<string>);
}
