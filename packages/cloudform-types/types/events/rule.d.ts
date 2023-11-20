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
export declare class BatchParameters {
    ArrayProperties?: BatchArrayProperties;
    JobName: Value<string>;
    RetryStrategy?: BatchRetryStrategy;
    JobDefinition: Value<string>;
    constructor(properties: BatchParameters);
}
export declare class BatchRetryStrategy {
    Attempts?: Value<number>;
    constructor(properties: BatchRetryStrategy);
}
export declare class CapacityProviderStrategyItem {
    CapacityProvider: Value<string>;
    Base?: Value<number>;
    Weight?: Value<number>;
    constructor(properties: CapacityProviderStrategyItem);
}
export declare class DeadLetterConfig {
    Arn?: Value<string>;
    constructor(properties: DeadLetterConfig);
}
export declare class EcsParameters {
    PlatformVersion?: Value<string>;
    Group?: Value<string>;
    EnableECSManagedTags?: Value<boolean>;
    EnableExecuteCommand?: Value<boolean>;
    PlacementConstraints?: List<PlacementConstraint>;
    PropagateTags?: Value<string>;
    TaskCount?: Value<number>;
    PlacementStrategies?: List<PlacementStrategy>;
    CapacityProviderStrategy?: List<CapacityProviderStrategyItem>;
    LaunchType?: Value<string>;
    ReferenceId?: Value<string>;
    TagList?: List<ResourceTag>;
    NetworkConfiguration?: NetworkConfiguration;
    TaskDefinitionArn: Value<string>;
    constructor(properties: EcsParameters);
}
export declare class HttpParameters {
    PathParameterValues?: List<Value<string>>;
    HeaderParameters?: {
        [key: string]: Value<string>;
    };
    QueryStringParameters?: {
        [key: string]: Value<string>;
    };
    constructor(properties: HttpParameters);
}
export declare class InputTransformer {
    InputPathsMap?: {
        [key: string]: Value<string>;
    };
    InputTemplate: Value<string>;
    constructor(properties: InputTransformer);
}
export declare class KinesisParameters {
    PartitionKeyPath: Value<string>;
    constructor(properties: KinesisParameters);
}
export declare class NetworkConfiguration {
    AwsVpcConfiguration?: AwsVpcConfiguration;
    constructor(properties: NetworkConfiguration);
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
export declare class RedshiftDataParameters {
    StatementName?: Value<string>;
    Sqls?: List<Value<string>>;
    Database: Value<string>;
    SecretManagerArn?: Value<string>;
    DbUser?: Value<string>;
    Sql?: Value<string>;
    WithEvent?: Value<boolean>;
    constructor(properties: RedshiftDataParameters);
}
export declare class RetryPolicy {
    MaximumRetryAttempts?: Value<number>;
    MaximumEventAgeInSeconds?: Value<number>;
    constructor(properties: RetryPolicy);
}
export declare class RunCommandParameters {
    RunCommandTargets: List<RunCommandTarget>;
    constructor(properties: RunCommandParameters);
}
export declare class RunCommandTarget {
    Values: List<Value<string>>;
    Key: Value<string>;
    constructor(properties: RunCommandTarget);
}
export declare class SageMakerPipelineParameter {
    Value: Value<string>;
    Name: Value<string>;
    constructor(properties: SageMakerPipelineParameter);
}
export declare class SageMakerPipelineParameters {
    PipelineParameterList?: List<SageMakerPipelineParameter>;
    constructor(properties: SageMakerPipelineParameters);
}
export declare class SqsParameters {
    MessageGroupId: Value<string>;
    constructor(properties: SqsParameters);
}
export declare class Target {
    InputPath?: Value<string>;
    HttpParameters?: HttpParameters;
    DeadLetterConfig?: DeadLetterConfig;
    RunCommandParameters?: RunCommandParameters;
    InputTransformer?: InputTransformer;
    KinesisParameters?: KinesisParameters;
    RoleArn?: Value<string>;
    RedshiftDataParameters?: RedshiftDataParameters;
    Input?: Value<string>;
    SqsParameters?: SqsParameters;
    EcsParameters?: EcsParameters;
    BatchParameters?: BatchParameters;
    Id: Value<string>;
    Arn: Value<string>;
    SageMakerPipelineParameters?: SageMakerPipelineParameters;
    RetryPolicy?: RetryPolicy;
    constructor(properties: Target);
}
export interface RuleProperties {
    EventBusName?: Value<string>;
    EventPattern?: {
        [key: string]: any;
    };
    ScheduleExpression?: Value<string>;
    Description?: Value<string>;
    State?: Value<string>;
    Targets?: List<Target>;
    RoleArn?: Value<string>;
    Name?: Value<string>;
}
export default class Rule extends ResourceBase<RuleProperties> {
    static AwsVpcConfiguration: typeof AwsVpcConfiguration;
    static BatchArrayProperties: typeof BatchArrayProperties;
    static BatchParameters: typeof BatchParameters;
    static BatchRetryStrategy: typeof BatchRetryStrategy;
    static CapacityProviderStrategyItem: typeof CapacityProviderStrategyItem;
    static DeadLetterConfig: typeof DeadLetterConfig;
    static EcsParameters: typeof EcsParameters;
    static HttpParameters: typeof HttpParameters;
    static InputTransformer: typeof InputTransformer;
    static KinesisParameters: typeof KinesisParameters;
    static NetworkConfiguration: typeof NetworkConfiguration;
    static PlacementConstraint: typeof PlacementConstraint;
    static PlacementStrategy: typeof PlacementStrategy;
    static RedshiftDataParameters: typeof RedshiftDataParameters;
    static RetryPolicy: typeof RetryPolicy;
    static RunCommandParameters: typeof RunCommandParameters;
    static RunCommandTarget: typeof RunCommandTarget;
    static SageMakerPipelineParameter: typeof SageMakerPipelineParameter;
    static SageMakerPipelineParameters: typeof SageMakerPipelineParameters;
    static SqsParameters: typeof SqsParameters;
    static Target: typeof Target;
    constructor(properties?: RuleProperties);
}
