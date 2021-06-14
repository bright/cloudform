/* Generated from: 
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface EmailTemplateProperties {
    HtmlPart?: Value<string>
    TextPart?: Value<string>
    TemplateName: Value<string>
    TemplateDescription?: Value<string>
    DefaultSubstitutions?: Value<string>
    Subject: Value<string>
    Tags?: {[key: string]: any}
}

export default class EmailTemplate extends ResourceBase<EmailTemplateProperties> {


    constructor(properties: EmailTemplateProperties) {
        super('AWS::Pinpoint::EmailTemplate', properties)
    }
}
