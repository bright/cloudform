/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface DBSubnetGroupProperties {
    DBSubnetGroupName?: Value<string>
    DBSubnetGroupDescription: Value<string>
    SubnetIds: List<Value<string>>
    Tags?: List<ResourceTag>
}

export default class DBSubnetGroup extends ResourceBase<DBSubnetGroupProperties> {


    constructor(properties?: DBSubnetGroupProperties) {
        super('AWS::DocDB::DBSubnetGroup', properties)
    }
}
