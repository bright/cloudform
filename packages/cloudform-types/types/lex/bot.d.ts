import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AdvancedRecognitionSetting {
    AudioRecognitionStrategy?: Value<string>;
    constructor(properties: AdvancedRecognitionSetting);
}
export declare class AllowedInputTypes {
    AllowDTMFInput: Value<boolean>;
    AllowAudioInput: Value<boolean>;
    constructor(properties: AllowedInputTypes);
}
export declare class AudioAndDTMFInputSpecification {
    DTMFSpecification?: DTMFSpecification;
    AudioSpecification?: AudioSpecification;
    StartTimeoutMs: Value<number>;
    constructor(properties: AudioAndDTMFInputSpecification);
}
export declare class AudioLogDestination {
    S3Bucket: S3BucketLogDestination;
    constructor(properties: AudioLogDestination);
}
export declare class AudioLogSetting {
    Destination: AudioLogDestination;
    Enabled: Value<boolean>;
    constructor(properties: AudioLogSetting);
}
export declare class AudioSpecification {
    EndTimeoutMs: Value<number>;
    MaxLengthMs: Value<number>;
    constructor(properties: AudioSpecification);
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
export declare class BotLocale {
    NluConfidenceThreshold: Value<number>;
    LocaleId: Value<string>;
    Description?: Value<string>;
    CustomVocabulary?: CustomVocabulary;
    SlotTypes?: List<SlotType>;
    Intents?: List<Intent>;
    VoiceSettings?: VoiceSettings;
    constructor(properties: BotLocale);
}
export declare class Button {
    Value: Value<string>;
    Text: Value<string>;
    constructor(properties: Button);
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
export declare class Condition {
    ExpressionString: Value<string>;
    constructor(properties: Condition);
}
export declare class ConditionalBranch {
    Condition: Condition;
    Response?: ResponseSpecification;
    Name: Value<string>;
    NextStep: DialogState;
    constructor(properties: ConditionalBranch);
}
export declare class ConditionalSpecification {
    DefaultBranch: DefaultConditionalBranch;
    IsActive: Value<boolean>;
    ConditionalBranches: List<ConditionalBranch>;
    constructor(properties: ConditionalSpecification);
}
export declare class ConversationLogSettings {
    TextLogSettings?: List<TextLogSetting>;
    AudioLogSettings?: List<AudioLogSetting>;
    constructor(properties: ConversationLogSettings);
}
export declare class CustomPayload {
    Value: Value<string>;
    constructor(properties: CustomPayload);
}
export declare class CustomVocabulary {
    CustomVocabularyItems: List<CustomVocabularyItem>;
    constructor(properties: CustomVocabulary);
}
export declare class CustomVocabularyItem {
    DisplayAs?: Value<string>;
    Phrase: Value<string>;
    Weight?: Value<number>;
    constructor(properties: CustomVocabularyItem);
}
export declare class DTMFSpecification {
    DeletionCharacter: Value<string>;
    EndTimeoutMs: Value<number>;
    EndCharacter: Value<string>;
    MaxLength: Value<number>;
    constructor(properties: DTMFSpecification);
}
export declare class DataPrivacy {
    ChildDirected: Value<boolean>;
    constructor(properties: DataPrivacy);
}
export declare class DefaultConditionalBranch {
    Response?: ResponseSpecification;
    NextStep?: DialogState;
    constructor(properties: DefaultConditionalBranch);
}
export declare class DialogAction {
    Type: Value<string>;
    SlotToElicit?: Value<string>;
    SuppressNextMessage?: Value<boolean>;
    constructor(properties: DialogAction);
}
export declare class DialogCodeHookInvocationSetting {
    EnableCodeHookInvocation: Value<boolean>;
    InvocationLabel?: Value<string>;
    IsActive: Value<boolean>;
    PostCodeHookSpecification: PostDialogCodeHookInvocationSpecification;
    constructor(properties: DialogCodeHookInvocationSetting);
}
export declare class DialogCodeHookSetting {
    Enabled: Value<boolean>;
    constructor(properties: DialogCodeHookSetting);
}
export declare class DialogState {
    DialogAction?: DialogAction;
    SessionAttributes?: List<SessionAttribute>;
    Intent?: IntentOverride;
    constructor(properties: DialogState);
}
export declare class ElicitationCodeHookInvocationSetting {
    EnableCodeHookInvocation: Value<boolean>;
    InvocationLabel?: Value<string>;
    constructor(properties: ElicitationCodeHookInvocationSetting);
}
export declare class ExternalSourceSetting {
    GrammarSlotTypeSetting?: GrammarSlotTypeSetting;
    constructor(properties: ExternalSourceSetting);
}
export declare class FulfillmentCodeHookSetting {
    PostFulfillmentStatusSpecification?: PostFulfillmentStatusSpecification;
    FulfillmentUpdatesSpecification?: FulfillmentUpdatesSpecification;
    IsActive?: Value<boolean>;
    Enabled: Value<boolean>;
    constructor(properties: FulfillmentCodeHookSetting);
}
export declare class FulfillmentStartResponseSpecification {
    DelayInSeconds: Value<number>;
    MessageGroups: List<MessageGroup>;
    AllowInterrupt?: Value<boolean>;
    constructor(properties: FulfillmentStartResponseSpecification);
}
export declare class FulfillmentUpdateResponseSpecification {
    MessageGroups: List<MessageGroup>;
    AllowInterrupt?: Value<boolean>;
    FrequencyInSeconds: Value<number>;
    constructor(properties: FulfillmentUpdateResponseSpecification);
}
export declare class FulfillmentUpdatesSpecification {
    UpdateResponse?: FulfillmentUpdateResponseSpecification;
    Active: Value<boolean>;
    TimeoutInSeconds?: Value<number>;
    StartResponse?: FulfillmentStartResponseSpecification;
    constructor(properties: FulfillmentUpdatesSpecification);
}
export declare class GrammarSlotTypeSetting {
    Source?: GrammarSlotTypeSource;
    constructor(properties: GrammarSlotTypeSetting);
}
export declare class GrammarSlotTypeSource {
    KmsKeyArn?: Value<string>;
    S3BucketName: Value<string>;
    S3ObjectKey: Value<string>;
    constructor(properties: GrammarSlotTypeSource);
}
export declare class ImageResponseCard {
    Subtitle?: Value<string>;
    Title: Value<string>;
    ImageUrl?: Value<string>;
    Buttons?: List<Button>;
    constructor(properties: ImageResponseCard);
}
export declare class InitialResponseSetting {
    CodeHook?: DialogCodeHookInvocationSetting;
    InitialResponse?: ResponseSpecification;
    Conditional?: ConditionalSpecification;
    NextStep?: DialogState;
    constructor(properties: InitialResponseSetting);
}
export declare class InputContext {
    Name: Value<string>;
    constructor(properties: InputContext);
}
export declare class Intent {
    Description?: Value<string>;
    ParentIntentSignature?: Value<string>;
    InitialResponseSetting?: InitialResponseSetting;
    FulfillmentCodeHook?: FulfillmentCodeHookSetting;
    IntentConfirmationSetting?: IntentConfirmationSetting;
    Name: Value<string>;
    Slots?: List<Slot>;
    DialogCodeHook?: DialogCodeHookSetting;
    InputContexts?: List<InputContext>;
    KendraConfiguration?: KendraConfiguration;
    IntentClosingSetting?: IntentClosingSetting;
    OutputContexts?: List<OutputContext>;
    SlotPriorities?: List<SlotPriority>;
    SampleUtterances?: List<SampleUtterance>;
    constructor(properties: Intent);
}
export declare class IntentClosingSetting {
    IsActive?: Value<boolean>;
    ClosingResponse?: ResponseSpecification;
    Conditional?: ConditionalSpecification;
    NextStep?: DialogState;
    constructor(properties: IntentClosingSetting);
}
export declare class IntentConfirmationSetting {
    PromptSpecification: PromptSpecification;
    ConfirmationResponse?: ResponseSpecification;
    DeclinationConditional?: ConditionalSpecification;
    FailureConditional?: ConditionalSpecification;
    ConfirmationConditional?: ConditionalSpecification;
    IsActive?: Value<boolean>;
    FailureResponse?: ResponseSpecification;
    CodeHook?: DialogCodeHookInvocationSetting;
    DeclinationNextStep?: DialogState;
    ElicitationCodeHook?: ElicitationCodeHookInvocationSetting;
    ConfirmationNextStep?: DialogState;
    FailureNextStep?: DialogState;
    DeclinationResponse?: ResponseSpecification;
    constructor(properties: IntentConfirmationSetting);
}
export declare class IntentOverride {
    Slots?: List<SlotValueOverrideMap>;
    Name?: Value<string>;
    constructor(properties: IntentOverride);
}
export declare class KendraConfiguration {
    QueryFilterString?: Value<string>;
    QueryFilterStringEnabled?: Value<boolean>;
    KendraIndex: Value<string>;
    constructor(properties: KendraConfiguration);
}
export declare class LambdaCodeHook {
    LambdaArn: Value<string>;
    CodeHookInterfaceVersion: Value<string>;
    constructor(properties: LambdaCodeHook);
}
export declare class Message {
    CustomPayload?: CustomPayload;
    ImageResponseCard?: ImageResponseCard;
    PlainTextMessage?: PlainTextMessage;
    SSMLMessage?: SSMLMessage;
    constructor(properties: Message);
}
export declare class MessageGroup {
    Message: Message;
    Variations?: List<Message>;
    constructor(properties: MessageGroup);
}
export declare class MultipleValuesSetting {
    AllowMultipleValues?: Value<boolean>;
    constructor(properties: MultipleValuesSetting);
}
export declare class ObfuscationSetting {
    ObfuscationSettingType: Value<string>;
    constructor(properties: ObfuscationSetting);
}
export declare class OutputContext {
    TurnsToLive: Value<number>;
    TimeToLiveInSeconds: Value<number>;
    Name: Value<string>;
    constructor(properties: OutputContext);
}
export declare class PlainTextMessage {
    Value: Value<string>;
    constructor(properties: PlainTextMessage);
}
export declare class PostDialogCodeHookInvocationSpecification {
    SuccessResponse?: ResponseSpecification;
    FailureConditional?: ConditionalSpecification;
    TimeoutNextStep?: DialogState;
    SuccessConditional?: ConditionalSpecification;
    TimeoutResponse?: ResponseSpecification;
    SuccessNextStep?: DialogState;
    FailureResponse?: ResponseSpecification;
    FailureNextStep?: DialogState;
    TimeoutConditional?: ConditionalSpecification;
    constructor(properties: PostDialogCodeHookInvocationSpecification);
}
export declare class PostFulfillmentStatusSpecification {
    SuccessResponse?: ResponseSpecification;
    FailureConditional?: ConditionalSpecification;
    TimeoutNextStep?: DialogState;
    SuccessConditional?: ConditionalSpecification;
    TimeoutResponse?: ResponseSpecification;
    SuccessNextStep?: DialogState;
    FailureResponse?: ResponseSpecification;
    FailureNextStep?: DialogState;
    TimeoutConditional?: ConditionalSpecification;
    constructor(properties: PostFulfillmentStatusSpecification);
}
export declare class PromptAttemptSpecification {
    TextInputSpecification?: TextInputSpecification;
    AllowInterrupt?: Value<boolean>;
    AllowedInputTypes: AllowedInputTypes;
    AudioAndDTMFInputSpecification?: AudioAndDTMFInputSpecification;
    constructor(properties: PromptAttemptSpecification);
}
export declare class PromptSpecification {
    MaxRetries: Value<number>;
    MessageGroupsList: List<MessageGroup>;
    PromptAttemptsSpecification?: {
        [key: string]: PromptAttemptSpecification;
    };
    AllowInterrupt?: Value<boolean>;
    MessageSelectionStrategy?: Value<string>;
    constructor(properties: PromptSpecification);
}
export declare class ResponseSpecification {
    MessageGroupsList: List<MessageGroup>;
    AllowInterrupt?: Value<boolean>;
    constructor(properties: ResponseSpecification);
}
export declare class S3BucketLogDestination {
    KmsKeyArn?: Value<string>;
    LogPrefix: Value<string>;
    S3BucketArn: Value<string>;
    constructor(properties: S3BucketLogDestination);
}
export declare class S3Location {
    S3ObjectVersion?: Value<string>;
    S3Bucket: Value<string>;
    S3ObjectKey: Value<string>;
    constructor(properties: S3Location);
}
export declare class SSMLMessage {
    Value: Value<string>;
    constructor(properties: SSMLMessage);
}
export declare class SampleUtterance {
    Utterance: Value<string>;
    constructor(properties: SampleUtterance);
}
export declare class SampleValue {
    Value: Value<string>;
    constructor(properties: SampleValue);
}
export declare class SentimentAnalysisSettings {
    DetectSentiment: Value<boolean>;
    constructor(properties: SentimentAnalysisSettings);
}
export declare class SessionAttribute {
    Value?: Value<string>;
    Key: Value<string>;
    constructor(properties: SessionAttribute);
}
export declare class Slot {
    Description?: Value<string>;
    SlotTypeName: Value<string>;
    ValueElicitationSetting: SlotValueElicitationSetting;
    ObfuscationSetting?: ObfuscationSetting;
    Name: Value<string>;
    MultipleValuesSetting?: MultipleValuesSetting;
    constructor(properties: Slot);
}
export declare class SlotCaptureSetting {
    CaptureConditional?: ConditionalSpecification;
    FailureConditional?: ConditionalSpecification;
    CaptureResponse?: ResponseSpecification;
    CaptureNextStep?: DialogState;
    FailureResponse?: ResponseSpecification;
    CodeHook?: DialogCodeHookInvocationSetting;
    FailureNextStep?: DialogState;
    ElicitationCodeHook?: ElicitationCodeHookInvocationSetting;
    constructor(properties: SlotCaptureSetting);
}
export declare class SlotDefaultValue {
    DefaultValue: Value<string>;
    constructor(properties: SlotDefaultValue);
}
export declare class SlotDefaultValueSpecification {
    DefaultValueList: List<SlotDefaultValue>;
    constructor(properties: SlotDefaultValueSpecification);
}
export declare class SlotPriority {
    Priority: Value<number>;
    SlotName: Value<string>;
    constructor(properties: SlotPriority);
}
export declare class SlotType {
    SlotTypeValues?: List<SlotTypeValue>;
    Description?: Value<string>;
    ParentSlotTypeSignature?: Value<string>;
    ValueSelectionSetting?: SlotValueSelectionSetting;
    ExternalSourceSetting?: ExternalSourceSetting;
    Name: Value<string>;
    constructor(properties: SlotType);
}
export declare class SlotTypeValue {
    Synonyms?: List<SampleValue>;
    SampleValue: SampleValue;
    constructor(properties: SlotTypeValue);
}
export declare class SlotValue {
    InterpretedValue?: Value<string>;
    constructor(properties: SlotValue);
}
export declare class SlotValueElicitationSetting {
    PromptSpecification?: PromptSpecification;
    WaitAndContinueSpecification?: WaitAndContinueSpecification;
    SlotConstraint: Value<string>;
    SlotCaptureSetting?: SlotCaptureSetting;
    SampleUtterances?: List<SampleUtterance>;
    DefaultValueSpecification?: SlotDefaultValueSpecification;
    constructor(properties: SlotValueElicitationSetting);
}
export declare class SlotValueOverride {
    Shape?: Value<string>;
    Value?: SlotValue;
    Values?: List<SlotValueOverride>;
    constructor(properties: SlotValueOverride);
}
export declare class SlotValueOverrideMap {
    SlotName?: Value<string>;
    SlotValueOverride?: SlotValueOverride;
    constructor(properties: SlotValueOverrideMap);
}
export declare class SlotValueRegexFilter {
    Pattern: Value<string>;
    constructor(properties: SlotValueRegexFilter);
}
export declare class SlotValueSelectionSetting {
    AdvancedRecognitionSetting?: AdvancedRecognitionSetting;
    RegexFilter?: SlotValueRegexFilter;
    ResolutionStrategy: Value<string>;
    constructor(properties: SlotValueSelectionSetting);
}
export declare class StillWaitingResponseSpecification {
    MessageGroupsList: List<MessageGroup>;
    TimeoutInSeconds: Value<number>;
    AllowInterrupt?: Value<boolean>;
    FrequencyInSeconds: Value<number>;
    constructor(properties: StillWaitingResponseSpecification);
}
export declare class TestBotAliasSettings {
    Description?: Value<string>;
    BotAliasLocaleSettings?: List<BotAliasLocaleSettingsItem>;
    ConversationLogSettings?: ConversationLogSettings;
    SentimentAnalysisSettings?: SentimentAnalysisSettings;
    constructor(properties: TestBotAliasSettings);
}
export declare class TextInputSpecification {
    StartTimeoutMs: Value<number>;
    constructor(properties: TextInputSpecification);
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
export declare class VoiceSettings {
    VoiceId: Value<string>;
    Engine?: Value<string>;
    constructor(properties: VoiceSettings);
}
export declare class WaitAndContinueSpecification {
    WaitingResponse: ResponseSpecification;
    StillWaitingResponse?: StillWaitingResponseSpecification;
    IsActive?: Value<boolean>;
    ContinueResponse: ResponseSpecification;
    constructor(properties: WaitAndContinueSpecification);
}
export interface BotProperties {
    Description?: Value<string>;
    AutoBuildBotLocales?: Value<boolean>;
    BotLocales?: List<BotLocale>;
    IdleSessionTTLInSeconds: Value<number>;
    BotFileS3Location?: S3Location;
    TestBotAliasSettings?: TestBotAliasSettings;
    RoleArn: Value<string>;
    Name: Value<string>;
    BotTags?: List<ResourceTag>;
    TestBotAliasTags?: List<ResourceTag>;
    DataPrivacy: DataPrivacy;
}
export default class Bot extends ResourceBase<BotProperties> {
    static AdvancedRecognitionSetting: typeof AdvancedRecognitionSetting;
    static AllowedInputTypes: typeof AllowedInputTypes;
    static AudioAndDTMFInputSpecification: typeof AudioAndDTMFInputSpecification;
    static AudioLogDestination: typeof AudioLogDestination;
    static AudioLogSetting: typeof AudioLogSetting;
    static AudioSpecification: typeof AudioSpecification;
    static BotAliasLocaleSettings: typeof BotAliasLocaleSettings;
    static BotAliasLocaleSettingsItem: typeof BotAliasLocaleSettingsItem;
    static BotLocale: typeof BotLocale;
    static Button: typeof Button;
    static CloudWatchLogGroupLogDestination: typeof CloudWatchLogGroupLogDestination;
    static CodeHookSpecification: typeof CodeHookSpecification;
    static Condition: typeof Condition;
    static ConditionalBranch: typeof ConditionalBranch;
    static ConditionalSpecification: typeof ConditionalSpecification;
    static ConversationLogSettings: typeof ConversationLogSettings;
    static CustomPayload: typeof CustomPayload;
    static CustomVocabulary: typeof CustomVocabulary;
    static CustomVocabularyItem: typeof CustomVocabularyItem;
    static DTMFSpecification: typeof DTMFSpecification;
    static DataPrivacy: typeof DataPrivacy;
    static DefaultConditionalBranch: typeof DefaultConditionalBranch;
    static DialogAction: typeof DialogAction;
    static DialogCodeHookInvocationSetting: typeof DialogCodeHookInvocationSetting;
    static DialogCodeHookSetting: typeof DialogCodeHookSetting;
    static DialogState: typeof DialogState;
    static ElicitationCodeHookInvocationSetting: typeof ElicitationCodeHookInvocationSetting;
    static ExternalSourceSetting: typeof ExternalSourceSetting;
    static FulfillmentCodeHookSetting: typeof FulfillmentCodeHookSetting;
    static FulfillmentStartResponseSpecification: typeof FulfillmentStartResponseSpecification;
    static FulfillmentUpdateResponseSpecification: typeof FulfillmentUpdateResponseSpecification;
    static FulfillmentUpdatesSpecification: typeof FulfillmentUpdatesSpecification;
    static GrammarSlotTypeSetting: typeof GrammarSlotTypeSetting;
    static GrammarSlotTypeSource: typeof GrammarSlotTypeSource;
    static ImageResponseCard: typeof ImageResponseCard;
    static InitialResponseSetting: typeof InitialResponseSetting;
    static InputContext: typeof InputContext;
    static Intent: typeof Intent;
    static IntentClosingSetting: typeof IntentClosingSetting;
    static IntentConfirmationSetting: typeof IntentConfirmationSetting;
    static IntentOverride: typeof IntentOverride;
    static KendraConfiguration: typeof KendraConfiguration;
    static LambdaCodeHook: typeof LambdaCodeHook;
    static Message: typeof Message;
    static MessageGroup: typeof MessageGroup;
    static MultipleValuesSetting: typeof MultipleValuesSetting;
    static ObfuscationSetting: typeof ObfuscationSetting;
    static OutputContext: typeof OutputContext;
    static PlainTextMessage: typeof PlainTextMessage;
    static PostDialogCodeHookInvocationSpecification: typeof PostDialogCodeHookInvocationSpecification;
    static PostFulfillmentStatusSpecification: typeof PostFulfillmentStatusSpecification;
    static PromptAttemptSpecification: typeof PromptAttemptSpecification;
    static PromptSpecification: typeof PromptSpecification;
    static ResponseSpecification: typeof ResponseSpecification;
    static S3BucketLogDestination: typeof S3BucketLogDestination;
    static S3Location: typeof S3Location;
    static SSMLMessage: typeof SSMLMessage;
    static SampleUtterance: typeof SampleUtterance;
    static SampleValue: typeof SampleValue;
    static SentimentAnalysisSettings: typeof SentimentAnalysisSettings;
    static SessionAttribute: typeof SessionAttribute;
    static Slot: typeof Slot;
    static SlotCaptureSetting: typeof SlotCaptureSetting;
    static SlotDefaultValue: typeof SlotDefaultValue;
    static SlotDefaultValueSpecification: typeof SlotDefaultValueSpecification;
    static SlotPriority: typeof SlotPriority;
    static SlotType: typeof SlotType;
    static SlotTypeValue: typeof SlotTypeValue;
    static SlotValue: typeof SlotValue;
    static SlotValueElicitationSetting: typeof SlotValueElicitationSetting;
    static SlotValueOverride: typeof SlotValueOverride;
    static SlotValueOverrideMap: typeof SlotValueOverrideMap;
    static SlotValueRegexFilter: typeof SlotValueRegexFilter;
    static SlotValueSelectionSetting: typeof SlotValueSelectionSetting;
    static StillWaitingResponseSpecification: typeof StillWaitingResponseSpecification;
    static TestBotAliasSettings: typeof TestBotAliasSettings;
    static TextInputSpecification: typeof TextInputSpecification;
    static TextLogDestination: typeof TextLogDestination;
    static TextLogSetting: typeof TextLogSetting;
    static VoiceSettings: typeof VoiceSettings;
    static WaitAndContinueSpecification: typeof WaitAndContinueSpecification;
    constructor(properties: BotProperties);
}
