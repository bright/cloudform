/* Generated from: 
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class MailFromAttributes {
    MailFromDomain?: Value<string>
    BehaviorOnMxFailure?: Value<string>

    constructor(properties: MailFromAttributes) {
        Object.assign(this, properties)
    }
}

export class Tags {
    Value?: Value<string>
    Key?: Value<string>

    constructor(properties: Tags) {
        Object.assign(this, properties)
    }
}

export interface IdentityProperties {
    FeedbackForwardingEnabled?: Value<boolean>
    DkimSigningEnabled?: Value<boolean>
    Tags?: List<Tags>
    Name: Value<string>
    MailFromAttributes?: MailFromAttributes
}

export default class Identity extends ResourceBase<IdentityProperties> {
    static MailFromAttributes = MailFromAttributes
    static Tags = Tags

    constructor(properties: IdentityProperties) {
        super('AWS::PinpointEmail::Identity', properties)
    }
}
