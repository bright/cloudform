/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface CertificateProperties {
    CertificateArn?: Value<string>
}

export class Certificate extends ResourceBase {
    constructor(properties: CertificateProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancingV2::Certificate', properties, dependsOn)
    }
}

export interface ListenerCertificateProperties {
    Certificates: Certificate[]
    ListenerArn: Value<string>
}

export default class ListenerCertificate extends ResourceBase {
    constructor(properties: ListenerCertificateProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticLoadBalancingV2::ListenerCertificate', properties, dependsOn)
    }
}
