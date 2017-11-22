/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface SecurityConfigurationProperties {
    Name?: Value<string>
    SecurityConfiguration: any
}

export default class SecurityConfiguration extends ResourceBase {
    constructor(properties: SecurityConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::SecurityConfiguration', properties, dependsOn)
    }
}