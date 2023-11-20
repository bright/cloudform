/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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

export class AudioLogDestination {
    S3Bucket!: S3BucketLogDestination

    constructor(properties: AudioLogDestination) {
        Object.assign(this, properties)
    }
}

export class AudioLogSetting {
    Destination!: AudioLogDestination
    Enabled!: Value<boolean>

    constructor(properties: AudioLogSetting) {
        Object.assign(this, properties)
    }
}

export class BotAliasLocaleSettings {
    CodeHookSpecification?: CodeHookSpecification
    Enabled!: Value<boolean>

    constructor(properties: BotAliasLocaleSettings) {
        Object.assign(this, properties)
    }
}

export class BotAliasLocaleSettingsItem {
    LocaleId!: Value<string>
    BotAliasLocaleSetting!: BotAliasLocaleSettings

    constructor(properties: BotAliasLocaleSettingsItem) {
        Object.assign(this, properties)
    }
}

export class CloudWatchLogGroupLogDestination {
    CloudWatchLogGroupArn!: Value<string>
    LogPrefix!: Value<string>

    constructor(properties: CloudWatchLogGroupLogDestination) {
        Object.assign(this, properties)
    }
}

export class CodeHookSpecification {
    LambdaCodeHook!: LambdaCodeHook

    constructor(properties: CodeHookSpecification) {
        Object.assign(this, properties)
    }
}

export class ConversationLogSettings {
    TextLogSettings?: List<TextLogSetting>
    AudioLogSettings?: List<AudioLogSetting>

    constructor(properties: ConversationLogSettings) {
        Object.assign(this, properties)
    }
}

export class LambdaCodeHook {
    LambdaArn!: Value<string>
    CodeHookInterfaceVersion!: Value<string>

    constructor(properties: LambdaCodeHook) {
        Object.assign(this, properties)
    }
}

export class S3BucketLogDestination {
    KmsKeyArn?: Value<string>
    LogPrefix!: Value<string>
    S3BucketArn!: Value<string>

    constructor(properties: S3BucketLogDestination) {
        Object.assign(this, properties)
    }
}

export class SentimentAnalysisSettings {
    DetectSentiment!: Value<boolean>

    constructor(properties: SentimentAnalysisSettings) {
        Object.assign(this, properties)
    }
}

export class TextLogDestination {
    CloudWatch!: CloudWatchLogGroupLogDestination

    constructor(properties: TextLogDestination) {
        Object.assign(this, properties)
    }
}

export class TextLogSetting {
    Destination!: TextLogDestination
    Enabled!: Value<boolean>

    constructor(properties: TextLogSetting) {
        Object.assign(this, properties)
    }
}

export interface BotAliasProperties {
    BotVersion?: Value<string>
    Description?: Value<string>
    BotId: Value<string>
    BotAliasLocaleSettings?: List<BotAliasLocaleSettingsItem>
    ConversationLogSettings?: ConversationLogSettings
    SentimentAnalysisSettings?: SentimentAnalysisSettings
    BotAliasName: Value<string>
    BotAliasTags?: List<ResourceTag>
}

export default class BotAlias extends ResourceBase<BotAliasProperties> {
    static AudioLogDestination = AudioLogDestination
    static AudioLogSetting = AudioLogSetting
    static BotAliasLocaleSettings = BotAliasLocaleSettings
    static BotAliasLocaleSettingsItem = BotAliasLocaleSettingsItem
    static CloudWatchLogGroupLogDestination = CloudWatchLogGroupLogDestination
    static CodeHookSpecification = CodeHookSpecification
    static ConversationLogSettings = ConversationLogSettings
    static LambdaCodeHook = LambdaCodeHook
    static S3BucketLogDestination = S3BucketLogDestination
    static SentimentAnalysisSettings = SentimentAnalysisSettings
    static TextLogDestination = TextLogDestination
    static TextLogSetting = TextLogSetting

    constructor(properties: BotAliasProperties) {
        super('AWS::Lex::BotAlias', properties)
    }
}
