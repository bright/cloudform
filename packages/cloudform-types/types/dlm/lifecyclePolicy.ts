/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class FastRestoreRule {
    IntervalUnit?: Value<string>
    AvailabilityZones?: List<Value<string>>
    Count?: Value<number>
    Interval?: Value<number>

    constructor(properties: FastRestoreRule) {
        Object.assign(this, properties)
    }
}

export class EventSource {
    Type!: Value<string>
    Parameters?: EventParameters

    constructor(properties: EventSource) {
        Object.assign(this, properties)
    }
}

export class EventParameters {
    EventType!: Value<string>
    SnapshotOwner!: List<Value<string>>
    DescriptionRegex?: Value<string>

    constructor(properties: EventParameters) {
        Object.assign(this, properties)
    }
}

export class Action {
    CrossRegionCopy!: List<CrossRegionCopyAction>
    Name!: Value<string>

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export class CreateRule {
    IntervalUnit?: Value<string>
    Times?: List<Value<string>>
    CronExpression?: Value<string>
    Interval?: Value<number>
    Location?: Value<string>

    constructor(properties: CreateRule) {
        Object.assign(this, properties)
    }
}

export class RetainRule {
    IntervalUnit?: Value<string>
    Count?: Value<number>
    Interval?: Value<number>

    constructor(properties: RetainRule) {
        Object.assign(this, properties)
    }
}

export class PolicyDetails {
    ResourceTypes?: List<Value<string>>
    Schedules?: List<Schedule>
    PolicyType?: Value<string>
    EventSource?: EventSource
    Parameters?: Parameters
    Actions?: List<Action>
    TargetTags?: List<ResourceTag>
    ResourceLocations?: List<Value<string>>

    constructor(properties: PolicyDetails) {
        Object.assign(this, properties)
    }
}

export class Parameters {
    ExcludeBootVolume?: Value<boolean>
    NoReboot?: Value<boolean>

    constructor(properties: Parameters) {
        Object.assign(this, properties)
    }
}

export class EncryptionConfiguration {
    Encrypted!: Value<boolean>
    CmkArn?: Value<string>

    constructor(properties: EncryptionConfiguration) {
        Object.assign(this, properties)
    }
}

export class Schedule {
    ShareRules?: List<ShareRule>
    TagsToAdd?: List<ResourceTag>
    CreateRule?: CreateRule
    VariableTags?: List<ResourceTag>
    FastRestoreRule?: FastRestoreRule
    RetainRule?: RetainRule
    CrossRegionCopyRules?: List<CrossRegionCopyRule>
    Name?: Value<string>
    CopyTags?: Value<boolean>

    constructor(properties: Schedule) {
        Object.assign(this, properties)
    }
}

export class CrossRegionCopyRetainRule {
    IntervalUnit!: Value<string>
    Interval!: Value<number>

    constructor(properties: CrossRegionCopyRetainRule) {
        Object.assign(this, properties)
    }
}

export class CrossRegionCopyRule {
    TargetRegion?: Value<string>
    Target?: Value<string>
    Encrypted!: Value<boolean>
    CmkArn?: Value<string>
    RetainRule?: CrossRegionCopyRetainRule
    CopyTags?: Value<boolean>

    constructor(properties: CrossRegionCopyRule) {
        Object.assign(this, properties)
    }
}

export class CrossRegionCopyAction {
    Target!: Value<string>
    EncryptionConfiguration!: EncryptionConfiguration
    RetainRule?: CrossRegionCopyRetainRule

    constructor(properties: CrossRegionCopyAction) {
        Object.assign(this, properties)
    }
}

export class ShareRule {
    TargetAccounts?: List<Value<string>>
    UnshareIntervalUnit?: Value<string>
    UnshareInterval?: Value<number>

    constructor(properties: ShareRule) {
        Object.assign(this, properties)
    }
}

export interface LifecyclePolicyProperties {
    ExecutionRoleArn?: Value<string>
    Description?: Value<string>
    State?: Value<string>
    PolicyDetails?: PolicyDetails
    Tags?: List<ResourceTag>
}

export default class LifecyclePolicy extends ResourceBase<LifecyclePolicyProperties> {
    static FastRestoreRule = FastRestoreRule
    static EventSource = EventSource
    static EventParameters = EventParameters
    static Action = Action
    static CreateRule = CreateRule
    static RetainRule = RetainRule
    static PolicyDetails = PolicyDetails
    static Parameters = Parameters
    static EncryptionConfiguration = EncryptionConfiguration
    static Schedule = Schedule
    static CrossRegionCopyRetainRule = CrossRegionCopyRetainRule
    static CrossRegionCopyRule = CrossRegionCopyRule
    static CrossRegionCopyAction = CrossRegionCopyAction
    static ShareRule = ShareRule

    constructor(properties?: LifecyclePolicyProperties) {
        super('AWS::DLM::LifecyclePolicy', properties || {})
    }
}
