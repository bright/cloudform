/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ExecutionStatusObject {
    Status!: Value<string>
    DesiredState?: Value<string>
    Reason?: Value<string>

    constructor(properties: ExecutionStatusObject) {
        Object.assign(this, properties)
    }
}

export class GroupToWeight {
    GroupName!: Value<string>
    SplitWeight!: Value<number>

    constructor(properties: GroupToWeight) {
        Object.assign(this, properties)
    }
}

export class LaunchGroupObject {
    GroupName!: Value<string>
    Description?: Value<string>
    Variation!: Value<string>
    Feature!: Value<string>

    constructor(properties: LaunchGroupObject) {
        Object.assign(this, properties)
    }
}

export class MetricDefinitionObject {
    EntityIdKey!: Value<string>
    MetricName!: Value<string>
    EventPattern?: Value<string>
    ValueKey!: Value<string>
    UnitLabel?: Value<string>

    constructor(properties: MetricDefinitionObject) {
        Object.assign(this, properties)
    }
}

export class SegmentOverride {
    Weights!: List<GroupToWeight>
    EvaluationOrder!: Value<number>
    Segment!: Value<string>

    constructor(properties: SegmentOverride) {
        Object.assign(this, properties)
    }
}

export class StepConfig {
    GroupWeights!: List<GroupToWeight>
    SegmentOverrides?: List<SegmentOverride>
    StartTime!: Value<string>

    constructor(properties: StepConfig) {
        Object.assign(this, properties)
    }
}

export interface LaunchProperties {
    Project: Value<string>
    Description?: Value<string>
    ExecutionStatus?: ExecutionStatusObject
    Groups: List<LaunchGroupObject>
    RandomizationSalt?: Value<string>
    MetricMonitors?: List<MetricDefinitionObject>
    ScheduledSplitsConfig: List<StepConfig>
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class Launch extends ResourceBase<LaunchProperties> {
    static ExecutionStatusObject = ExecutionStatusObject
    static GroupToWeight = GroupToWeight
    static LaunchGroupObject = LaunchGroupObject
    static MetricDefinitionObject = MetricDefinitionObject
    static SegmentOverride = SegmentOverride
    static StepConfig = StepConfig

    constructor(properties: LaunchProperties) {
        super('AWS::Evidently::Launch', properties)
    }
}
