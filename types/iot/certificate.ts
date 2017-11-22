/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface CertificateProperties {
    CertificateSigningRequest: Value<string>
    Status: Value<string>
}

export default class Certificate extends ResourceBase {
    constructor(properties: CertificateProperties, dependsOn?: Value<string>) {
        super('AWS::IoT::Certificate', properties, dependsOn)
    }
}