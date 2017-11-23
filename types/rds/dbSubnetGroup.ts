/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'



export interface DBSubnetGroupProperties {
    DBSubnetGroupDescription: Value<string>
    SubnetIds: Value<string>[]
    Tags?: ResourceTag[]
}

export default class DBSubnetGroup extends ResourceBase {
    constructor(properties: DBSubnetGroupProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::RDS::DBSubnetGroup', properties, dependsOn)
    }
}
