import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AttributeDefinition {
    AttributeType: Value<string>;
    AttributeName: Value<string>;
    constructor(properties: AttributeDefinition);
}
export declare class CapacityAutoScalingSettings {
    MinCapacity: Value<number>;
    SeedCapacity?: Value<number>;
    TargetTrackingScalingPolicyConfiguration: TargetTrackingScalingPolicyConfiguration;
    MaxCapacity: Value<number>;
    constructor(properties: CapacityAutoScalingSettings);
}
export declare class ContributorInsightsSpecification {
    Enabled: Value<boolean>;
    constructor(properties: ContributorInsightsSpecification);
}
export declare class GlobalSecondaryIndex {
    IndexName: Value<string>;
    Projection: Projection;
    KeySchema: List<KeySchema>;
    WriteProvisionedThroughputSettings?: WriteProvisionedThroughputSettings;
    constructor(properties: GlobalSecondaryIndex);
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
    ProjectionType?: Value<string>;
    NonKeyAttributes?: List<Value<string>>;
    constructor(properties: Projection);
}
export declare class ReadProvisionedThroughputSettings {
    ReadCapacityUnits?: Value<number>;
    ReadCapacityAutoScalingSettings?: CapacityAutoScalingSettings;
    constructor(properties: ReadProvisionedThroughputSettings);
}
export declare class ReplicaGlobalSecondaryIndexSpecification {
    IndexName: Value<string>;
    ContributorInsightsSpecification?: ContributorInsightsSpecification;
    ReadProvisionedThroughputSettings?: ReadProvisionedThroughputSettings;
    constructor(properties: ReplicaGlobalSecondaryIndexSpecification);
}
export declare class ReplicaSSESpecification {
    KMSMasterKeyId: Value<string>;
    constructor(properties: ReplicaSSESpecification);
}
export declare class ReplicaSpecification {
    SSESpecification?: ReplicaSSESpecification;
    KinesisStreamSpecification?: KinesisStreamSpecification;
    ContributorInsightsSpecification?: ContributorInsightsSpecification;
    GlobalSecondaryIndexes?: List<ReplicaGlobalSecondaryIndexSpecification>;
    Region: Value<string>;
    PointInTimeRecoverySpecification?: PointInTimeRecoverySpecification;
    ReadProvisionedThroughputSettings?: ReadProvisionedThroughputSettings;
    TableClass?: Value<string>;
    DeletionProtectionEnabled?: Value<boolean>;
    Tags?: List<ResourceTag>;
    constructor(properties: ReplicaSpecification);
}
export declare class SSESpecification {
    SSEEnabled: Value<boolean>;
    SSEType?: Value<string>;
    constructor(properties: SSESpecification);
}
export declare class StreamSpecification {
    StreamViewType: Value<string>;
    constructor(properties: StreamSpecification);
}
export declare class TargetTrackingScalingPolicyConfiguration {
    ScaleOutCooldown?: Value<number>;
    TargetValue: Value<number>;
    DisableScaleIn?: Value<boolean>;
    ScaleInCooldown?: Value<number>;
    constructor(properties: TargetTrackingScalingPolicyConfiguration);
}
export declare class TimeToLiveSpecification {
    Enabled: Value<boolean>;
    AttributeName?: Value<string>;
    constructor(properties: TimeToLiveSpecification);
}
export declare class WriteProvisionedThroughputSettings {
    WriteCapacityAutoScalingSettings?: CapacityAutoScalingSettings;
    constructor(properties: WriteProvisionedThroughputSettings);
}
export interface GlobalTableProperties {
    SSESpecification?: SSESpecification;
    TableName?: Value<string>;
    AttributeDefinitions: List<AttributeDefinition>;
    StreamSpecification?: StreamSpecification;
    BillingMode?: Value<string>;
    GlobalSecondaryIndexes?: List<GlobalSecondaryIndex>;
    KeySchema: List<KeySchema>;
    LocalSecondaryIndexes?: List<LocalSecondaryIndex>;
    Replicas: List<ReplicaSpecification>;
    WriteProvisionedThroughputSettings?: WriteProvisionedThroughputSettings;
    TimeToLiveSpecification?: TimeToLiveSpecification;
}
export default class GlobalTable extends ResourceBase<GlobalTableProperties> {
    static AttributeDefinition: typeof AttributeDefinition;
    static CapacityAutoScalingSettings: typeof CapacityAutoScalingSettings;
    static ContributorInsightsSpecification: typeof ContributorInsightsSpecification;
    static GlobalSecondaryIndex: typeof GlobalSecondaryIndex;
    static KeySchema: typeof KeySchema;
    static KinesisStreamSpecification: typeof KinesisStreamSpecification;
    static LocalSecondaryIndex: typeof LocalSecondaryIndex;
    static PointInTimeRecoverySpecification: typeof PointInTimeRecoverySpecification;
    static Projection: typeof Projection;
    static ReadProvisionedThroughputSettings: typeof ReadProvisionedThroughputSettings;
    static ReplicaGlobalSecondaryIndexSpecification: typeof ReplicaGlobalSecondaryIndexSpecification;
    static ReplicaSSESpecification: typeof ReplicaSSESpecification;
    static ReplicaSpecification: typeof ReplicaSpecification;
    static SSESpecification: typeof SSESpecification;
    static StreamSpecification: typeof StreamSpecification;
    static TargetTrackingScalingPolicyConfiguration: typeof TargetTrackingScalingPolicyConfiguration;
    static TimeToLiveSpecification: typeof TimeToLiveSpecification;
    static WriteProvisionedThroughputSettings: typeof WriteProvisionedThroughputSettings;
    constructor(properties: GlobalTableProperties);
}
