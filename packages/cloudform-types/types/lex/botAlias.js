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
exports.TextLogSetting = exports.TextLogDestination = exports.SentimentAnalysisSettings = exports.S3BucketLogDestination = exports.LambdaCodeHook = exports.ConversationLogSettings = exports.CodeHookSpecification = exports.CloudWatchLogGroupLogDestination = exports.BotAliasLocaleSettingsItem = exports.BotAliasLocaleSettings = exports.AudioLogSetting = exports.AudioLogDestination = void 0;
const resource_1 = require("../resource");
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
class ConversationLogSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConversationLogSettings = ConversationLogSettings;
class LambdaCodeHook {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LambdaCodeHook = LambdaCodeHook;
class S3BucketLogDestination {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3BucketLogDestination = S3BucketLogDestination;
class SentimentAnalysisSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SentimentAnalysisSettings = SentimentAnalysisSettings;
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
class BotAlias extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Lex::BotAlias', properties);
    }
}
exports.default = BotAlias;
BotAlias.AudioLogDestination = AudioLogDestination;
BotAlias.AudioLogSetting = AudioLogSetting;
BotAlias.BotAliasLocaleSettings = BotAliasLocaleSettings;
BotAlias.BotAliasLocaleSettingsItem = BotAliasLocaleSettingsItem;
BotAlias.CloudWatchLogGroupLogDestination = CloudWatchLogGroupLogDestination;
BotAlias.CodeHookSpecification = CodeHookSpecification;
BotAlias.ConversationLogSettings = ConversationLogSettings;
BotAlias.LambdaCodeHook = LambdaCodeHook;
BotAlias.S3BucketLogDestination = S3BucketLogDestination;
BotAlias.SentimentAnalysisSettings = SentimentAnalysisSettings;
BotAlias.TextLogDestination = TextLogDestination;
BotAlias.TextLogSetting = TextLogSetting;
