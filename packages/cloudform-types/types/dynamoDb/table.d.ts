import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AttributeDefinition {
    AttributeType: Value<string>;
    AttributeName: Value<string>;
    constructor(properties: AttributeDefinition);
}
export declare class ContributorInsightsSpecification {
    Enabled: Value<boolean>;
    constructor(properties: ContributorInsightsSpecification);
}
export declare class Csv {
    Delimiter?: Value<string>;
    HeaderList?: List<Value<string>>;
    constructor(properties: Csv);
}
export declare class GlobalSecondaryIndex {
    IndexName: Value<string>;
    ContributorInsightsSpecification?: ContributorInsightsSpecification;
    Projection: Projection;
    ProvisionedThroughput?: ProvisionedThroughput;
    KeySchema: List<KeySchema>;
    constructor(properties: GlobalSecondaryIndex);
}
export declare class ImportSourceSpecification {
    S3BucketSource: S3BucketSource;
    InputFormat: Value<string>;
    InputFormatOptions?: InputFormatOptions;
    InputCompressionType?: Value<string>;
    constructor(properties: ImportSourceSpecification);
}
export declare class InputFormatOptions {
    Csv?: Csv;
    constructor(properties: InputFormatOptions);
}
export declare class KeySchema {
    KeyType: Value<string>;
    AttributeName: Value<string>;
    constructor(properties: KeySchema);
}
export declare class KinesisStreamSpecification {
    StreamArn: Value<string>;
    constructor(properties: KinesisStreamSpecification);
}
export declare class LocalSecondaryIndex {
    IndexName: Value<string>;
    Projection: Projection;
    KeySchema: List<KeySchema>;
    constructor(properties: LocalSecondaryIndex);
}
export declare class PointInTimeRecoverySpecification {
    PointInTimeRecoveryEnabled?: Value<boolean>;
    constructor(properties: PointInTimeRecoverySpecification);
}
export declare class Projection {
    NonKeyAttributes?: List<Value<string>>;
    ProjectionType?: Value<string>;
    constructor(properties: Projection);
}
export declare class ProvisionedThroughput {
    WriteCapacityUnits: Value<number>;
    ReadCapacityUnits: Value<number>;
    constructor(properties: ProvisionedThroughput);
}
export declare class S3BucketSource {
    S3Bucket: Value<string>;
    S3KeyPrefix?: Value<string>;
    S3BucketOwner?: Value<string>;
    constructor(properties: S3BucketSource);
}
export declare class SSESpecification {
    SSEEnabled: Value<boolean>;
    SSEType?: Value<string>;
    KMSMasterKeyId?: Value<string>;
    constructor(properties: SSESpecification);
}
export declare class StreamSpecification {
    StreamViewType: Value<string>;
    constructor(properties: StreamSpecification);
}
export declare class TimeToLiveSpecification {
    Enabled: Value<boolean>;
    AttributeName?: Value<string>;
    constructor(properties: TimeToLiveSpecification);
}
export interface TableProperties {
    SSESpecification?: SSESpecification;
    KinesisStreamSpecification?: KinesisStreamSpecification;
    StreamSpecification?: StreamSpecification;
    ContributorInsightsSpecification?: ContributorInsightsSpecification;
    ImportSourceSpecification?: ImportSourceSpecification;
    PointInTimeRecoverySpecification?: PointInTimeRecoverySpecification;
    ProvisionedThroughput?: ProvisionedThroughput;
    TableName?: Value<string>;
    AttributeDefinitions?: List<AttributeDefinition>;
    BillingMode?: Value<string>;
    GlobalSecondaryIndexes?: List<GlobalSecondaryIndex>;
    KeySchema: List<KeySchema>;
    LocalSecondaryIndexes?: List<LocalSecondaryIndex>;
    DeletionProtectionEnabled?: Value<boolean>;
    TableClass?: Value<string>;
    Tags?: List<ResourceTag>;
    TimeToLiveSpecification?: TimeToLiveSpecification;
}
export default class Table extends ResourceBase<TableProperties> {
    static AttributeDefinition: typeof AttributeDefinition;
    static ContributorInsightsSpecification: typeof ContributorInsightsSpecification;
    static Csv: typeof Csv;
    static GlobalSecondaryIndex: typeof GlobalSecondaryIndex;
    static ImportSourceSpecification: typeof ImportSourceSpecification;
    static InputFormatOptions: typeof InputFormatOptions;
    static KeySchema: typeof KeySchema;
    static KinesisStreamSpecification: typeof KinesisStreamSpecification;
    static LocalSecondaryIndex: typeof LocalSecondaryIndex;
    static PointInTimeRecoverySpecification: typeof PointInTimeRecoverySpecification;
    static Projection: typeof Projection;
    static ProvisionedThroughput: typeof ProvisionedThroughput;
    static S3BucketSource: typeof S3BucketSource;
    static SSESpecification: typeof SSESpecification;
    static StreamSpecification: typeof StreamSpecification;
    static TimeToLiveSpecification: typeof TimeToLiveSpecification;
    constructor(properties: TableProperties);
}
