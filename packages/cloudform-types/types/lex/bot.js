"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDialogCodeHookInvocationSpecification = exports.PlainTextMessage = exports.OutputContext = exports.ObfuscationSetting = exports.MultipleValuesSetting = exports.MessageGroup = exports.Message = exports.LambdaCodeHook = exports.KendraConfiguration = exports.IntentOverride = exports.IntentConfirmationSetting = exports.IntentClosingSetting = exports.Intent = exports.InputContext = exports.InitialResponseSetting = exports.ImageResponseCard = exports.GrammarSlotTypeSource = exports.GrammarSlotTypeSetting = exports.FulfillmentUpdatesSpecification = exports.FulfillmentUpdateResponseSpecification = exports.FulfillmentStartResponseSpecification = exports.FulfillmentCodeHookSetting = exports.ExternalSourceSetting = exports.ElicitationCodeHookInvocationSetting = exports.DialogState = exports.DialogCodeHookSetting = exports.DialogCodeHookInvocationSetting = exports.DialogAction = exports.DefaultConditionalBranch = exports.DataPrivacy = exports.DTMFSpecification = exports.CustomVocabularyItem = exports.CustomVocabulary = exports.CustomPayload = exports.ConversationLogSettings = exports.ConditionalSpecification = exports.ConditionalBranch = exports.Condition = exports.CodeHookSpecification = exports.CloudWatchLogGroupLogDestination = exports.Button = exports.BotLocale = exports.BotAliasLocaleSettingsItem = exports.BotAliasLocaleSettings = exports.AudioSpecification = exports.AudioLogSetting = exports.AudioLogDestination = exports.AudioAndDTMFInputSpecification = exports.AllowedInputTypes = exports.AdvancedRecognitionSetting = void 0;
exports.WaitAndContinueSpecification = exports.VoiceSettings = exports.TextLogSetting = exports.TextLogDestination = exports.TextInputSpecification = exports.TestBotAliasSettings = exports.StillWaitingResponseSpecification = exports.SlotValueSelectionSetting = exports.SlotValueRegexFilter = exports.SlotValueOverrideMap = exports.SlotValueOverride = exports.SlotValueElicitationSetting = exports.SlotValue = exports.SlotTypeValue = exports.SlotType = exports.SlotPriority = exports.SlotDefaultValueSpecification = exports.SlotDefaultValue = exports.SlotCaptureSetting = exports.Slot = exports.SessionAttribute = exports.SentimentAnalysisSettings = exports.SampleValue = exports.SampleUtterance = exports.SSMLMessage = exports.S3Location = exports.S3BucketLogDestination = exports.ResponseSpecification = exports.PromptSpecification = exports.PromptAttemptSpecification = exports.PostFulfillmentStatusSpecification = void 0;
const resource_1 = require("../resource");
class AdvancedRecognitionSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AdvancedRecognitionSetting = AdvancedRecognitionSetting;
class AllowedInputTypes {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AllowedInputTypes = AllowedInputTypes;
class AudioAndDTMFInputSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioAndDTMFInputSpecification = AudioAndDTMFInputSpecification;
class AudioLogDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioLogDestination = AudioLogDestination;
class AudioLogSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioLogSetting = AudioLogSetting;
class AudioSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AudioSpecification = AudioSpecification;
class BotAliasLocaleSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BotAliasLocaleSettings = BotAliasLocaleSettings;
class BotAliasLocaleSettingsItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BotAliasLocaleSettingsItem = BotAliasLocaleSettingsItem;
class BotLocale {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BotLocale = BotLocale;
class Button {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Button = Button;
class CloudWatchLogGroupLogDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CloudWatchLogGroupLogDestination = CloudWatchLogGroupLogDestination;
class CodeHookSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CodeHookSpecification = CodeHookSpecification;
class Condition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Condition = Condition;
class ConditionalBranch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConditionalBranch = ConditionalBranch;
class ConditionalSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConditionalSpecification = ConditionalSpecification;
class ConversationLogSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConversationLogSettings = ConversationLogSettings;
class CustomPayload {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomPayload = CustomPayload;
class CustomVocabulary {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomVocabulary = CustomVocabulary;
class CustomVocabularyItem {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomVocabularyItem = CustomVocabularyItem;
class DTMFSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DTMFSpecification = DTMFSpecification;
class DataPrivacy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataPrivacy = DataPrivacy;
class DefaultConditionalBranch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DefaultConditionalBranch = DefaultConditionalBranch;
class DialogAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DialogAction = DialogAction;
class DialogCodeHookInvocationSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DialogCodeHookInvocationSetting = DialogCodeHookInvocationSetting;
class DialogCodeHookSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DialogCodeHookSetting = DialogCodeHookSetting;
class DialogState {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DialogState = DialogState;
class ElicitationCodeHookInvocationSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElicitationCodeHookInvocationSetting = ElicitationCodeHookInvocationSetting;
class ExternalSourceSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ExternalSourceSetting = ExternalSourceSetting;
class FulfillmentCodeHookSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FulfillmentCodeHookSetting = FulfillmentCodeHookSetting;
class FulfillmentStartResponseSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FulfillmentStartResponseSpecification = FulfillmentStartResponseSpecification;
class FulfillmentUpdateResponseSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FulfillmentUpdateResponseSpecification = FulfillmentUpdateResponseSpecification;
class FulfillmentUpdatesSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FulfillmentUpdatesSpecification = FulfillmentUpdatesSpecification;
class GrammarSlotTypeSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrammarSlotTypeSetting = GrammarSlotTypeSetting;
class GrammarSlotTypeSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GrammarSlotTypeSource = GrammarSlotTypeSource;
class ImageResponseCard {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ImageResponseCard = ImageResponseCard;
class InitialResponseSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InitialResponseSetting = InitialResponseSetting;
class InputContext {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputContext = InputContext;
class Intent {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Intent = Intent;
class IntentClosingSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IntentClosingSetting = IntentClosingSetting;
class IntentConfirmationSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IntentConfirmationSetting = IntentConfirmationSetting;
class IntentOverride {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IntentOverride = IntentOverride;
class KendraConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KendraConfiguration = KendraConfiguration;
class LambdaCodeHook {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaCodeHook = LambdaCodeHook;
class Message {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Message = Message;
class MessageGroup {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MessageGroup = MessageGroup;
class MultipleValuesSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MultipleValuesSetting = MultipleValuesSetting;
class ObfuscationSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ObfuscationSetting = ObfuscationSetting;
class OutputContext {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputContext = OutputContext;
class PlainTextMessage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PlainTextMessage = PlainTextMessage;
class PostDialogCodeHookInvocationSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PostDialogCodeHookInvocationSpecification = PostDialogCodeHookInvocationSpecification;
class PostFulfillmentStatusSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PostFulfillmentStatusSpecification = PostFulfillmentStatusSpecification;
class PromptAttemptSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PromptAttemptSpecification = PromptAttemptSpecification;
class PromptSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PromptSpecification = PromptSpecification;
class ResponseSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResponseSpecification = ResponseSpecification;
class S3BucketLogDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3BucketLogDestination = S3BucketLogDestination;
class S3Location {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Location = S3Location;
class SSMLMessage {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SSMLMessage = SSMLMessage;
class SampleUtterance {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SampleUtterance = SampleUtterance;
class SampleValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SampleValue = SampleValue;
class SentimentAnalysisSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SentimentAnalysisSettings = SentimentAnalysisSettings;
class SessionAttribute {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SessionAttribute = SessionAttribute;
class Slot {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Slot = Slot;
class SlotCaptureSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SlotCaptureSetting = SlotCaptureSetting;
class SlotDefaultValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SlotDefaultValue = SlotDefaultValue;
class SlotDefaultValueSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SlotDefaultValueSpecification = SlotDefaultValueSpecification;
class SlotPriority {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SlotPriority = SlotPriority;
class SlotType {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SlotType = SlotType;
class SlotTypeValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SlotTypeValue = SlotTypeValue;
class SlotValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SlotValue = SlotValue;
class SlotValueElicitationSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SlotValueElicitationSetting = SlotValueElicitationSetting;
class SlotValueOverride {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SlotValueOverride = SlotValueOverride;
class SlotValueOverrideMap {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SlotValueOverrideMap = SlotValueOverrideMap;
class SlotValueRegexFilter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SlotValueRegexFilter = SlotValueRegexFilter;
class SlotValueSelectionSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SlotValueSelectionSetting = SlotValueSelectionSetting;
class StillWaitingResponseSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StillWaitingResponseSpecification = StillWaitingResponseSpecification;
class TestBotAliasSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TestBotAliasSettings = TestBotAliasSettings;
class TextInputSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TextInputSpecification = TextInputSpecification;
class TextLogDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TextLogDestination = TextLogDestination;
class TextLogSetting {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TextLogSetting = TextLogSetting;
class VoiceSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VoiceSettings = VoiceSettings;
class WaitAndContinueSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WaitAndContinueSpecification = WaitAndContinueSpecification;
class Bot extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Lex::Bot', properties);
    }
}
exports.default = Bot;
Bot.AdvancedRecognitionSetting = AdvancedRecognitionSetting;
Bot.AllowedInputTypes = AllowedInputTypes;
Bot.AudioAndDTMFInputSpecification = AudioAndDTMFInputSpecification;
Bot.AudioLogDestination = AudioLogDestination;
Bot.AudioLogSetting = AudioLogSetting;
Bot.AudioSpecification = AudioSpecification;
Bot.BotAliasLocaleSettings = BotAliasLocaleSettings;
Bot.BotAliasLocaleSettingsItem = BotAliasLocaleSettingsItem;
Bot.BotLocale = BotLocale;
Bot.Button = Button;
Bot.CloudWatchLogGroupLogDestination = CloudWatchLogGroupLogDestination;
Bot.CodeHookSpecification = CodeHookSpecification;
Bot.Condition = Condition;
Bot.ConditionalBranch = ConditionalBranch;
Bot.ConditionalSpecification = ConditionalSpecification;
Bot.ConversationLogSettings = ConversationLogSettings;
Bot.CustomPayload = CustomPayload;
Bot.CustomVocabulary = CustomVocabulary;
Bot.CustomVocabularyItem = CustomVocabularyItem;
Bot.DTMFSpecification = DTMFSpecification;
Bot.DataPrivacy = DataPrivacy;
Bot.DefaultConditionalBranch = DefaultConditionalBranch;
Bot.DialogAction = DialogAction;
Bot.DialogCodeHookInvocationSetting = DialogCodeHookInvocationSetting;
Bot.DialogCodeHookSetting = DialogCodeHookSetting;
Bot.DialogState = DialogState;
Bot.ElicitationCodeHookInvocationSetting = ElicitationCodeHookInvocationSetting;
Bot.ExternalSourceSetting = ExternalSourceSetting;
Bot.FulfillmentCodeHookSetting = FulfillmentCodeHookSetting;
Bot.FulfillmentStartResponseSpecification = FulfillmentStartResponseSpecification;
Bot.FulfillmentUpdateResponseSpecification = FulfillmentUpdateResponseSpecification;
Bot.FulfillmentUpdatesSpecification = FulfillmentUpdatesSpecification;
Bot.GrammarSlotTypeSetting = GrammarSlotTypeSetting;
Bot.GrammarSlotTypeSource = GrammarSlotTypeSource;
Bot.ImageResponseCard = ImageResponseCard;
Bot.InitialResponseSetting = InitialResponseSetting;
Bot.InputContext = InputContext;
Bot.Intent = Intent;
Bot.IntentClosingSetting = IntentClosingSetting;
Bot.IntentConfirmationSetting = IntentConfirmationSetting;
Bot.IntentOverride = IntentOverride;
Bot.KendraConfiguration = KendraConfiguration;
Bot.LambdaCodeHook = LambdaCodeHook;
Bot.Message = Message;
Bot.MessageGroup = MessageGroup;
Bot.MultipleValuesSetting = MultipleValuesSetting;
Bot.ObfuscationSetting = ObfuscationSetting;
Bot.OutputContext = OutputContext;
Bot.PlainTextMessage = PlainTextMessage;
Bot.PostDialogCodeHookInvocationSpecification = PostDialogCodeHookInvocationSpecification;
Bot.PostFulfillmentStatusSpecification = PostFulfillmentStatusSpecification;
Bot.PromptAttemptSpecification = PromptAttemptSpecification;
Bot.PromptSpecification = PromptSpecification;
Bot.ResponseSpecification = ResponseSpecification;
Bot.S3BucketLogDestination = S3BucketLogDestination;
Bot.S3Location = S3Location;
Bot.SSMLMessage = SSMLMessage;
Bot.SampleUtterance = SampleUtterance;
Bot.SampleValue = SampleValue;
Bot.SentimentAnalysisSettings = SentimentAnalysisSettings;
Bot.SessionAttribute = SessionAttribute;
Bot.Slot = Slot;
Bot.SlotCaptureSetting = SlotCaptureSetting;
Bot.SlotDefaultValue = SlotDefaultValue;
Bot.SlotDefaultValueSpecification = SlotDefaultValueSpecification;
Bot.SlotPriority = SlotPriority;
Bot.SlotType = SlotType;
Bot.SlotTypeValue = SlotTypeValue;
Bot.SlotValue = SlotValue;
Bot.SlotValueElicitationSetting = SlotValueElicitationSetting;
Bot.SlotValueOverride = SlotValueOverride;
Bot.SlotValueOverrideMap = SlotValueOverrideMap;
Bot.SlotValueRegexFilter = SlotValueRegexFilter;
Bot.SlotValueSelectionSetting = SlotValueSelectionSetting;
Bot.StillWaitingResponseSpecification = StillWaitingResponseSpecification;
Bot.TestBotAliasSettings = TestBotAliasSettings;
Bot.TextInputSpecification = TextInputSpecification;
Bot.TextLogDestination = TextLogDestination;
Bot.TextLogSetting = TextLogSetting;
Bot.VoiceSettings = VoiceSettings;
Bot.WaitAndContinueSpecification = WaitAndContinueSpecification;
