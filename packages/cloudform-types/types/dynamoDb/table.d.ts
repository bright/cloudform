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
export declare class AttributeDefinition {
    AttributeName: Value<string>;
    AttributeType: Value<string>;
    constructor(properties: AttributeDefinition);
}
export declare class ProvisionedThroughput {
    ReadCapacityUnits: Value<number>;
    WriteCapacityUnits: Value<number>;
    constructor(properties: ProvisionedThroughput);
}
export declare class GlobalSecondaryIndex {
    IndexName: Value<string>;
    KeySchema: List<KeySchema>;
    Projection: Projection;
    ProvisionedThroughput?: ProvisionedThroughput;
    constructor(properties: GlobalSecondaryIndex);
}
export declare class KeySchema {
    AttributeName: Value<string>;
    KeyType: Value<string>;
    constructor(properties: KeySchema);
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
    GlobalSecondaryIndexes?: List<GlobalSecondaryIndex>;
    KeySchema: List<KeySchema>;
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
    static SSESpecification: typeof SSESpecification;
    static TimeToLiveSpecification: typeof TimeToLiveSpecification;
    static AttributeDefinition: typeof AttributeDefinition;
    static ProvisionedThroughput: typeof ProvisionedThroughput;
    static GlobalSecondaryIndex: typeof GlobalSecondaryIndex;
    static KeySchema: typeof KeySchema;
    static Projection: typeof Projection;
    static StreamSpecification: typeof StreamSpecification;
    constructor(properties: TableProperties);
}
