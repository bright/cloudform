import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class PointInTimeRecoverySpecification {
    PointInTimeRecoveryEnabled?: Value<boolean>;
    constructor(properties: PointInTimeRecoverySpecification);
}
export declare class ContributorInsightsSpecification {
    Enabled: Value<boolean>;
    constructor(properties: ContributorInsightsSpecification);
}
export declare class CapacityAutoScalingSettings {
    MinCapacity: Value<number>;
    MaxCapacity: Value<number>;
    SeedCapacity?: Value<number>;
    TargetTrackingScalingPolicyConfiguration: TargetTrackingScalingPolicyConfiguration;
    constructor(properties: CapacityAutoScalingSettings);
}
export declare class ReadProvisionedThroughputSettings {
    ReadCapacityUnits?: Value<number>;
    ReadCapacityAutoScalingSettings?: CapacityAutoScalingSettings;
    constructor(properties: ReadProvisionedThroughputSettings);
}
export declare class LocalSecondaryIndex {
    IndexName: Value<string>;
    KeySchema: List<KeySchema>;
    Projection: Projection;
    constructor(properties: LocalSecondaryIndex);
}
export declare class TargetTrackingScalingPolicyConfiguration {
    DisableScaleIn?: Value<boolean>;
    ScaleInCooldown?: Value<number>;
    ScaleOutCooldown?: Value<number>;
    TargetValue: Value<number>;
    constructor(properties: TargetTrackingScalingPolicyConfiguration);
}
export declare class ReplicaSpecification {
    Region: Value<string>;
    GlobalSecondaryIndexes?: List<ReplicaGlobalSecondaryIndexSpecification>;
    ContributorInsightsSpecification?: ContributorInsightsSpecification;
    PointInTimeRecoverySpecification?: PointInTimeRecoverySpecification;
    SSESpecification?: ReplicaSSESpecification;
    Tags?: List<ResourceTag>;
    ReadProvisionedThroughputSettings?: ReadProvisionedThroughputSettings;
    constructor(properties: ReplicaSpecification);
}
export declare class GlobalSecondaryIndex {
    IndexName: Value<string>;
    KeySchema: List<KeySchema>;
    Projection: Projection;
    WriteProvisionedThroughputSettings?: WriteProvisionedThroughputSettings;
    constructor(properties: GlobalSecondaryIndex);
}
export declare class KeySchema {
    AttributeName: Value<string>;
    KeyType: Value<string>;
    constructor(properties: KeySchema);
}
export declare class StreamSpecification {
    StreamViewType: Value<string>;
    constructor(properties: StreamSpecification);
}
export declare class Projection {
    NonKeyAttributes?: List<Value<string>>;
    ProjectionType?: Value<string>;
    constructor(properties: Projection);
}
export declare class ReplicaGlobalSecondaryIndexSpecification {
    IndexName: Value<string>;
    ContributorInsightsSpecification?: ContributorInsightsSpecification;
    ReadProvisionedThroughputSettings?: ReadProvisionedThroughputSettings;
    constructor(properties: ReplicaGlobalSecondaryIndexSpecification);
}
export declare class AttributeDefinition {
    AttributeName: Value<string>;
    AttributeType: Value<string>;
    constructor(properties: AttributeDefinition);
}
export declare class SSESpecification {
    SSEEnabled: Value<boolean>;
    SSEType?: Value<string>;
    constructor(properties: SSESpecification);
}
export declare class WriteProvisionedThroughputSettings {
    WriteCapacityAutoScalingSettings?: CapacityAutoScalingSettings;
    constructor(properties: WriteProvisionedThroughputSettings);
}
export declare class TimeToLiveSpecification {
    AttributeName?: Value<string>;
    Enabled: Value<boolean>;
    constructor(properties: TimeToLiveSpecification);
}
export declare class ReplicaSSESpecification {
    KMSMasterKeyId: Value<string>;
    constructor(properties: ReplicaSSESpecification);
}
export interface GlobalTableProperties {
    AttributeDefinitions: List<AttributeDefinition>;
    BillingMode?: Value<string>;
    GlobalSecondaryIndexes?: List<GlobalSecondaryIndex>;
    KeySchema: List<KeySchema>;
    LocalSecondaryIndexes?: List<LocalSecondaryIndex>;
    WriteProvisionedThroughputSettings?: WriteProvisionedThroughputSettings;
    Replicas: List<ReplicaSpecification>;
    SSESpecification?: SSESpecification;
    StreamSpecification?: StreamSpecification;
    TableName?: Value<string>;
    TimeToLiveSpecification?: TimeToLiveSpecification;
}
export default class GlobalTable extends ResourceBase<GlobalTableProperties> {
    static PointInTimeRecoverySpecification: typeof PointInTimeRecoverySpecification;
    static ContributorInsightsSpecification: typeof ContributorInsightsSpecification;
    static CapacityAutoScalingSettings: typeof CapacityAutoScalingSettings;
    static ReadProvisionedThroughputSettings: typeof ReadProvisionedThroughputSettings;
    static LocalSecondaryIndex: typeof LocalSecondaryIndex;
    static TargetTrackingScalingPolicyConfiguration: typeof TargetTrackingScalingPolicyConfiguration;
    static ReplicaSpecification: typeof ReplicaSpecification;
    static GlobalSecondaryIndex: typeof GlobalSecondaryIndex;
    static KeySchema: typeof KeySchema;
    static StreamSpecification: typeof StreamSpecification;
    static Projection: typeof Projection;
    static ReplicaGlobalSecondaryIndexSpecification: typeof ReplicaGlobalSecondaryIndexSpecification;
    static AttributeDefinition: typeof AttributeDefinition;
    static SSESpecification: typeof SSESpecification;
    static WriteProvisionedThroughputSettings: typeof WriteProvisionedThroughputSettings;
    static TimeToLiveSpecification: typeof TimeToLiveSpecification;
    static ReplicaSSESpecification: typeof ReplicaSSESpecification;
    constructor(properties: GlobalTableProperties);
}
