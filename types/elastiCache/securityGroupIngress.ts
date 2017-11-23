/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface SecurityGroupIngressProperties {
    CacheSecurityGroupName: Value<string>
    EC2SecurityGroupName: Value<string>
    EC2SecurityGroupOwnerId?: Value<string>
}

export default class SecurityGroupIngress extends ResourceBase {
    constructor(properties: SecurityGroupIngressProperties, dependsOn?: Value<string>) {
        super('AWS::ElastiCache::SecurityGroupIngress', properties, dependsOn)
    }
}
