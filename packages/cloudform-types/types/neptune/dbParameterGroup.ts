/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface DBParameterGroupProperties {
    Description: Value<string>
    Parameters: any
    Family: Value<string>
    Tags?: ResourceTag[]
    Name?: Value<string>
}

export default class DBParameterGroup extends ResourceBase {


    constructor(properties?: DBParameterGroupProperties) {
        super('AWS::Neptune::DBParameterGroup', properties)
    }
}
