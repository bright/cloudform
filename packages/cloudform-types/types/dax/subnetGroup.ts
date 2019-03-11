/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface SubnetGroupProperties {
    Description?: Value<string>
    SubnetGroupName?: Value<string>
    SubnetIds: List<Value<string>>
}

export default class SubnetGroup extends ResourceBase {


    constructor(properties?: SubnetGroupProperties) {
        super('AWS::DAX::SubnetGroup', properties)
    }
}
