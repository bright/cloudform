/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface ClusterSecurityGroupProperties {
    Description: Value<string>
    Tags?: ResourceTag[]
}

export default class ClusterSecurityGroup extends ResourceBase {
    constructor(properties: ClusterSecurityGroupProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Redshift::ClusterSecurityGroup', properties, dependsOn)
    }
}
