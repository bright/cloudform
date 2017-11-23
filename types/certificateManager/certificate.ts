/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'

export interface DomainValidationOptionProperties {
    DomainName: Value<string>
    ValidationDomain: Value<string>
}

export class DomainValidationOption extends ResourceBase {
    constructor(properties: DomainValidationOptionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CertificateManager::DomainValidationOption', properties, dependsOn)
    }
}

export interface CertificateProperties {
    DomainName: Value<string>
    DomainValidationOptions?: DomainValidationOption[]
    SubjectAlternativeNames?: Value<string>[]
    Tags?: ResourceTag[]
}

export default class Certificate extends ResourceBase {
    constructor(properties: CertificateProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CertificateManager::Certificate', properties, dependsOn)
    }
}
