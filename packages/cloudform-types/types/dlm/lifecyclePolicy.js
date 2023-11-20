"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareRule = exports.Script = exports.Schedule = exports.RetentionArchiveTier = exports.RetainRule = exports.PolicyDetails = exports.Parameters = exports.FastRestoreRule = exports.EventSource = exports.EventParameters = exports.EncryptionConfiguration = exports.DeprecateRule = exports.CrossRegionCopyRule = exports.CrossRegionCopyRetainRule = exports.CrossRegionCopyDeprecateRule = exports.CrossRegionCopyAction = exports.CreateRule = exports.ArchiveRule = exports.ArchiveRetainRule = exports.Action = void 0;
const resource_1 = require("../resource");
class Action {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Action = Action;
class ArchiveRetainRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ArchiveRetainRule = ArchiveRetainRule;
class ArchiveRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ArchiveRule = ArchiveRule;
class CreateRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CreateRule = CreateRule;
class CrossRegionCopyAction {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CrossRegionCopyAction = CrossRegionCopyAction;
class CrossRegionCopyDeprecateRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CrossRegionCopyDeprecateRule = CrossRegionCopyDeprecateRule;
class CrossRegionCopyRetainRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CrossRegionCopyRetainRule = CrossRegionCopyRetainRule;
class CrossRegionCopyRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CrossRegionCopyRule = CrossRegionCopyRule;
class DeprecateRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeprecateRule = DeprecateRule;
class EncryptionConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionConfiguration = EncryptionConfiguration;
class EventParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EventParameters = EventParameters;
class EventSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EventSource = EventSource;
class FastRestoreRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FastRestoreRule = FastRestoreRule;
class Parameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Parameters = Parameters;
class PolicyDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PolicyDetails = PolicyDetails;
class RetainRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RetainRule = RetainRule;
class RetentionArchiveTier {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RetentionArchiveTier = RetentionArchiveTier;
class Schedule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Schedule = Schedule;
class Script {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Script = Script;
class ShareRule {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ShareRule = ShareRule;
class LifecyclePolicy extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::DLM::LifecyclePolicy', properties || {});
    }
}
exports.default = LifecyclePolicy;
LifecyclePolicy.Action = Action;
LifecyclePolicy.ArchiveRetainRule = ArchiveRetainRule;
LifecyclePolicy.ArchiveRule = ArchiveRule;
LifecyclePolicy.CreateRule = CreateRule;
LifecyclePolicy.CrossRegionCopyAction = CrossRegionCopyAction;
LifecyclePolicy.CrossRegionCopyDeprecateRule = CrossRegionCopyDeprecateRule;
LifecyclePolicy.CrossRegionCopyRetainRule = CrossRegionCopyRetainRule;
LifecyclePolicy.CrossRegionCopyRule = CrossRegionCopyRule;
LifecyclePolicy.DeprecateRule = DeprecateRule;
LifecyclePolicy.EncryptionConfiguration = EncryptionConfiguration;
LifecyclePolicy.EventParameters = EventParameters;
LifecyclePolicy.EventSource = EventSource;
LifecyclePolicy.FastRestoreRule = FastRestoreRule;
LifecyclePolicy.Parameters = Parameters;
LifecyclePolicy.PolicyDetails = PolicyDetails;
LifecyclePolicy.RetainRule = RetainRule;
LifecyclePolicy.RetentionArchiveTier = RetentionArchiveTier;
LifecyclePolicy.Schedule = Schedule;
LifecyclePolicy.Script = Script;
LifecyclePolicy.ShareRule = ShareRule;
