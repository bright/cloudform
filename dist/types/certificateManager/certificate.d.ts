import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
import DomainValidationOptions from './domainValidationOptions';
export interface CertificateProperties {
    DomainName: Value<string>;
    DomainValidationOptions?: DomainValidationOptions;
    SubjectAlternativeNames: Value<string>;
    Tags?: ResourceTag[];
}
export default class Certificate extends ResourceBase {
    constructor(properties: CertificateProperties, dependsOn?: Value<string>);
}
