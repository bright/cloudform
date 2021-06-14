/* Generated from: 
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DefaultPushNotificationTemplate {
    Action?: Value<string>
    Title?: Value<string>
    Sound?: Value<string>
    Body?: Value<string>
    Url?: Value<string>

    constructor(properties: DefaultPushNotificationTemplate) {
        Object.assign(this, properties)
    }
}

export class AndroidPushNotificationTemplate {
    Action?: Value<string>
    ImageUrl?: Value<string>
    SmallImageIconUrl?: Value<string>
    Title?: Value<string>
    ImageIconUrl?: Value<string>
    Sound?: Value<string>
    Body?: Value<string>
    Url?: Value<string>

    constructor(properties: AndroidPushNotificationTemplate) {
        Object.assign(this, properties)
    }
}

export class APNSPushNotificationTemplate {
    Action?: Value<string>
    MediaUrl?: Value<string>
    Title?: Value<string>
    Sound?: Value<string>
    Body?: Value<string>
    Url?: Value<string>

    constructor(properties: APNSPushNotificationTemplate) {
        Object.assign(this, properties)
    }
}

export interface PushTemplateProperties {
    TemplateName: Value<string>
    TemplateDescription?: Value<string>
    DefaultSubstitutions?: Value<string>
    Tags?: {[key: string]: any}
}

export default class PushTemplate extends ResourceBase<PushTemplateProperties> {
    static DefaultPushNotificationTemplate = DefaultPushNotificationTemplate
    static AndroidPushNotificationTemplate = AndroidPushNotificationTemplate
    static APNSPushNotificationTemplate = APNSPushNotificationTemplate

    constructor(properties: PushTemplateProperties) {
        super('AWS::Pinpoint::PushTemplate', properties)
    }
}
