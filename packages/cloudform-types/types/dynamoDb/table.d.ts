import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LocalSecondaryIndex {
    IndexName: Value<string>;
    KeySchema: List<KeySchema>;
    Projection: Projection;
    constructor(properties: LocalSecondaryIndex);
}
export declare class PointInTimeRecoverySpecification {
    PointInTimeRecoveryEnabled?: Value<boolean>;
    constructor(properties: PointInTimeRecoverySpecification);
}
export declare class KinesisStreamSpecification {
    StreamArn: Value<string>;
    constructor(properties: KinesisStreamSpecification);
}
export declare class AttributeDefinition {
    AttributeName: Value<string>;
    AttributeType: Value<string>;
    constructor(properties: AttributeDefinition);
}
export declare class GlobalSecondaryIndex {
    ContributorInsightsSpecification?: ContributorInsightsSpecification;
    IndexName: Value<string>;
    KeySchema: List<KeySchema>;
    Projection: Projection;
    ProvisionedThroughput?: ProvisionedThroughput;
    constructor(properties: GlobalSecondaryIndex);
}
export declare class ContributorInsightsSpecification {
    Enabled: Value<boolean>;
    constructor(properties: ContributorInsightsSpecification);
}
export declare class KeySchema {
    AttributeName: Value<string>;
    KeyType: Value<string>;
    constructor(properties: KeySchema);
}
export declare class SSESpecification {
    KMSMasterKeyId?: Value<string>;
    SSEEnabled: Value<boolean>;
    SSEType?: Value<string>;
    constructor(properties: SSESpecification);
}
export declare class TimeToLiveSpecification {
    AttributeName: Value<string>;
    Enabled: Value<boolean>;
    constructor(properties: TimeToLiveSpecification);
}
export declare class ProvisionedThroughput {
    ReadCapacityUnits: Value<number>;
    WriteCapacityUnits: Value<number>;
    constructor(properties: ProvisionedThroughput);
}
export declare class Projection {
    NonKeyAttributes?: List<Value<string>>;
    ProjectionType?: Value<string>;
    constructor(properties: Projection);
}
export declare class StreamSpecification {
    StreamViewType: Value<string>;
    constructor(properties: StreamSpecification);
}
export interface TableProperties {
    AttributeDefinitions?: List<AttributeDefinition>;
    BillingMode?: Value<string>;
    ContributorInsightsSpecification?: ContributorInsightsSpecification;
    GlobalSecondaryIndexes?: List<GlobalSecondaryIndex>;
    KeySchema: List<KeySchema>;
    KinesisStreamSpecification?: KinesisStreamSpecification;
    LocalSecondaryIndexes?: List<LocalSecondaryIndex>;
    PointInTimeRecoverySpecification?: PointInTimeRecoverySpecification;
    ProvisionedThroughput?: ProvisionedThroughput;
    SSESpecification?: SSESpecification;
    StreamSpecification?: StreamSpecification;
    TableName?: Value<string>;
    Tags?: List<ResourceTag>;
    TimeToLiveSpecification?: TimeToLiveSpecification;
}
export default class Table extends ResourceBase<TableProperties> {
    static LocalSecondaryIndex: typeof LocalSecondaryIndex;
    static PointInTimeRecoverySpecification: typeof PointInTimeRecoverySpecification;
    static KinesisStreamSpecification: typeof KinesisStreamSpecification;
    static AttributeDefinition: typeof AttributeDefinition;
    static GlobalSecondaryIndex: typeof GlobalSecondaryIndex;
    static ContributorInsightsSpecification: typeof ContributorInsightsSpecification;
    static KeySchema: typeof KeySchema;
    static SSESpecification: typeof SSESpecification;
    static TimeToLiveSpecification: typeof TimeToLiveSpecification;
    static ProvisionedThroughput: typeof ProvisionedThroughput;
    static Projection: typeof Projection;
    static StreamSpecification: typeof StreamSpecification;
    constructor(properties: TableProperties);
}
