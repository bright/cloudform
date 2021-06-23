/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class PointInTimeRecoverySpecification {
    PointInTimeRecoveryEnabled?: Value<boolean>

    constructor(properties: PointInTimeRecoverySpecification) {
        Object.assign(this, properties)
    }
}

export class ContributorInsightsSpecification {
    Enabled!: Value<boolean>

    constructor(properties: ContributorInsightsSpecification) {
        Object.assign(this, properties)
    }
}

export class CapacityAutoScalingSettings {
    MinCapacity!: Value<number>
    MaxCapacity!: Value<number>
    SeedCapacity?: Value<number>
    TargetTrackingScalingPolicyConfiguration!: TargetTrackingScalingPolicyConfiguration

    constructor(properties: CapacityAutoScalingSettings) {
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

export class LocalSecondaryIndex {
    IndexName!: Value<string>
    KeySchema!: List<KeySchema>
    Projection!: Projection

    constructor(properties: LocalSecondaryIndex) {
        Object.assign(this, properties)
    }
}

export class TargetTrackingScalingPolicyConfiguration {
    DisableScaleIn?: Value<boolean>
    ScaleInCooldown?: Value<number>
    ScaleOutCooldown?: Value<number>
    TargetValue!: Value<number>

    constructor(properties: TargetTrackingScalingPolicyConfiguration) {
        Object.assign(this, properties)
    }
}

export class ReplicaSpecification {
    Region!: Value<string>
    GlobalSecondaryIndexes?: List<ReplicaGlobalSecondaryIndexSpecification>
    ContributorInsightsSpecification?: ContributorInsightsSpecification
    PointInTimeRecoverySpecification?: PointInTimeRecoverySpecification
    SSESpecification?: ReplicaSSESpecification
    Tags?: List<ResourceTag>
    ReadProvisionedThroughputSettings?: ReadProvisionedThroughputSettings

    constructor(properties: ReplicaSpecification) {
        Object.assign(this, properties)
    }
}

export class GlobalSecondaryIndex {
    IndexName!: Value<string>
    KeySchema!: List<KeySchema>
    Projection!: Projection
    WriteProvisionedThroughputSettings?: WriteProvisionedThroughputSettings

    constructor(properties: GlobalSecondaryIndex) {
        Object.assign(this, properties)
    }
}

export class KeySchema {
    AttributeName!: Value<string>
    KeyType!: Value<string>

    constructor(properties: KeySchema) {
        Object.assign(this, properties)
    }
}

export class StreamSpecification {
    StreamViewType!: Value<string>

    constructor(properties: StreamSpecification) {
        Object.assign(this, properties)
    }
}

export class Projection {
    NonKeyAttributes?: List<Value<string>>
    ProjectionType?: Value<string>

    constructor(properties: Projection) {
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

export class AttributeDefinition {
    AttributeName!: Value<string>
    AttributeType!: Value<string>

    constructor(properties: AttributeDefinition) {
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

export class WriteProvisionedThroughputSettings {
    WriteCapacityAutoScalingSettings?: CapacityAutoScalingSettings

    constructor(properties: WriteProvisionedThroughputSettings) {
        Object.assign(this, properties)
    }
}

export class TimeToLiveSpecification {
    AttributeName?: Value<string>
    Enabled!: Value<boolean>

    constructor(properties: TimeToLiveSpecification) {
        Object.assign(this, properties)
    }
}

export class ReplicaSSESpecification {
    KMSMasterKeyId!: Value<string>

    constructor(properties: ReplicaSSESpecification) {
        Object.assign(this, properties)
    }
}

export interface GlobalTableProperties {
    AttributeDefinitions: List<AttributeDefinition>
    BillingMode?: Value<string>
    GlobalSecondaryIndexes?: List<GlobalSecondaryIndex>
    KeySchema: List<KeySchema>
    LocalSecondaryIndexes?: List<LocalSecondaryIndex>
    WriteProvisionedThroughputSettings?: WriteProvisionedThroughputSettings
    Replicas: List<ReplicaSpecification>
    SSESpecification?: SSESpecification
    StreamSpecification?: StreamSpecification
    TableName?: Value<string>
    TimeToLiveSpecification?: TimeToLiveSpecification
}

export default class GlobalTable extends ResourceBase<GlobalTableProperties> {
    static PointInTimeRecoverySpecification = PointInTimeRecoverySpecification
    static ContributorInsightsSpecification = ContributorInsightsSpecification
    static CapacityAutoScalingSettings = CapacityAutoScalingSettings
    static ReadProvisionedThroughputSettings = ReadProvisionedThroughputSettings
    static LocalSecondaryIndex = LocalSecondaryIndex
    static TargetTrackingScalingPolicyConfiguration = TargetTrackingScalingPolicyConfiguration
    static ReplicaSpecification = ReplicaSpecification
    static GlobalSecondaryIndex = GlobalSecondaryIndex
    static KeySchema = KeySchema
    static StreamSpecification = StreamSpecification
    static Projection = Projection
    static ReplicaGlobalSecondaryIndexSpecification = ReplicaGlobalSecondaryIndexSpecification
    static AttributeDefinition = AttributeDefinition
    static SSESpecification = SSESpecification
    static WriteProvisionedThroughputSettings = WriteProvisionedThroughputSettings
    static TimeToLiveSpecification = TimeToLiveSpecification
    static ReplicaSSESpecification = ReplicaSSESpecification

    constructor(properties: GlobalTableProperties) {
        super('AWS::DynamoDB::GlobalTable', properties)
    }
}
