/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface ParameterGroupProperties {
    CacheParameterGroupFamily: Value<string>
    Description: Value<string>
    Properties?: {[key: string]: Value<string>}
}

export default class ParameterGroup extends ResourceBase {
    constructor(properties: ParameterGroupProperties, dependsOn?: Value<string>) {
        super('AWS::ElastiCache::ParameterGroup', properties, dependsOn)
    }
}