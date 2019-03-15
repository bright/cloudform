/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DatasetContentVersionValue {
    DatasetName?: Value<string>

    constructor(properties: DatasetContentVersionValue) {
        Object.assign(this, properties)
    }
}

export class OutputFileUriValue {
    FileName?: Value<string>

    constructor(properties: OutputFileUriValue) {
        Object.assign(this, properties)
    }
}

export class QueryAction {
    Filters?: List<Filter>
    SqlQuery!: Value<string>

    constructor(properties: QueryAction) {
        Object.assign(this, properties)
    }
}

export class Variable {
    DatasetContentVersionValue?: DatasetContentVersionValue
    DoubleValue?: Value<number>
    OutputFileUriValue?: OutputFileUriValue
    VariableName!: Value<string>
    StringValue?: Value<string>

    constructor(properties: Variable) {
        Object.assign(this, properties)
    }
}

export class Filter {
    DeltaTime?: DeltaTime

    constructor(properties: Filter) {
        Object.assign(this, properties)
    }
}

export class DeltaTime {
    TimeExpression!: Value<string>
    OffsetSeconds!: Value<number>

    constructor(properties: DeltaTime) {
        Object.assign(this, properties)
    }
}

export class ResourceConfiguration {
    VolumeSizeInGB!: Value<number>
    ComputeType!: Value<string>

    constructor(properties: ResourceConfiguration) {
        Object.assign(this, properties)
    }
}

export class TriggeringDataset {
    DatasetName!: Value<string>

    constructor(properties: TriggeringDataset) {
        Object.assign(this, properties)
    }
}

export class Schedule {
    ScheduleExpression!: Value<string>

    constructor(properties: Schedule) {
        Object.assign(this, properties)
    }
}

export class Trigger {
    Schedule?: Schedule
    TriggeringDataset?: TriggeringDataset

    constructor(properties: Trigger) {
        Object.assign(this, properties)
    }
}

export class RetentionPeriod {
    NumberOfDays!: Value<number>
    Unlimited!: Value<boolean>

    constructor(properties: RetentionPeriod) {
        Object.assign(this, properties)
    }
}

export class Action {
    ActionName!: Value<string>
    ContainerAction?: ContainerAction
    QueryAction?: QueryAction

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export class ContainerAction {
    Variables?: List<Variable>
    ExecutionRoleArn!: Value<string>
    Image!: Value<string>
    ResourceConfiguration!: ResourceConfiguration

    constructor(properties: ContainerAction) {
        Object.assign(this, properties)
    }
}

export interface DatasetProperties {
    Actions: List<Action>
    DatasetName?: Value<string>
    Triggers?: List<Trigger>
    RetentionPeriod?: RetentionPeriod
    Tags?: List<ResourceTag>
}

export default class Dataset extends ResourceBase<DatasetProperties> {
    static DatasetContentVersionValue = DatasetContentVersionValue
    static OutputFileUriValue = OutputFileUriValue
    static QueryAction = QueryAction
    static Variable = Variable
    static Filter = Filter
    static DeltaTime = DeltaTime
    static ResourceConfiguration = ResourceConfiguration
    static TriggeringDataset = TriggeringDataset
    static Schedule = Schedule
    static Trigger = Trigger
    static RetentionPeriod = RetentionPeriod
    static Action = Action
    static ContainerAction = ContainerAction

    constructor(properties: DatasetProperties) {
        super('AWS::IoTAnalytics::Dataset', properties)
    }
}
