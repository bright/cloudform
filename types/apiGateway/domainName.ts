/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface EndpointConfigurationProperties {
    Types?: List<Value<string>>
}

export class EndpointConfiguration extends ResourceBase {
    constructor(properties: EndpointConfigurationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::EndpointConfiguration', properties, dependsOn)
    }
}

export interface DomainNameProperties {
    CertificateArn?: Value<string>
    DomainName: Value<string>
    EndpointConfiguration?: EndpointConfiguration
    RegionalCertificateArn?: Value<string>
}

export default class DomainName extends ResourceBase {
    constructor(properties: DomainNameProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::DomainName', properties, dependsOn)
    }
}
