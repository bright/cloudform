/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

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

export class DatasetContentDeliveryRule {
    Destination!: DatasetContentDeliveryRuleDestination
    EntryName?: Value<string>

    constructor(properties: DatasetContentDeliveryRule) {
        Object.assign(this, properties)
    }
}

export class DatasetContentDeliveryRuleDestination {
    IotEventsDestinationConfiguration?: IotEventsDestinationConfiguration
    S3DestinationConfiguration?: S3DestinationConfiguration

    constructor(properties: DatasetContentDeliveryRuleDestination) {
        Object.assign(this, properties)
    }
}

export class DatasetContentVersionValue {
    DatasetName!: Value<string>

    constructor(properties: DatasetContentVersionValue) {
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

export class DeltaTimeSessionWindowConfiguration {
    TimeoutInMinutes!: Value<number>

    constructor(properties: DeltaTimeSessionWindowConfiguration) {
        Object.assign(this, properties)
    }
}

export class Filter {
    DeltaTime?: DeltaTime

    constructor(properties: Filter) {
        Object.assign(this, properties)
    }
}

export class GlueConfiguration {
    TableName!: Value<string>
    DatabaseName!: Value<string>

    constructor(properties: GlueConfiguration) {
        Object.assign(this, properties)
    }
}

export class IotEventsDestinationConfiguration {
    InputName!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: IotEventsDestinationConfiguration) {
        Object.assign(this, properties)
    }
}

export class LateDataRule {
    RuleConfiguration!: LateDataRuleConfiguration
    RuleName?: Value<string>

    constructor(properties: LateDataRule) {
        Object.assign(this, properties)
    }
}

export class LateDataRuleConfiguration {
    DeltaTimeSessionWindowConfiguration?: DeltaTimeSessionWindowConfiguration

    constructor(properties: LateDataRuleConfiguration) {
        Object.assign(this, properties)
    }
}

export class OutputFileUriValue {
    FileName!: Value<string>

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

export class ResourceConfiguration {
    VolumeSizeInGB!: Value<number>
    ComputeType!: Value<string>

    constructor(properties: ResourceConfiguration) {
        Object.assign(this, properties)
    }
}

export class RetentionPeriod {
    NumberOfDays?: Value<number>
    Unlimited?: Value<boolean>

    constructor(properties: RetentionPeriod) {
        Object.assign(this, properties)
    }
}

export class S3DestinationConfiguration {
    GlueConfiguration?: GlueConfiguration
    Bucket!: Value<string>
    Key!: Value<string>
    RoleArn!: Value<string>

    constructor(properties: S3DestinationConfiguration) {
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

export class TriggeringDataset {
    DatasetName!: Value<string>

    constructor(properties: TriggeringDataset) {
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

export class VersioningConfiguration {
    MaxVersions?: Value<number>
    Unlimited?: Value<boolean>

    constructor(properties: VersioningConfiguration) {
        Object.assign(this, properties)
    }
}

export interface DatasetProperties {
    Actions: List<Action>
    LateDataRules?: List<LateDataRule>
    DatasetName?: Value<string>
    ContentDeliveryRules?: List<DatasetContentDeliveryRule>
    Triggers?: List<Trigger>
    VersioningConfiguration?: VersioningConfiguration
    RetentionPeriod?: RetentionPeriod
    Tags?: List<ResourceTag>
}

export default class Dataset extends ResourceBase<DatasetProperties> {
    static Action = Action
    static ContainerAction = ContainerAction
    static DatasetContentDeliveryRule = DatasetContentDeliveryRule
    static DatasetContentDeliveryRuleDestination = DatasetContentDeliveryRuleDestination
    static DatasetContentVersionValue = DatasetContentVersionValue
    static DeltaTime = DeltaTime
    static DeltaTimeSessionWindowConfiguration = DeltaTimeSessionWindowConfiguration
    static Filter = Filter
    static GlueConfiguration = GlueConfiguration
    static IotEventsDestinationConfiguration = IotEventsDestinationConfiguration
    static LateDataRule = LateDataRule
    static LateDataRuleConfiguration = LateDataRuleConfiguration
    static OutputFileUriValue = OutputFileUriValue
    static QueryAction = QueryAction
    static ResourceConfiguration = ResourceConfiguration
    static RetentionPeriod = RetentionPeriod
    static S3DestinationConfiguration = S3DestinationConfiguration
    static Schedule = Schedule
    static Trigger = Trigger
    static TriggeringDataset = TriggeringDataset
    static Variable = Variable
    static VersioningConfiguration = VersioningConfiguration

    constructor(properties: DatasetProperties) {
        super('AWS::IoTAnalytics::Dataset', properties)
    }
}
