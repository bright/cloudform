/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface ReadinessCheckProperties {
    ResourceSetName?: Value<string>
    ReadinessCheckName?: Value<string>
    Tags?: List<ResourceTag>
}

export default class ReadinessCheck extends ResourceBase<ReadinessCheckProperties> {


    constructor(properties?: ReadinessCheckProperties) {
        super('AWS::Route53RecoveryReadiness::ReadinessCheck', properties || {})
    }
}
