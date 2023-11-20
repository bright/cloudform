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

export class AwsVpcConfiguration {
    SecurityGroups?: List<Value<string>>
    Subnets!: List<Value<string>>
    AssignPublicIp?: Value<string>

    constructor(properties: AwsVpcConfiguration) {
        Object.assign(this, properties)
    }
}

export class BatchArrayProperties {
    Size?: Value<number>

    constructor(properties: BatchArrayProperties) {
        Object.assign(this, properties)
    }
}

export class BatchContainerOverrides {
    Command?: List<Value<string>>
    Environment?: List<BatchEnvironmentVariable>
    InstanceType?: Value<string>
    ResourceRequirements?: List<BatchResourceRequirement>

    constructor(properties: BatchContainerOverrides) {
        Object.assign(this, properties)
    }
}

export class BatchEnvironmentVariable {
    Value?: Value<string>
    Name?: Value<string>

    constructor(properties: BatchEnvironmentVariable) {
        Object.assign(this, properties)
    }
}

export class BatchJobDependency {
    Type?: Value<string>
    JobId?: Value<string>

    constructor(properties: BatchJobDependency) {
        Object.assign(this, properties)
    }
}

export class BatchResourceRequirement {
    Type!: Value<string>
    Value!: Value<string>

    constructor(properties: BatchResourceRequirement) {
        Object.assign(this, properties)
    }
}

export class BatchRetryStrategy {
    Attempts?: Value<number>

    constructor(properties: BatchRetryStrategy) {
        Object.assign(this, properties)
    }
}

export class CapacityProviderStrategyItem {
    CapacityProvider!: Value<string>
    Weight?: Value<number>
    Base?: Value<number>

    constructor(properties: CapacityProviderStrategyItem) {
        Object.assign(this, properties)
    }
}

export class DeadLetterConfig {
    Arn?: Value<string>

    constructor(properties: DeadLetterConfig) {
        Object.assign(this, properties)
    }
}

export class EcsContainerOverride {
    MemoryReservation?: Value<number>
    Command?: List<Value<string>>
    Memory?: Value<number>
    Cpu?: Value<number>
    Environment?: List<EcsEnvironmentVariable>
    ResourceRequirements?: List<EcsResourceRequirement>
    EnvironmentFiles?: List<EcsEnvironmentFile>
    Name?: Value<string>

    constructor(properties: EcsContainerOverride) {
        Object.assign(this, properties)
    }
}

export class EcsEnvironmentFile {
    Type!: Value<string>
    Value!: Value<string>

    constructor(properties: EcsEnvironmentFile) {
        Object.assign(this, properties)
    }
}

export class EcsEnvironmentVariable {
    Value?: Value<string>
    Name?: Value<string>

    constructor(properties: EcsEnvironmentVariable) {
        Object.assign(this, properties)
    }
}

export class EcsEphemeralStorage {
    SizeInGiB!: Value<number>

    constructor(properties: EcsEphemeralStorage) {
        Object.assign(this, properties)
    }
}

export class EcsInferenceAcceleratorOverride {
    DeviceType?: Value<string>
    DeviceName?: Value<string>

    constructor(properties: EcsInferenceAcceleratorOverride) {
        Object.assign(this, properties)
    }
}

export class EcsResourceRequirement {
    Type!: Value<string>
    Value!: Value<string>

    constructor(properties: EcsResourceRequirement) {
        Object.assign(this, properties)
    }
}

export class EcsTaskOverride {
    ExecutionRoleArn?: Value<string>
    TaskRoleArn?: Value<string>
    Memory?: Value<string>
    Cpu?: Value<string>
    InferenceAcceleratorOverrides?: List<EcsInferenceAcceleratorOverride>
    EphemeralStorage?: EcsEphemeralStorage
    ContainerOverrides?: List<EcsContainerOverride>

    constructor(properties: EcsTaskOverride) {
        Object.assign(this, properties)
    }
}

