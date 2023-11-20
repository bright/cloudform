/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

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

export interface PushTemplateProperties {
    GCM?: AndroidPushNotificationTemplate
    Baidu?: AndroidPushNotificationTemplate
    TemplateName: Value<string>
    ADM?: AndroidPushNotificationTemplate
    APNS?: APNSPushNotificationTemplate
    TemplateDescription?: Value<string>
    DefaultSubstitutions?: Value<string>
    Default?: DefaultPushNotificationTemplate
    Tags?: {[key: string]: any}
}

export default class PushTemplate extends ResourceBase<PushTemplateProperties> {
    static APNSPushNotificationTemplate = APNSPushNotificationTemplate
    static AndroidPushNotificationTemplate = AndroidPushNotificationTemplate
    static DefaultPushNotificationTemplate = DefaultPushNotificationTemplate

    constructor(properties: PushTemplateProperties) {
        super('AWS::Pinpoint::PushTemplate', properties)
    }
}
