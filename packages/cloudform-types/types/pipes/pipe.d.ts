import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AwsVpcConfiguration {
    SecurityGroups?: List<Value<string>>;
    Subnets: List<Value<string>>;
    AssignPublicIp?: Value<string>;
    constructor(properties: AwsVpcConfiguration);
}
export declare class BatchArrayProperties {
    Size?: Value<number>;
    constructor(properties: BatchArrayProperties);
}
export declare class BatchContainerOverrides {
    Command?: List<Value<string>>;
    Environment?: List<BatchEnvironmentVariable>;
    InstanceType?: Value<string>;
    ResourceRequirements?: List<BatchResourceRequirement>;
    constructor(properties: BatchContainerOverrides);
}
export declare class BatchEnvironmentVariable {
    Value?: Value<string>;
    Name?: Value<string>;
    constructor(properties: BatchEnvironmentVariable);
}
export declare class BatchJobDependency {
    Type?: Value<string>;
    JobId?: Value<string>;
    constructor(properties: BatchJobDependency);
}
export declare class BatchResourceRequirement {
    Type: Value<string>;
    Value: Value<string>;
    constructor(properties: BatchResourceRequirement);
}
export declare class BatchRetryStrategy {
    Attempts?: Value<number>;
    constructor(properties: BatchRetryStrategy);
}
export declare class CapacityProviderStrategyItem {
    CapacityProvider: Value<string>;
    Weight?: Value<number>;
    Base?: Value<number>;
    constructor(properties: CapacityProviderStrategyItem);
}
export declare class DeadLetterConfig {
    Arn?: Value<string>;
    constructor(properties: DeadLetterConfig);
}
export declare class EcsContainerOverride {
    MemoryReservation?: Value<number>;
    Command?: List<Value<string>>;
    Memory?: Value<number>;
    Cpu?: Value<number>;
    Environment?: List<EcsEnvironmentVariable>;
    ResourceRequirements?: List<EcsResourceRequirement>;
    EnvironmentFiles?: List<EcsEnvironmentFile>;
    Name?: Value<string>;
    constructor(properties: EcsContainerOverride);
}
export declare class EcsEnvironmentFile {
    Type: Value<string>;
    Value: Value<string>;
    constructor(properties: EcsEnvironmentFile);
}
export declare class EcsEnvironmentVariable {
    Value?: Value<string>;
    Name?: Value<string>;
    constructor(properties: EcsEnvironmentVariable);
}
export declare class EcsEphemeralStorage {
    SizeInGiB: Value<number>;
    constructor(properties: EcsEphemeralStorage);
}
export declare class EcsInferenceAcceleratorOverride {
    DeviceType?: Value<string>;
    DeviceName?: Value<string>;
    constructor(properties: EcsInferenceAcceleratorOverride);
}
export declare class EcsResourceRequirement {
    Type: Value<string>;
    Value: Value<string>;
    constructor(properties: EcsResourceRequirement);
}
export declare class EcsTaskOverride {
    ExecutionRoleArn?: Value<string>;
    TaskRoleArn?: Value<string>;
    Memory?: Value<string>;
    Cpu?: Value<string>;
    InferenceAcceleratorOverrides?: List<EcsInferenceAcceleratorOverride>;
    EphemeralStorage?: EcsEphemeralStorage;
    ContainerOverrides?: List<EcsContainerOverride>;
    constructor(properties: EcsTaskOverride);
}
export declare class Filter {
    Pattern?: Value<string>;
    constructor(properties: Filter);
}
export declare class FilterCriteria {
    Filters?: List<Filter>;
    constructor(properties: FilterCriteria);
}
export declare class MQBrokerAccessCredentials {
    BasicAuth: Value<string>;
    constructor(properties: MQBrokerAccessCredentials);
}
export declare class MSKAccessCredentials {
    ClientCertificateTlsAuth?: Value<string>;
    SaslScram512Auth?: Value<string>;
    constructor(properties: MSKAccessCredentials);
}
export declare class NetworkConfiguration {
    AwsvpcConfiguration?: AwsVpcConfiguration;
    constructor(properties: NetworkConfiguration);
}
export declare class PipeEnrichmentHttpParameters {
    PathParameterValues?: List<Value<string>>;
    HeaderParameters?: {
        [key: string]: Value<string>;
    };
    QueryStringParameters?: {
        [key: string]: Value<string>;
    };
    constructor(properties: PipeEnrichmentHttpParameters);
}
export declare class PipeEnrichmentParameters {
    HttpParameters?: PipeEnrichmentHttpParameters;
    InputTemplate?: Value<string>;
    constructor(properties: PipeEnrichmentParameters);
}
export declare class PipeSourceActiveMQBrokerParameters {
    BatchSize?: Value<number>;
    QueueName: Value<string>;
    Credentials: MQBrokerAccessCredentials;
    MaximumBatchingWindowInSeconds?: Value<number>;
    constructor(properties: PipeSourceActiveMQBrokerParameters);
}
export declare class PipeSourceDynamoDBStreamParameters {
    StartingPosition: Value<string>;
    BatchSize?: Value<number>;
    MaximumRetryAttempts?: Value<number>;
    OnPartialBatchItemFailure?: Value<string>;
    DeadLetterConfig?: DeadLetterConfig;
    ParallelizationFactor?: Value<number>;
    MaximumRecordAgeInSeconds?: Value<number>;
    MaximumBatchingWindowInSeconds?: Value<number>;
    constructor(properties: PipeSourceDynamoDBStreamParameters);
}
export declare class PipeSourceKinesisStreamParameters {
    StartingPosition: Value<string>;
    BatchSize?: Value<number>;
    MaximumRetryAttempts?: Value<number>;
    OnPartialBatchItemFailure?: Value<string>;
    DeadLetterConfig?: DeadLetterConfig;
    ParallelizationFactor?: Value<number>;
    MaximumRecordAgeInSeconds?: Value<number>;
    StartingPositionTimestamp?: Value<string>;
    MaximumBatchingWindowInSeconds?: Value<number>;
    constructor(properties: PipeSourceKinesisStreamParameters);
}
export declare class PipeSourceManagedStreamingKafkaParameters {
    StartingPosition?: Value<string>;
    BatchSize?: Value<number>;
    ConsumerGroupID?: Value<string>;
    Credentials?: MSKAccessCredentials;
    TopicName: Value<string>;
    MaximumBatchingWindowInSeconds?: Value<number>;
    constructor(properties: PipeSourceManagedStreamingKafkaParameters);
}
export declare class PipeSourceParameters {
    ManagedStreamingKafkaParameters?: PipeSourceManagedStreamingKafkaParameters;
    DynamoDBStreamParameters?: PipeSourceDynamoDBStreamParameters;
    SelfManagedKafkaParameters?: PipeSourceSelfManagedKafkaParameters;
    RabbitMQBrokerParameters?: PipeSourceRabbitMQBrokerParameters;
    SqsQueueParameters?: PipeSourceSqsQueueParameters;
    KinesisStreamParameters?: PipeSourceKinesisStreamParameters;
    FilterCriteria?: FilterCriteria;
    ActiveMQBrokerParameters?: PipeSourceActiveMQBrokerParameters;
    constructor(properties: PipeSourceParameters);
}
export declare class PipeSourceRabbitMQBrokerParameters {
    BatchSize?: Value<number>;
    VirtualHost?: Value<string>;
    QueueName: Value<string>;
    Credentials: MQBrokerAccessCredentials;
    MaximumBatchingWindowInSeconds?: Value<number>;
    constructor(properties: PipeSourceRabbitMQBrokerParameters);
}
export declare class PipeSourceSelfManagedKafkaParameters {
    StartingPosition?: Value<string>;
    BatchSize?: Value<number>;
    ConsumerGroupID?: Value<string>;
    AdditionalBootstrapServers?: List<Value<string>>;
    Vpc?: SelfManagedKafkaAccessConfigurationVpc;
    Credentials?: SelfManagedKafkaAccessConfigurationCredentials;
    ServerRootCaCertificate?: Value<string>;
    TopicName: Value<string>;
    MaximumBatchingWindowInSeconds?: Value<number>;
    constructor(properties: PipeSourceSelfManagedKafkaParameters);
}
export declare class PipeSourceSqsQueueParameters {
    BatchSize?: Value<number>;
    MaximumBatchingWindowInSeconds?: Value<number>;
    constructor(properties: PipeSourceSqsQueueParameters);
}
export declare class PipeTargetBatchJobParameters {
    DependsOn?: List<BatchJobDependency>;
    Parameters?: {
        [key: string]: Value<string>;
    };
    ArrayProperties?: BatchArrayProperties;
    JobName: Value<string>;
    RetryStrategy?: BatchRetryStrategy;
    JobDefinition: Value<string>;
    ContainerOverrides?: BatchContainerOverrides;
    constructor(properties: PipeTargetBatchJobParameters);
}
export declare class PipeTargetCloudWatchLogsParameters {
    LogStreamName?: Value<string>;
    Timestamp?: Value<string>;
    constructor(properties: PipeTargetCloudWatchLogsParameters);
}
export declare class PipeTargetEcsTaskParameters {
    PlatformVersion?: Value<string>;
    Group?: Value<string>;
    EnableECSManagedTags?: Value<boolean>;
    TaskCount?: Value<number>;
    EnableExecuteCommand?: Value<boolean>;
    PlacementConstraints?: List<PlacementConstraint>;
    PropagateTags?: Value<string>;
    PlacementStrategy?: List<PlacementStrategy>;
    LaunchType?: Value<string>;
    CapacityProviderStrategy?: List<CapacityProviderStrategyItem>;
    ReferenceId?: Value<string>;
    Overrides?: EcsTaskOverride;
    NetworkConfiguration?: NetworkConfiguration;
    Tags?: List<ResourceTag>;
    TaskDefinitionArn: Value<string>;
    constructor(properties: PipeTargetEcsTaskParameters);
}
export declare class PipeTargetEventBridgeEventBusParameters {
    DetailType?: Value<string>;
    EndpointId?: Value<string>;
    Time?: Value<string>;
    Resources?: List<Value<string>>;
    Source?: Value<string>;
    constructor(properties: PipeTargetEventBridgeEventBusParameters);
}
export declare class PipeTargetHttpParameters {
    PathParameterValues?: List<Value<string>>;
    HeaderParameters?: {
        [key: string]: Value<string>;
    };
    QueryStringParameters?: {
        [key: string]: Value<string>;
    };
    constructor(properties: PipeTargetHttpParameters);
}
export declare class PipeTargetKinesisStreamParameters {
    PartitionKey: Value<string>;
    constructor(properties: PipeTargetKinesisStreamParameters);
}
export declare class PipeTargetLambdaFunctionParameters {
    InvocationType?: Value<string>;
    constructor(properties: PipeTargetLambdaFunctionParameters);
}
export declare class PipeTargetParameters {
    StepFunctionStateMachineParameters?: PipeTargetStateMachineParameters;
    HttpParameters?: PipeTargetHttpParameters;
    SqsQueueParameters?: PipeTargetSqsQueueParameters;
    CloudWatchLogsParameters?: PipeTargetCloudWatchLogsParameters;
    KinesisStreamParameters?: PipeTargetKinesisStreamParameters;
    InputTemplate?: Value<string>;
    SageMakerPipelineParameters?: PipeTargetSageMakerPipelineParameters;
    EventBridgeEventBusParameters?: PipeTargetEventBridgeEventBusParameters;
    LambdaFunctionParameters?: PipeTargetLambdaFunctionParameters;
    EcsTaskParameters?: PipeTargetEcsTaskParameters;
    BatchJobParameters?: PipeTargetBatchJobParameters;
    RedshiftDataParameters?: PipeTargetRedshiftDataParameters;
    constructor(properties: PipeTargetParameters);
}
export declare class PipeTargetRedshiftDataParameters {
    StatementName?: Value<string>;
    Sqls: List<Value<string>>;
    Database: Value<string>;
    SecretManagerArn?: Value<string>;
    DbUser?: Value<string>;
    WithEvent?: Value<boolean>;
    constructor(properties: PipeTargetRedshiftDataParameters);
}
export declare class PipeTargetSageMakerPipelineParameters {
    PipelineParameterList?: List<SageMakerPipelineParameter>;
    constructor(properties: PipeTargetSageMakerPipelineParameters);
}
export declare class PipeTargetSqsQueueParameters {
    MessageGroupId?: Value<string>;
    MessageDeduplicationId?: Value<string>;
    constructor(properties: PipeTargetSqsQueueParameters);
}
export declare class PipeTargetStateMachineParameters {
    InvocationType?: Value<string>;
    constructor(properties: PipeTargetStateMachineParameters);
}
export declare class PlacementConstraint {
    Type?: Value<string>;
    Expression?: Value<string>;
    constructor(properties: PlacementConstraint);
}
export declare class PlacementStrategy {
    Field?: Value<string>;
    Type?: Value<string>;
    constructor(properties: PlacementStrategy);
}
export declare class SageMakerPipelineParameter {
    Value: Value<string>;
    Name: Value<string>;
    constructor(properties: SageMakerPipelineParameter);
}
export declare class SelfManagedKafkaAccessConfigurationCredentials {
    BasicAuth?: Value<string>;
    SaslScram256Auth?: Value<string>;
    ClientCertificateTlsAuth?: Value<string>;
    SaslScram512Auth?: Value<string>;
    constructor(properties: SelfManagedKafkaAccessConfigurationCredentials);
}
export declare class SelfManagedKafkaAccessConfigurationVpc {
    Subnets?: List<Value<string>>;
    SecurityGroup?: List<Value<string>>;
    constructor(properties: SelfManagedKafkaAccessConfigurationVpc);
}
export interface PipeProperties {
    Enrichment?: Value<string>;
    Target: Value<string>;
    Description?: Value<string>;
    DesiredState?: Value<string>;
    TargetParameters?: PipeTargetParameters;
    EnrichmentParameters?: PipeEnrichmentParameters;
    RoleArn: Value<string>;
    Source: Value<string>;
    SourceParameters?: PipeSourceParameters;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name?: Value<string>;
}
export default class Pipe extends ResourceBase<PipeProperties> {
    static AwsVpcConfiguration: typeof AwsVpcConfiguration;
    static BatchArrayProperties: typeof BatchArrayProperties;
    static BatchContainerOverrides: typeof BatchContainerOverrides;
    static BatchEnvironmentVariable: typeof BatchEnvironmentVariable;
    static BatchJobDependency: typeof BatchJobDependency;
    static BatchResourceRequirement: typeof BatchResourceRequirement;
    static BatchRetryStrategy: typeof BatchRetryStrategy;
    static CapacityProviderStrategyItem: typeof CapacityProviderStrategyItem;
    static DeadLetterConfig: typeof DeadLetterConfig;
    static EcsContainerOverride: typeof EcsContainerOverride;
    static EcsEnvironmentFile: typeof EcsEnvironmentFile;
    static EcsEnvironmentVariable: typeof EcsEnvironmentVariable;
    static EcsEphemeralStorage: typeof EcsEphemeralStorage;
    static EcsInferenceAcceleratorOverride: typeof EcsInferenceAcceleratorOverride;
    static EcsResourceRequirement: typeof EcsResourceRequirement;
    static EcsTaskOverride: typeof EcsTaskOverride;
    static Filter: typeof Filter;
    static FilterCriteria: typeof FilterCriteria;
    static MQBrokerAccessCredentials: typeof MQBrokerAccessCredentials;
    static MSKAccessCredentials: typeof MSKAccessCredentials;
    static NetworkConfiguration: typeof NetworkConfiguration;
    static PipeEnrichmentHttpParameters: typeof PipeEnrichmentHttpParameters;
    static PipeEnrichmentParameters: typeof PipeEnrichmentParameters;
    static PipeSourceActiveMQBrokerParameters: typeof PipeSourceActiveMQBrokerParameters;
    static PipeSourceDynamoDBStreamParameters: typeof PipeSourceDynamoDBStreamParameters;
    static PipeSourceKinesisStreamParameters: typeof PipeSourceKinesisStreamParameters;
    static PipeSourceManagedStreamingKafkaParameters: typeof PipeSourceManagedStreamingKafkaParameters;
    static PipeSourceParameters: typeof PipeSourceParameters;
    static PipeSourceRabbitMQBrokerParameters: typeof PipeSourceRabbitMQBrokerParameters;
    static PipeSourceSelfManagedKafkaParameters: typeof PipeSourceSelfManagedKafkaParameters;
    static PipeSourceSqsQueueParameters: typeof PipeSourceSqsQueueParameters;
    static PipeTargetBatchJobParameters: typeof PipeTargetBatchJobParameters;
    static PipeTargetCloudWatchLogsParameters: typeof PipeTargetCloudWatchLogsParameters;
    static PipeTargetEcsTaskParameters: typeof PipeTargetEcsTaskParameters;
    static PipeTargetEventBridgeEventBusParameters: typeof PipeTargetEventBridgeEventBusParameters;
    static PipeTargetHttpParameters: typeof PipeTargetHttpParameters;
    static PipeTargetKinesisStreamParameters: typeof PipeTargetKinesisStreamParameters;
    static PipeTargetLambdaFunctionParameters: typeof PipeTargetLambdaFunctionParameters;
    static PipeTargetParameters: typeof PipeTargetParameters;
    static PipeTargetRedshiftDataParameters: typeof PipeTargetRedshiftDataParameters;
    static PipeTargetSageMakerPipelineParameters: typeof PipeTargetSageMakerPipelineParameters;
    static PipeTargetSqsQueueParameters: typeof PipeTargetSqsQueueParameters;
    static PipeTargetStateMachineParameters: typeof PipeTargetStateMachineParameters;
    static PlacementConstraint: typeof PlacementConstraint;
    static PlacementStrategy: typeof PlacementStrategy;
    static SageMakerPipelineParameter: typeof SageMakerPipelineParameter;
    static SelfManagedKafkaAccessConfigurationCredentials: typeof SelfManagedKafkaAccessConfigurationCredentials;
    static SelfManagedKafkaAccessConfigurationVpc: typeof SelfManagedKafkaAccessConfigurationVpc;
    constructor(properties: PipeProperties);
}
