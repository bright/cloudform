/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface VpcLinkProperties {
    SubnetIds: List<Value<string>>
    SecurityGroupIds?: List<Value<string>>
    Tags?: {[key: string]: any}
    Name: Value<string>
}

export default class VpcLink extends ResourceBase<VpcLinkProperties> {


    constructor(properties: VpcLinkProperties) {
        super('AWS::ApiGatewayV2::VpcLink', properties)
    }
}
