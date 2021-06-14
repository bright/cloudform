/* Generated from: 
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class CampaignHook {
    Mode?: Value<string>
    WebUrl?: Value<string>
    LambdaFunctionName?: Value<string>

    constructor(properties: CampaignHook) {
        Object.assign(this, properties)
    }
}

export class Limits {
    Daily?: Value<number>
    MaximumDuration?: Value<number>
    Total?: Value<number>
    MessagesPerSecond?: Value<number>

    constructor(properties: Limits) {
        Object.assign(this, properties)
    }
}

export class QuietTime {
    Start!: Value<string>
    End!: Value<string>

    constructor(properties: QuietTime) {
        Object.assign(this, properties)
    }
}

export interface ApplicationSettingsProperties {
    QuietTime?: QuietTime
    Limits?: Limits
    ApplicationId: Value<string>
    CampaignHook?: CampaignHook
    CloudWatchMetricsEnabled?: Value<boolean>
}

export default class ApplicationSettings extends ResourceBase<ApplicationSettingsProperties> {
    static CampaignHook = CampaignHook
    static Limits = Limits
    static QuietTime = QuietTime

    constructor(properties: ApplicationSettingsProperties) {
        super('AWS::Pinpoint::ApplicationSettings', properties)
    }
}
