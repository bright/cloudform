/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface WebACLAssociationProperties {
    ResourceArn: Value<string>
    WebACLId: Value<string>
}

export default class WebACLAssociation extends ResourceBase<WebACLAssociationProperties> {


    constructor(properties: WebACLAssociationProperties) {
        super('AWS::WAFRegional::WebACLAssociation', properties)
    }
}
