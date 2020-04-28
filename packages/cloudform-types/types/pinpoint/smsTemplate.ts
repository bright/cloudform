/* Generated from: 
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface SmsTemplateProperties {
    TemplateName: Value<string>
    TemplateDescription?: Value<string>
    DefaultSubstitutions?: Value<string>
    Body: Value<string>
    Tags?: {[key: string]: any}
}

export default class SmsTemplate extends ResourceBase<SmsTemplateProperties> {


    constructor(properties: SmsTemplateProperties) {
        super('AWS::Pinpoint::SmsTemplate', properties)
    }
}
