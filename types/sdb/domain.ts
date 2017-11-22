/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface DomainProperties {
    Description?: Value<string>
}

export default class Domain extends ResourceBase {
    constructor(properties: DomainProperties, dependsOn?: Value<string>) {
        super('AWS::SDB::Domain', properties, dependsOn)
    }
}