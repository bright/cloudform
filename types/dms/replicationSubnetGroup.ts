/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'



export interface ReplicationSubnetGroupProperties {
    ReplicationSubnetGroupDescription: Value<string>
    ReplicationSubnetGroupIdentifier?: Value<string>
    SubnetIds: Value<string>[]
    Tags?: ResourceTag[]
}

export default class ReplicationSubnetGroup extends ResourceBase {
    constructor(properties: ReplicationSubnetGroupProperties, dependsOn?: Value<string>) {
        super('AWS::DMS::ReplicationSubnetGroup', properties, dependsOn)
    }
}
