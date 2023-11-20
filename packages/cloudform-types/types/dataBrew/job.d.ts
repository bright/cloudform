import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AllowedStatistics {
    Statistics: List<Value<string>>;
    constructor(properties: AllowedStatistics);
}
export declare class ColumnSelector {
    Regex?: Value<string>;
    Name?: Value<string>;
    constructor(properties: ColumnSelector);
}
export declare class ColumnStatisticsConfiguration {
    Statistics: StatisticsConfiguration;
    Selectors?: List<ColumnSelector>;
    constructor(properties: ColumnStatisticsConfiguration);
}
export declare class CsvOutputOptions {
    Delimiter?: Value<string>;
    constructor(properties: CsvOutputOptions);
}
export declare class DataCatalogOutput {
    TableName: Value<string>;
    Overwrite?: Value<boolean>;
    S3Options?: S3TableOutputOptions;
    DatabaseOptions?: DatabaseTableOutputOptions;
    DatabaseName: Value<string>;
    CatalogId?: Value<string>;
    constructor(properties: DataCatalogOutput);
}
export declare class DatabaseOutput {
    DatabaseOutputMode?: Value<string>;
    DatabaseOptions: DatabaseTableOutputOptions;
    GlueConnectionName: Value<string>;
    constructor(properties: DatabaseOutput);
}
export declare class DatabaseTableOutputOptions {
    TempDirectory?: S3Location;
    TableName: Value<string>;
    constructor(properties: DatabaseTableOutputOptions);
}
export declare class EntityDetectorConfiguration {
    EntityTypes: List<Value<string>>;
    AllowedStatistics?: AllowedStatistics;
    constructor(properties: EntityDetectorConfiguration);
}
export declare class JobSample {
    Size?: Value<number>;
    Mode?: Value<string>;
    constructor(properties: JobSample);
}
export declare class Output {
    Overwrite?: Value<boolean>;
    Format?: Value<string>;
    MaxOutputFiles?: Value<number>;
    CompressionFormat?: Value<string>;
    PartitionColumns?: List<Value<string>>;
    FormatOptions?: OutputFormatOptions;
    Location: S3Location;
    constructor(properties: Output);
}
export declare class OutputFormatOptions {
    Csv?: CsvOutputOptions;
    constructor(properties: OutputFormatOptions);
}
export declare class OutputLocation {
    Bucket: Value<string>;
    BucketOwner?: Value<string>;
    Key?: Value<string>;
    constructor(properties: OutputLocation);
}
export declare class ProfileConfiguration {
    ProfileColumns?: List<ColumnSelector>;
    DatasetStatisticsConfiguration?: StatisticsConfiguration;
    ColumnStatisticsConfigurations?: List<ColumnStatisticsConfiguration>;
    EntityDetectorConfiguration?: EntityDetectorConfiguration;
    constructor(properties: ProfileConfiguration);
}
export declare class Recipe {
    Version?: Value<string>;
    Name: Value<string>;
    constructor(properties: Recipe);
}
export declare class S3Location {
    Bucket: Value<string>;
    BucketOwner?: Value<string>;
    Key?: Value<string>;
    constructor(properties: S3Location);
}
export declare class S3TableOutputOptions {
    Location: S3Location;
    constructor(properties: S3TableOutputOptions);
}
export declare class StatisticOverride {
    Parameters: {
        [key: string]: Value<string>;
    };
    Statistic: Value<string>;
    constructor(properties: StatisticOverride);
}
export declare class StatisticsConfiguration {
    IncludedStatistics?: List<Value<string>>;
    Overrides?: List<StatisticOverride>;
    constructor(properties: StatisticsConfiguration);
}
export declare class ValidationConfiguration {
    RulesetArn: Value<string>;
    ValidationMode?: Value<string>;
    constructor(properties: ValidationConfiguration);
}
export interface JobProperties {
    MaxRetries?: Value<number>;
    ProjectName?: Value<string>;
    Recipe?: Recipe;
    EncryptionKeyArn?: Value<string>;
    LogSubscription?: Value<string>;
    Timeout?: Value<number>;
    DatabaseOutputs?: List<DatabaseOutput>;
    OutputLocation?: OutputLocation;
    RoleArn: Value<string>;
    Name: Value<string>;
    Type: Value<string>;
    DatasetName?: Value<string>;
    ProfileConfiguration?: ProfileConfiguration;
    Outputs?: List<Output>;
    ValidationConfigurations?: List<ValidationConfiguration>;
    Tags?: List<ResourceTag>;
    JobSample?: JobSample;
    EncryptionMode?: Value<string>;
    MaxCapacity?: Value<number>;
    DataCatalogOutputs?: List<DataCatalogOutput>;
}
export default class Job extends ResourceBase<JobProperties> {
    static AllowedStatistics: typeof AllowedStatistics;
    static ColumnSelector: typeof ColumnSelector;
    static ColumnStatisticsConfiguration: typeof ColumnStatisticsConfiguration;
    static CsvOutputOptions: typeof CsvOutputOptions;
    static DataCatalogOutput: typeof DataCatalogOutput;
    static DatabaseOutput: typeof DatabaseOutput;
    static DatabaseTableOutputOptions: typeof DatabaseTableOutputOptions;
    static EntityDetectorConfiguration: typeof EntityDetectorConfiguration;
    static JobSample: typeof JobSample;
    static Output: typeof Output;
    static OutputFormatOptions: typeof OutputFormatOptions;
    static OutputLocation: typeof OutputLocation;
    static ProfileConfiguration: typeof ProfileConfiguration;
    static Recipe: typeof Recipe;
    static S3Location: typeof S3Location;
    static S3TableOutputOptions: typeof S3TableOutputOptions;
    static StatisticOverride: typeof StatisticOverride;
    static StatisticsConfiguration: typeof StatisticsConfiguration;
    static ValidationConfiguration: typeof ValidationConfiguration;
    constructor(properties: JobProperties);
}
