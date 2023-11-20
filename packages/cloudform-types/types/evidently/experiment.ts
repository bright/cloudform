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

export class MetricGoalObject {
    EntityIdKey!: Value<string>
    DesiredChange!: Value<string>
    MetricName!: Value<string>
    EventPattern?: Value<string>
    ValueKey!: Value<string>
    UnitLabel?: Value<string>

    constructor(properties: MetricGoalObject) {
        Object.assign(this, properties)
    }
}

export class OnlineAbConfigObject {
    TreatmentWeights?: List<TreatmentToWeight>
    ControlTreatmentName?: Value<string>

    constructor(properties: OnlineAbConfigObject) {
        Object.assign(this, properties)
    }
}

export class RunningStatusObject {
    Status!: Value<string>
    DesiredState?: Value<string>
    AnalysisCompleteTime?: Value<string>
    Reason?: Value<string>

    constructor(properties: RunningStatusObject) {
        Object.assign(this, properties)
    }
}

export class TreatmentObject {
    Description?: Value<string>
    Variation!: Value<string>
    Feature!: Value<string>
    TreatmentName!: Value<string>

    constructor(properties: TreatmentObject) {
        Object.assign(this, properties)
    }
}

export class TreatmentToWeight {
    Treatment!: Value<string>
    SplitWeight!: Value<number>

    constructor(properties: TreatmentToWeight) {
        Object.assign(this, properties)
    }
}

export interface ExperimentProperties {
    Project: Value<string>
    RunningStatus?: RunningStatusObject
    Description?: Value<string>
    MetricGoals: List<MetricGoalObject>
    OnlineAbConfig: OnlineAbConfigObject
    RemoveSegment?: Value<boolean>
    RandomizationSalt?: Value<string>
    Treatments: List<TreatmentObject>
    SamplingRate?: Value<number>
    Segment?: Value<string>
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class Experiment extends ResourceBase<ExperimentProperties> {
    static MetricGoalObject = MetricGoalObject
    static OnlineAbConfigObject = OnlineAbConfigObject
    static RunningStatusObject = RunningStatusObject
    static TreatmentObject = TreatmentObject
    static TreatmentToWeight = TreatmentToWeight

    constructor(properties: ExperimentProperties) {
        super('AWS::Evidently::Experiment', properties)
    }
}
