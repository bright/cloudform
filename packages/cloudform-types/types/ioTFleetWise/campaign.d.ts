import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CollectionScheme {
    TimeBasedCollectionScheme?: TimeBasedCollectionScheme;
    ConditionBasedCollectionScheme?: ConditionBasedCollectionScheme;
    constructor(properties: CollectionScheme);
}
export declare class ConditionBasedCollectionScheme {
    MinimumTriggerIntervalMs?: Value<number>;
    Expression: Value<string>;
    TriggerMode?: Value<string>;
    ConditionLanguageVersion?: Value<number>;
    constructor(properties: ConditionBasedCollectionScheme);
}
export declare class DataDestinationConfig {
    S3Config?: S3Config;
    TimestreamConfig?: TimestreamConfig;
    constructor(properties: DataDestinationConfig);
}
export declare class S3Config {
    BucketArn: Value<string>;
    DataFormat?: Value<string>;
    StorageCompressionFormat?: Value<string>;
    Prefix?: Value<string>;
    constructor(properties: S3Config);
}
export declare class SignalInformation {
    MaxSampleCount?: Value<number>;
    MinimumSamplingIntervalMs?: Value<number>;
    Name: Value<string>;
    constructor(properties: SignalInformation);
}
export declare class TimeBasedCollectionScheme {
    PeriodMs: Value<number>;
    constructor(properties: TimeBasedCollectionScheme);
}
export declare class TimestreamConfig {
    ExecutionRoleArn: Value<string>;
    TimestreamTableArn: Value<string>;
    constructor(properties: TimestreamConfig);
}
export interface CampaignProperties {
    Action: Value<string>;
    Compression?: Value<string>;
    Description?: Value<string>;
    Priority?: Value<number>;
    SignalsToCollect?: List<SignalInformation>;
    StartTime?: Value<string>;
    ExpiryTime?: Value<string>;
    SpoolingMode?: Value<string>;
    DataDestinationConfigs?: List<DataDestinationConfig>;
    SignalCatalogArn: Value<string>;
    Name: Value<string>;
    PostTriggerCollectionDuration?: Value<number>;
    DataExtraDimensions?: List<Value<string>>;
    DiagnosticsMode?: Value<string>;
    TargetArn: Value<string>;
    CollectionScheme: CollectionScheme;
    Tags?: List<ResourceTag>;
}
export default class Campaign extends ResourceBase<CampaignProperties> {
    static CollectionScheme: typeof CollectionScheme;
    static ConditionBasedCollectionScheme: typeof ConditionBasedCollectionScheme;
    static DataDestinationConfig: typeof DataDestinationConfig;
    static S3Config: typeof S3Config;
    static SignalInformation: typeof SignalInformation;
    static TimeBasedCollectionScheme: typeof TimeBasedCollectionScheme;
    static TimestreamConfig: typeof TimestreamConfig;
    constructor(properties: CampaignProperties);
}
