import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DatasetContentVersionValue {
    DatasetName?: Value<string>;
    constructor(properties: DatasetContentVersionValue);
}
export declare class OutputFileUriValue {
    FileName?: Value<string>;
    constructor(properties: OutputFileUriValue);
}
export declare class QueryAction {
    Filters?: List<Filter>;
    SqlQuery: Value<string>;
    constructor(properties: QueryAction);
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
export declare class Trigger {
    Schedule?: Schedule;
    TriggeringDataset?: TriggeringDataset;
    constructor(properties: Trigger);
}
export declare class RetentionPeriod {
    NumberOfDays: Value<number>;
    Unlimited: Value<boolean>;
    constructor(properties: RetentionPeriod);
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
export interface DatasetProperties {
    Actions: List<Action>;
    DatasetName?: Value<string>;
    Triggers?: List<Trigger>;
    RetentionPeriod?: RetentionPeriod;
    Tags?: List<ResourceTag>;
}
export default class Dataset extends ResourceBase {
    static DatasetContentVersionValue: typeof DatasetContentVersionValue;
    static OutputFileUriValue: typeof OutputFileUriValue;
    static QueryAction: typeof QueryAction;
    static Variable: typeof Variable;
    static Filter: typeof Filter;
    static DeltaTime: typeof DeltaTime;
    static ResourceConfiguration: typeof ResourceConfiguration;
    static TriggeringDataset: typeof TriggeringDataset;
    static Schedule: typeof Schedule;
    static Trigger: typeof Trigger;
    static RetentionPeriod: typeof RetentionPeriod;
    static Action: typeof Action;
    static ContainerAction: typeof ContainerAction;
    constructor(properties?: DatasetProperties);
}