export class Filter {
    Pattern?: Value<string>

    constructor(properties: Filter) {
        Object.assign(this, properties)
    }
}

export class FilterCriteria {
    Filters?: List<Filter>

    constructor(properties: FilterCriteria) {
        Object.assign(this, properties)
    }
}

export class MQBrokerAccessCredentials {
    BasicAuth!: Value<string>

    constructor(properties: MQBrokerAccessCredentials) {
        Object.assign(this, properties)
    }
}

export class MSKAccessCredentials {
    ClientCertificateTlsAuth?: Value<string>
    SaslScram512Auth?: Value<string>

    constructor(properties: MSKAccessCredentials) {
        Object.assign(this, properties)
    }
}

export class NetworkConfiguration {
    AwsvpcConfiguration?: AwsVpcConfiguration

    constructor(properties: NetworkConfiguration) {
        Object.assign(this, properties)
    }
}

export class PipeEnrichmentHttpParameters {
    PathParameterValues?: List<Value<string>>
    HeaderParameters?: {[key: string]: Value<string>}
    QueryStringParameters?: {[key: string]: Value<string>}

    constructor(properties: PipeEnrichmentHttpParameters) {
        Object.assign(this, properties)
    }
}

export class PipeEnrichmentParameters {
    HttpParameters?: PipeEnrichmentHttpParameters
    InputTemplate?: Value<string>

    constructor(properties: PipeEnrichmentParameters) {
        Object.assign(this, properties)
    }
}

export class PipeSourceActiveMQBrokerParameters {
    BatchSize?: Value<number>
    QueueName!: Value<string>
    Credentials!: MQBrokerAccessCredentials
    MaximumBatchingWindowInSeconds?: Value<number>

    constructor(properties: PipeSourceActiveMQBrokerParameters) {
        Object.assign(this, properties)
    }
}

export class PipeSourceDynamoDBStreamParameters {
    StartingPosition!: Value<string>
    BatchSize?: Value<number>
    MaximumRetryAttempts?: Value<number>
    OnPartialBatchItemFailure?: Value<string>
    DeadLetterConfig?: DeadLetterConfig
    ParallelizationFactor?: Value<number>
    MaximumRecordAgeInSeconds?: Value<number>
    MaximumBatchingWindowInSeconds?: Value<number>

    constructor(properties: PipeSourceDynamoDBStreamParameters) {
        Object.assign(this, properties)
    }
}

export class PipeSourceKinesisStreamParameters {
    StartingPosition!: Value<string>
    BatchSize?: Value<number>
    MaximumRetryAttempts?: Value<number>
    OnPartialBatchItemFailure?: Value<string>
    DeadLetterConfig?: DeadLetterConfig
    ParallelizationFactor?: Value<number>
    MaximumRecordAgeInSeconds?: Value<number>
    StartingPositionTimestamp?: Value<string>
    MaximumBatchingWindowInSeconds?: Value<number>

    constructor(properties: PipeSourceKinesisStreamParameters) {
        Object.assign(this, properties)
    }
}

export class PipeSourceManagedStreamingKafkaParameters {
    StartingPosition?: Value<string>
    BatchSize?: Value<number>
    ConsumerGroupID?: Value<string>
    Credentials?: MSKAccessCredentials
    TopicName!: Value<string>
    MaximumBatchingWindowInSeconds?: Value<number>

    constructor(properties: PipeSourceManagedStreamingKafkaParameters) {
        Object.assign(this, properties)
    }
}

export class PipeSourceParameters {
    ManagedStreamingKafkaParameters?: PipeSourceManagedStreamingKafkaParameters
    DynamoDBStreamParameters?: PipeSourceDynamoDBStreamParameters
    SelfManagedKafkaParameters?: PipeSourceSelfManagedKafkaParameters
    RabbitMQBrokerParameters?: PipeSourceRabbitMQBrokerParameters
    SqsQueueParameters?: PipeSourceSqsQueueParameters
    KinesisStreamParameters?: PipeSourceKinesisStreamParameters
    FilterCriteria?: FilterCriteria
    ActiveMQBrokerParameters?: PipeSourceActiveMQBrokerParameters

