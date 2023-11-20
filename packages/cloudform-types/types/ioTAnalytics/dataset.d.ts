import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Action {
    ActionName: Value<string>;
    ContainerAction?: ContainerAction;
    QueryAction?: QueryAction;
    constructor(properties: Action);
}
export declare class ContainerAction {
    Variables?: List<Variable>;
    ExecutionRoleArn: Value<string>;
    Image: Value<string>;
    ResourceConfiguration: ResourceConfiguration;
    constructor(properties: ContainerAction);
}
export declare class DatasetContentDeliveryRule {
    Destination: DatasetContentDeliveryRuleDestination;
    EntryName?: Value<string>;
    constructor(properties: DatasetContentDeliveryRule);
}
export declare class DatasetContentDeliveryRuleDestination {
    IotEventsDestinationConfiguration?: IotEventsDestinationConfiguration;
    S3DestinationConfiguration?: S3DestinationConfiguration;
    constructor(properties: DatasetContentDeliveryRuleDestination);
}
export declare class DatasetContentVersionValue {
    DatasetName: Value<string>;
    constructor(properties: DatasetContentVersionValue);
}
export declare class DeltaTime {
    TimeExpression: Value<string>;
    OffsetSeconds: Value<number>;
    constructor(properties: DeltaTime);
}
export declare class DeltaTimeSessionWindowConfiguration {
    TimeoutInMinutes: Value<number>;
    constructor(properties: DeltaTimeSessionWindowConfiguration);
}
export declare class Filter {
    DeltaTime?: DeltaTime;
    constructor(properties: Filter);
}
export declare class GlueConfiguration {
    TableName: Value<string>;
    DatabaseName: Value<string>;
    constructor(properties: GlueConfiguration);
}
export declare class IotEventsDestinationConfiguration {
    InputName: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: IotEventsDestinationConfiguration);
}
export declare class LateDataRule {
    RuleConfiguration: LateDataRuleConfiguration;
    RuleName?: Value<string>;
    constructor(properties: LateDataRule);
}
export declare class LateDataRuleConfiguration {
    DeltaTimeSessionWindowConfiguration?: DeltaTimeSessionWindowConfiguration;
    constructor(properties: LateDataRuleConfiguration);
}
export declare class OutputFileUriValue {
    FileName: Value<string>;
    constructor(properties: OutputFileUriValue);
}
export declare class QueryAction {
    Filters?: List<Filter>;
    SqlQuery: Value<string>;
    constructor(properties: QueryAction);
}
export declare class ResourceConfiguration {
    VolumeSizeInGB: Value<number>;
    ComputeType: Value<string>;
    constructor(properties: ResourceConfiguration);
}
export declare class RetentionPeriod {
    NumberOfDays?: Value<number>;
    Unlimited?: Value<boolean>;
    constructor(properties: RetentionPeriod);
}
export declare class S3DestinationConfiguration {
    GlueConfiguration?: GlueConfiguration;
    Bucket: Value<string>;
    Key: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: S3DestinationConfiguration);
}
export declare class Schedule {
    ScheduleExpression: Value<string>;
    constructor(properties: Schedule);
}
export declare class Trigger {
    Schedule?: Schedule;
    TriggeringDataset?: TriggeringDataset;
    constructor(properties: Trigger);
}
export declare class TriggeringDataset {
    DatasetName: Value<string>;
    constructor(properties: TriggeringDataset);
}
export declare class Variable {
    DatasetContentVersionValue?: DatasetContentVersionValue;
    DoubleValue?: Value<number>;
    OutputFileUriValue?: OutputFileUriValue;
    VariableName: Value<string>;
    StringValue?: Value<string>;
    constructor(properties: Variable);
}
export declare class VersioningConfiguration {
    MaxVersions?: Value<number>;
    Unlimited?: Value<boolean>;
    constructor(properties: VersioningConfiguration);
}
export interface DatasetProperties {
    Actions: List<Action>;
    LateDataRules?: List<LateDataRule>;
    DatasetName?: Value<string>;
    ContentDeliveryRules?: List<DatasetContentDeliveryRule>;
    Triggers?: List<Trigger>;
    VersioningConfiguration?: VersioningConfiguration;
    RetentionPeriod?: RetentionPeriod;
    Tags?: List<ResourceTag>;
}
export default class Dataset extends ResourceBase<DatasetProperties> {
    static Action: typeof Action;
    static ContainerAction: typeof ContainerAction;
    static DatasetContentDeliveryRule: typeof DatasetContentDeliveryRule;
    static DatasetContentDeliveryRuleDestination: typeof DatasetContentDeliveryRuleDestination;
    static DatasetContentVersionValue: typeof DatasetContentVersionValue;
    static DeltaTime: typeof DeltaTime;
    static DeltaTimeSessionWindowConfiguration: typeof DeltaTimeSessionWindowConfiguration;
    static Filter: typeof Filter;
    static GlueConfiguration: typeof GlueConfiguration;
    static IotEventsDestinationConfiguration: typeof IotEventsDestinationConfiguration;
    static LateDataRule: typeof LateDataRule;
    static LateDataRuleConfiguration: typeof LateDataRuleConfiguration;
    static OutputFileUriValue: typeof OutputFileUriValue;
    static QueryAction: typeof QueryAction;
    static ResourceConfiguration: typeof ResourceConfiguration;
    static RetentionPeriod: typeof RetentionPeriod;
    static S3DestinationConfiguration: typeof S3DestinationConfiguration;
    static Schedule: typeof Schedule;
    static Trigger: typeof Trigger;
    static TriggeringDataset: typeof TriggeringDataset;
    static Variable: typeof Variable;
    static VersioningConfiguration: typeof VersioningConfiguration;
    constructor(properties: DatasetProperties);
}
