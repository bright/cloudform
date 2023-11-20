/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AttributeDefinition {
    AttributeType!: Value<string>
    AttributeName!: Value<string>

    constructor(properties: AttributeDefinition) {
        Object.assign(this, properties)
    }
}

export class CapacityAutoScalingSettings {
    MinCapacity!: Value<number>
    SeedCapacity?: Value<number>
    TargetTrackingScalingPolicyConfiguration!: TargetTrackingScalingPolicyConfiguration
    MaxCapacity!: Value<number>

    constructor(properties: CapacityAutoScalingSettings) {
        Object.assign(this, properties)
    }
}

export class ContributorInsightsSpecification {
    Enabled!: Value<boolean>

    constructor(properties: ContributorInsightsSpecification) {
        Object.assign(this, properties)
    }
}

export class GlobalSecondaryIndex {
    IndexName!: Value<string>
    Projection!: Projection
    KeySchema!: List<KeySchema>
    WriteProvisionedThroughputSettings?: WriteProvisionedThroughputSettings

    constructor(properties: GlobalSecondaryIndex) {
        Object.assign(this, properties)
    }
}

export class KeySchema {
    KeyType!: Value<string>
    AttributeName!: Value<string>

    constructor(properties: KeySchema) {
        Object.assign(this, properties)
    }
}

export class KinesisStreamSpecification {
    StreamArn!: Value<string>

    constructor(properties: KinesisStreamSpecification) {
        Object.assign(this, properties)
    }
}

export class LocalSecondaryIndex {
    IndexName!: Value<string>
    Projection!: Projection
    KeySchema!: List<KeySchema>

    constructor(properties: LocalSecondaryIndex) {
        Object.assign(this, properties)
    }
}

export class PointInTimeRecoverySpecification {
    PointInTimeRecoveryEnabled?: Value<boolean>

    constructor(properties: PointInTimeRecoverySpecification) {
        Object.assign(this, properties)
    }
}

export class Projection {
    ProjectionType?: Value<string>
    NonKeyAttributes?: List<Value<string>>

    constructor(properties: Projection) {
        Object.assign(this, properties)
    }
}

export class ReadProvisionedThroughputSettings {
    ReadCapacityUnits?: Value<number>
    ReadCapacityAutoScalingSettings?: CapacityAutoScalingSettings

    constructor(properties: ReadProvisionedThroughputSettings) {
        Object.assign(this, properties)
    }
}

export class ReplicaGlobalSecondaryIndexSpecification {
    IndexName!: Value<string>
    ContributorInsightsSpecification?: ContributorInsightsSpecification
    ReadProvisionedThroughputSettings?: ReadProvisionedThroughputSettings

    constructor(properties: ReplicaGlobalSecondaryIndexSpecification) {
        Object.assign(this, properties)
    }
}

export class ReplicaSSESpecification {
    KMSMasterKeyId!: Value<string>

    constructor(properties: ReplicaSSESpecification) {
        Object.assign(this, properties)
    }
}

export class ReplicaSpecification {
    SSESpecification?: ReplicaSSESpecification
    KinesisStreamSpecification?: KinesisStreamSpecification
    ContributorInsightsSpecification?: ContributorInsightsSpecification
    GlobalSecondaryIndexes?: List<ReplicaGlobalSecondaryIndexSpecification>
    Region!: Value<string>
    PointInTimeRecoverySpecification?: PointInTimeRecoverySpecification
    ReadProvisionedThroughputSettings?: ReadProvisionedThroughputSettings
    TableClass?: Value<string>
    DeletionProtectionEnabled?: Value<boolean>
    Tags?: List<ResourceTag>

    constructor(properties: ReplicaSpecification) {
        Object.assign(this, properties)
    }
}

export class SSESpecification {
    SSEEnabled!: Value<boolean>
    SSEType?: Value<string>

    constructor(properties: SSESpecification) {
        Object.assign(this, properties)
    }
}

export class StreamSpecification {
    StreamViewType!: Value<string>

    constructor(properties: StreamSpecification) {
        Object.assign(this, properties)
    }
}

export class TargetTrackingScalingPolicyConfiguration {
    ScaleOutCooldown?: Value<number>
    TargetValue!: Value<number>
    DisableScaleIn?: Value<boolean>
    ScaleInCooldown?: Value<number>

    constructor(properties: TargetTrackingScalingPolicyConfiguration) {
        Object.assign(this, properties)
    }
}

export class TimeToLiveSpecification {
    Enabled!: Value<boolean>
    AttributeName?: Value<string>

    constructor(properties: TimeToLiveSpecification) {
        Object.assign(this, properties)
    }
}

export class WriteProvisionedThroughputSettings {
    WriteCapacityAutoScalingSettings?: CapacityAutoScalingSettings

    constructor(properties: WriteProvisionedThroughputSettings) {
        Object.assign(this, properties)
    }
}

export interface GlobalTableProperties {
    SSESpecification?: SSESpecification
    TableName?: Value<string>
    AttributeDefinitions: List<AttributeDefinition>
    StreamSpecification?: StreamSpecification
    BillingMode?: Value<string>
    GlobalSecondaryIndexes?: List<GlobalSecondaryIndex>
    KeySchema: List<KeySchema>
    LocalSecondaryIndexes?: List<LocalSecondaryIndex>
    Replicas: List<ReplicaSpecification>
    WriteProvisionedThroughputSettings?: WriteProvisionedThroughputSettings
    TimeToLiveSpecification?: TimeToLiveSpecification
}

export default class GlobalTable extends ResourceBase<GlobalTableProperties> {
    static AttributeDefinition = AttributeDefinition
    static CapacityAutoScalingSettings = CapacityAutoScalingSettings
    static ContributorInsightsSpecification = ContributorInsightsSpecification
    static GlobalSecondaryIndex = GlobalSecondaryIndex
    static KeySchema = KeySchema
    static KinesisStreamSpecification = KinesisStreamSpecification
    static LocalSecondaryIndex = LocalSecondaryIndex
    static PointInTimeRecoverySpecification = PointInTimeRecoverySpecification
    static Projection = Projection
    static ReadProvisionedThroughputSettings = ReadProvisionedThroughputSettings
    static ReplicaGlobalSecondaryIndexSpecification = ReplicaGlobalSecondaryIndexSpecification
    static ReplicaSSESpecification = ReplicaSSESpecification
    static ReplicaSpecification = ReplicaSpecification
    static SSESpecification = SSESpecification
    static StreamSpecification = StreamSpecification
    static TargetTrackingScalingPolicyConfiguration = TargetTrackingScalingPolicyConfiguration
    static TimeToLiveSpecification = TimeToLiveSpecification
    static WriteProvisionedThroughputSettings = WriteProvisionedThroughputSettings

    constructor(properties: GlobalTableProperties) {
        super('AWS::DynamoDB::GlobalTable', properties)
    }
}