    constructor(properties: PipeSourceParameters) {
        Object.assign(this, properties)
    }
}

export class PipeSourceRabbitMQBrokerParameters {
    BatchSize?: Value<number>
    VirtualHost?: Value<string>
    QueueName!: Value<string>
    Credentials!: MQBrokerAccessCredentials
    MaximumBatchingWindowInSeconds?: Value<number>

    constructor(properties: PipeSourceRabbitMQBrokerParameters) {
        Object.assign(this, properties)
    }
}

export class PipeSourceSelfManagedKafkaParameters {
    StartingPosition?: Value<string>
    BatchSize?: Value<number>
    ConsumerGroupID?: Value<string>
    AdditionalBootstrapServers?: List<Value<string>>
    Vpc?: SelfManagedKafkaAccessConfigurationVpc
    Credentials?: SelfManagedKafkaAccessConfigurationCredentials
    ServerRootCaCertificate?: Value<string>
    TopicName!: Value<string>
    MaximumBatchingWindowInSeconds?: Value<number>

    constructor(properties: PipeSourceSelfManagedKafkaParameters) {
        Object.assign(this, properties)
    }
}

export class PipeSourceSqsQueueParameters {
    BatchSize?: Value<number>
    MaximumBatchingWindowInSeconds?: Value<number>

    constructor(properties: PipeSourceSqsQueueParameters) {
        Object.assign(this, properties)
    }
}

export class PipeTargetBatchJobParameters {
    DependsOn?: List<BatchJobDependency>
    Parameters?: {[key: string]: Value<string>}
    ArrayProperties?: BatchArrayProperties
    JobName!: Value<string>
    RetryStrategy?: BatchRetryStrategy
    JobDefinition!: Value<string>
    ContainerOverrides?: BatchContainerOverrides

    constructor(properties: PipeTargetBatchJobParameters) {
        Object.assign(this, properties)
    }
}

export class PipeTargetCloudWatchLogsParameters {
    LogStreamName?: Value<string>
    Timestamp?: Value<string>

    constructor(properties: PipeTargetCloudWatchLogsParameters) {
        Object.assign(this, properties)
    }
}

export class PipeTargetEcsTaskParameters {
    PlatformVersion?: Value<string>
    Group?: Value<string>
    EnableECSManagedTags?: Value<boolean>
    TaskCount?: Value<number>
    EnableExecuteCommand?: Value<boolean>
    PlacementConstraints?: List<PlacementConstraint>
    PropagateTags?: Value<string>
    PlacementStrategy?: List<PlacementStrategy>
    LaunchType?: Value<string>
    CapacityProviderStrategy?: List<CapacityProviderStrategyItem>
    ReferenceId?: Value<string>
    Overrides?: EcsTaskOverride
    NetworkConfiguration?: NetworkConfiguration
    Tags?: List<ResourceTag>
    TaskDefinitionArn!: Value<string>

    constructor(properties: PipeTargetEcsTaskParameters) {
        Object.assign(this, properties)
    }
}

export class PipeTargetEventBridgeEventBusParameters {
    DetailType?: Value<string>
    EndpointId?: Value<string>
    Time?: Value<string>
    Resources?: List<Value<string>>
    Source?: Value<string>

    constructor(properties: PipeTargetEventBridgeEventBusParameters) {
        Object.assign(this, properties)
    }
}

export class PipeTargetHttpParameters {
    PathParameterValues?: List<Value<string>>
    HeaderParameters?: {[key: string]: Value<string>}
    QueryStringParameters?: {[key: string]: Value<string>}

    constructor(properties: PipeTargetHttpParameters) {
        Object.assign(this, properties)
    }
}

export class PipeTargetKinesisStreamParameters {
    PartitionKey!: Value<string>

