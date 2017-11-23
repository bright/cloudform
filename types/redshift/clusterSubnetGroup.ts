/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'



export interface ClusterSubnetGroupProperties {
    Description: Value<string>
    SubnetIds: Value<string>[]
    Tags?: ResourceTag[]
}

export default class ClusterSubnetGroup extends ResourceBase {
    constructor(properties: ClusterSubnetGroupProperties, dependsOn?: Value<string>) {
        super('AWS::Redshift::ClusterSubnetGroup', properties, dependsOn)
    }
}