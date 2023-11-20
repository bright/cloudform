import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AudioLogDestination {
    S3Bucket: S3BucketLogDestination;
    constructor(properties: AudioLogDestination);
}
export declare class AudioLogSetting {
    Destination: AudioLogDestination;
    Enabled: Value<boolean>;
    constructor(properties: AudioLogSetting);
}
export declare class BotAliasLocaleSettings {
    CodeHookSpecification?: CodeHookSpecification;
    Enabled: Value<boolean>;
    constructor(properties: BotAliasLocaleSettings);
}
export declare class BotAliasLocaleSettingsItem {
    LocaleId: Value<string>;
    BotAliasLocaleSetting: BotAliasLocaleSettings;
    constructor(properties: BotAliasLocaleSettingsItem);
}
export declare class CloudWatchLogGroupLogDestination {
    CloudWatchLogGroupArn: Value<string>;
    LogPrefix: Value<string>;
    constructor(properties: CloudWatchLogGroupLogDestination);
}
export declare class CodeHookSpecification {
    LambdaCodeHook: LambdaCodeHook;
    constructor(properties: CodeHookSpecification);
}
export declare class ConversationLogSettings {
    TextLogSettings?: List<TextLogSetting>;
    AudioLogSettings?: List<AudioLogSetting>;
    constructor(properties: ConversationLogSettings);
}
export declare class LambdaCodeHook {
    LambdaArn: Value<string>;
    CodeHookInterfaceVersion: Value<string>;
    constructor(properties: LambdaCodeHook);
}
export declare class S3BucketLogDestination {
    KmsKeyArn?: Value<string>;
    LogPrefix: Value<string>;
    S3BucketArn: Value<string>;
    constructor(properties: S3BucketLogDestination);
}
export declare class SentimentAnalysisSettings {
    DetectSentiment: Value<boolean>;
    constructor(properties: SentimentAnalysisSettings);
}
export declare class TextLogDestination {
    CloudWatch: CloudWatchLogGroupLogDestination;
    constructor(properties: TextLogDestination);
}
export declare class TextLogSetting {
    Destination: TextLogDestination;
    Enabled: Value<boolean>;
    constructor(properties: TextLogSetting);
}
export interface BotAliasProperties {
    BotVersion?: Value<string>;
    Description?: Value<string>;
    BotId: Value<string>;
    BotAliasLocaleSettings?: List<BotAliasLocaleSettingsItem>;
    ConversationLogSettings?: ConversationLogSettings;
    SentimentAnalysisSettings?: SentimentAnalysisSettings;
    BotAliasName: Value<string>;
    BotAliasTags?: List<ResourceTag>;
}
export default class BotAlias extends ResourceBase<BotAliasProperties> {
    static AudioLogDestination: typeof AudioLogDestination;
    static AudioLogSetting: typeof AudioLogSetting;
    static BotAliasLocaleSettings: typeof BotAliasLocaleSettings;
    static BotAliasLocaleSettingsItem: typeof BotAliasLocaleSettingsItem;
    static CloudWatchLogGroupLogDestination: typeof CloudWatchLogGroupLogDestination;
    static CodeHookSpecification: typeof CodeHookSpecification;
    static ConversationLogSettings: typeof ConversationLogSettings;
    static LambdaCodeHook: typeof LambdaCodeHook;
    static S3BucketLogDestination: typeof S3BucketLogDestination;
    static SentimentAnalysisSettings: typeof SentimentAnalysisSettings;
    static TextLogDestination: typeof TextLogDestination;
    static TextLogSetting: typeof TextLogSetting;
    constructor(properties: BotAliasProperties);
}