    constructor(properties: PipeTargetKinesisStreamParameters) {
        Object.assign(this, properties)
    }
}

export class PipeTargetLambdaFunctionParameters {
    InvocationType?: Value<string>

    constructor(properties: PipeTargetLambdaFunctionParameters) {
        Object.assign(this, properties)
    }
}

export class PipeTargetParameters {
    StepFunctionStateMachineParameters?: PipeTargetStateMachineParameters
    HttpParameters?: PipeTargetHttpParameters
    SqsQueueParameters?: PipeTargetSqsQueueParameters
    CloudWatchLogsParameters?: PipeTargetCloudWatchLogsParameters
    KinesisStreamParameters?: PipeTargetKinesisStreamParameters
    InputTemplate?: Value<string>
    SageMakerPipelineParameters?: PipeTargetSageMakerPipelineParameters
    EventBridgeEventBusParameters?: PipeTargetEventBridgeEventBusParameters
    LambdaFunctionParameters?: PipeTargetLambdaFunctionParameters
    EcsTaskParameters?: PipeTargetEcsTaskParameters
    BatchJobParameters?: PipeTargetBatchJobParameters
    RedshiftDataParameters?: PipeTargetRedshiftDataParameters

    constructor(properties: PipeTargetParameters) {
        Object.assign(this, properties)
    }
}

export class PipeTargetRedshiftDataParameters {
    StatementName?: Value<string>
    Sqls!: List<Value<string>>
    Database!: Value<string>
    SecretManagerArn?: Value<string>
    DbUser?: Value<string>
    WithEvent?: Value<boolean>

    constructor(properties: PipeTargetRedshiftDataParameters) {
        Object.assign(this, properties)
    }
}

export class PipeTargetSageMakerPipelineParameters {
    PipelineParameterList?: List<SageMakerPipelineParameter>

    constructor(properties: PipeTargetSageMakerPipelineParameters) {
        Object.assign(this, properties)
    }
}

export class PipeTargetSqsQueueParameters {
    MessageGroupId?: Value<string>
    MessageDeduplicationId?: Value<string>

    constructor(properties: PipeTargetSqsQueueParameters) {
        Object.assign(this, properties)
    }
}

export class PipeTargetStateMachineParameters {
    InvocationType?: Value<string>

    constructor(properties: PipeTargetStateMachineParameters) {
        Object.assign(this, properties)
    }
}

export class PlacementConstraint {
    Type?: Value<string>
    Expression?: Value<string>

    constructor(properties: PlacementConstraint) {
        Object.assign(this, properties)
    }
}

export class PlacementStrategy {
    Field?: Value<string>
    Type?: Value<string>

    constructor(properties: PlacementStrategy) {
        Object.assign(this, properties)
    }
}

export class SageMakerPipelineParameter {
    Value!: Value<string>
    Name!: Value<string>

    constructor(properties: SageMakerPipelineParameter) {
        Object.assign(this, properties)
    }
}

export class SelfManagedKafkaAccessConfigurationCredentials {
    BasicAuth?: Value<string>
    SaslScram256Auth?: Value<string>
    ClientCertificateTlsAuth?: Value<string>
    SaslScram512Auth?: Value<string>

    constructor(properties: SelfManagedKafkaAccessConfigurationCredentials) {
        Object.assign(this, properties)
    }
}

export class SelfManagedKafkaAccessConfigurationVpc {
    Subnets?: List<Value<string>>
    SecurityGroup?: List<Value<string>>

    constructor(properties: SelfManagedKafkaAccessConfigurationVpc) {
        Object.assign(this, properties)
    }
}

export interface PipeProperties {
    Enrichment?: Value<string>
    Target: Value<string>
    Description?: Value<string>
    DesiredState?: Value<string>
    TargetParameters?: PipeTargetParameters
    EnrichmentParameters?: PipeEnrichmentParameters
    RoleArn: Value<string>
    Source: Value<string>
    SourceParameters?: PipeSourceParameters
    Tags?: {[key: string]: Value<string>}
    Name?: Value<string>
}

