import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DatasetContentVersionValue {
    DatasetName?: Value<string>;
    constructor(properties: DatasetContentVersionValue);
}
export declare class GlueConfiguration {
    TableName: Value<string>;
    DatabaseName: Value<string>;
    constructor(properties: GlueConfiguration);
}
export declare class OutputFileUriValue {
    FileName?: Value<string>;
    constructor(properties: OutputFileUriValue);
}
export declare class Variable {
    DatasetContentVersionValue?: DatasetContentVersionValue;
    DoubleValue?: Value<number>;
    OutputFileUriValue?: OutputFileUriValue;
    VariableName: Value<string>;
    StringValue?: Value<string>;
    constructor(properties: Variable);
}
export declare class Filter {
    DeltaTime?: DeltaTime;
    constructor(properties: Filter);
}
export declare class DeltaTime {
    TimeExpression: Value<string>;
    OffsetSeconds: Value<number>;
    constructor(properties: DeltaTime);
}
export declare class DatasetContentDeliveryRule {
    Destination: DatasetContentDeliveryRuleDestination;
    EntryName?: Value<string>;
    constructor(properties: DatasetContentDeliveryRule);
}
export declare class Trigger {
    Schedule?: Schedule;
    TriggeringDataset?: TriggeringDataset;
    constructor(properties: Trigger);
}
export declare class IotEventsDestinationConfiguration {
    InputName: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: IotEventsDestinationConfiguration);
}
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
export declare class QueryAction {
    Filters?: List<Filter>;
    SqlQuery: Value<string>;
    constructor(properties: QueryAction);
}
export declare class DatasetContentDeliveryRuleDestination {
    IotEventsDestinationConfiguration?: IotEventsDestinationConfiguration;
    S3DestinationConfiguration?: S3DestinationConfiguration;
    constructor(properties: DatasetContentDeliveryRuleDestination);
}
export declare class VersioningConfiguration {
    MaxVersions?: Value<number>;
    Unlimited?: Value<boolean>;
    constructor(properties: VersioningConfiguration);
}
export declare class ResourceConfiguration {
    VolumeSizeInGB: Value<number>;
    ComputeType: Value<string>;
    constructor(properties: ResourceConfiguration);
}
export declare class TriggeringDataset {
    DatasetName: Value<string>;
    constructor(properties: TriggeringDataset);
}
export declare class Schedule {
    ScheduleExpression: Value<string>;
    constructor(properties: Schedule);
}
export declare class RetentionPeriod {
    NumberOfDays: Value<number>;
    Unlimited: Value<boolean>;
    constructor(properties: RetentionPeriod);
}
export declare class S3DestinationConfiguration {
    GlueConfiguration?: GlueConfiguration;
    Bucket: Value<string>;
    Key: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: S3DestinationConfiguration);
}
export interface DatasetProperties {
    Actions: List<Action>;
    DatasetName?: Value<string>;
    ContentDeliveryRules?: List<DatasetContentDeliveryRule>;
    Triggers?: List<Trigger>;
    VersioningConfiguration?: VersioningConfiguration;
    RetentionPeriod?: RetentionPeriod;
    Tags?: List<ResourceTag>;
}
export default class Dataset extends ResourceBase<DatasetProperties> {
    static DatasetContentVersionValue: typeof DatasetContentVersionValue;
    static GlueConfiguration: typeof GlueConfiguration;
    static OutputFileUriValue: typeof OutputFileUriValue;
    static Variable: typeof Variable;
    static Filter: typeof Filter;
    static DeltaTime: typeof DeltaTime;
    static DatasetContentDeliveryRule: typeof DatasetContentDeliveryRule;
    static Trigger: typeof Trigger;
    static IotEventsDestinationConfiguration: typeof IotEventsDestinationConfiguration;
    static Action: typeof Action;
    static ContainerAction: typeof ContainerAction;
    static QueryAction: typeof QueryAction;
    static DatasetContentDeliveryRuleDestination: typeof DatasetContentDeliveryRuleDestination;
    static VersioningConfiguration: typeof VersioningConfiguration;
    static ResourceConfiguration: typeof ResourceConfiguration;
    static TriggeringDataset: typeof TriggeringDataset;
    static Schedule: typeof Schedule;
    static RetentionPeriod: typeof RetentionPeriod;
    static S3DestinationConfiguration: typeof S3DestinationConfiguration;
    constructor(properties: DatasetProperties);
}
