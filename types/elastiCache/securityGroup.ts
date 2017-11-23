/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface SecurityGroupProperties {
    Description: Value<string>
}

export default class SecurityGroup extends ResourceBase {
    constructor(properties: SecurityGroupProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElastiCache::SecurityGroup', properties, dependsOn)
    }
}