export default class Pipe extends ResourceBase<PipeProperties> {
    static AwsVpcConfiguration = AwsVpcConfiguration
    static BatchArrayProperties = BatchArrayProperties
    static BatchContainerOverrides = BatchContainerOverrides
    static BatchEnvironmentVariable = BatchEnvironmentVariable
    static BatchJobDependency = BatchJobDependency
    static BatchResourceRequirement = BatchResourceRequirement
    static BatchRetryStrategy = BatchRetryStrategy
    static CapacityProviderStrategyItem = CapacityProviderStrategyItem
    static DeadLetterConfig = DeadLetterConfig
    static EcsContainerOverride = EcsContainerOverride
    static EcsEnvironmentFile = EcsEnvironmentFile
    static EcsEnvironmentVariable = EcsEnvironmentVariable
    static EcsEphemeralStorage = EcsEphemeralStorage
    static EcsInferenceAcceleratorOverride = EcsInferenceAcceleratorOverride
    static EcsResourceRequirement = EcsResourceRequirement
    static EcsTaskOverride = EcsTaskOverride
    static Filter = Filter
    static FilterCriteria = FilterCriteria
    static MQBrokerAccessCredentials = MQBrokerAccessCredentials
    static MSKAccessCredentials = MSKAccessCredentials
    static NetworkConfiguration = NetworkConfiguration
    static PipeEnrichmentHttpParameters = PipeEnrichmentHttpParameters
    static PipeEnrichmentParameters = PipeEnrichmentParameters
    static PipeSourceActiveMQBrokerParameters = PipeSourceActiveMQBrokerParameters
    static PipeSourceDynamoDBStreamParameters = PipeSourceDynamoDBStreamParameters
    static PipeSourceKinesisStreamParameters = PipeSourceKinesisStreamParameters
    static PipeSourceManagedStreamingKafkaParameters = PipeSourceManagedStreamingKafkaParameters
    static PipeSourceParameters = PipeSourceParameters
    static PipeSourceRabbitMQBrokerParameters = PipeSourceRabbitMQBrokerParameters
    static PipeSourceSelfManagedKafkaParameters = PipeSourceSelfManagedKafkaParameters
    static PipeSourceSqsQueueParameters = PipeSourceSqsQueueParameters
    static PipeTargetBatchJobParameters = PipeTargetBatchJobParameters
    static PipeTargetCloudWatchLogsParameters = PipeTargetCloudWatchLogsParameters
    static PipeTargetEcsTaskParameters = PipeTargetEcsTaskParameters
    static PipeTargetEventBridgeEventBusParameters = PipeTargetEventBridgeEventBusParameters
    static PipeTargetHttpParameters = PipeTargetHttpParameters
    static PipeTargetKinesisStreamParameters = PipeTargetKinesisStreamParameters
    static PipeTargetLambdaFunctionParameters = PipeTargetLambdaFunctionParameters
    static PipeTargetParameters = PipeTargetParameters
    static PipeTargetRedshiftDataParameters = PipeTargetRedshiftDataParameters
    static PipeTargetSageMakerPipelineParameters = PipeTargetSageMakerPipelineParameters
    static PipeTargetSqsQueueParameters = PipeTargetSqsQueueParameters
    static PipeTargetStateMachineParameters = PipeTargetStateMachineParameters
    static PlacementConstraint = PlacementConstraint
    static PlacementStrategy = PlacementStrategy
    static SageMakerPipelineParameter = SageMakerPipelineParameter
    static SelfManagedKafkaAccessConfigurationCredentials = SelfManagedKafkaAccessConfigurationCredentials
    static SelfManagedKafkaAccessConfigurationVpc = SelfManagedKafkaAccessConfigurationVpc

    constructor(properties: PipeProperties) {
        super('AWS::Pipes::Pipe', properties)
    }
}
