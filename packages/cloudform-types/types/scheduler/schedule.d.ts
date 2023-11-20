import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AwsVpcConfiguration {
    SecurityGroups?: List<Value<string>>;
    Subnets: List<Value<string>>;
    AssignPublicIp?: Value<string>;
    constructor(properties: AwsVpcConfiguration);
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
export declare class EcsParameters {
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
    NetworkConfiguration?: NetworkConfiguration;
    Tags?: {
        [key: string]: any;
    };
    TaskDefinitionArn: Value<string>;
    constructor(properties: EcsParameters);
}
export declare class EventBridgeParameters {
    DetailType: Value<string>;
    Source: Value<string>;
    constructor(properties: EventBridgeParameters);
}
export declare class FlexibleTimeWindow {
    Mode: Value<string>;
    MaximumWindowInMinutes?: Value<number>;
    constructor(properties: FlexibleTimeWindow);
}
export declare class KinesisParameters {
    PartitionKey: Value<string>;
    constructor(properties: KinesisParameters);
}
export declare class NetworkConfiguration {
    AwsvpcConfiguration?: AwsVpcConfiguration;
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
export declare class RetryPolicy {
    MaximumRetryAttempts?: Value<number>;
    MaximumEventAgeInSeconds?: Value<number>;
    constructor(properties: RetryPolicy);
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
    MessageGroupId?: Value<string>;
    constructor(properties: SqsParameters);
}
export declare class Target {
    Input?: Value<string>;
    SqsParameters?: SqsParameters;
    DeadLetterConfig?: DeadLetterConfig;
    EcsParameters?: EcsParameters;
    EventBridgeParameters?: EventBridgeParameters;
    Arn: Value<string>;
    KinesisParameters?: KinesisParameters;
    SageMakerPipelineParameters?: SageMakerPipelineParameters;
    RetryPolicy?: RetryPolicy;
    RoleArn: Value<string>;
    constructor(properties: Target);
}
export interface ScheduleProperties {
    GroupName?: Value<string>;
    StartDate?: Value<string>;
    ScheduleExpression: Value<string>;
    Target: Target;
    Description?: Value<string>;
    KmsKeyArn?: Value<string>;
    State?: Value<string>;
    FlexibleTimeWindow: FlexibleTimeWindow;
    ScheduleExpressionTimezone?: Value<string>;
    EndDate?: Value<string>;
    Name?: Value<string>;
}
export default class Schedule extends ResourceBase<ScheduleProperties> {
    static AwsVpcConfiguration: typeof AwsVpcConfiguration;
    static CapacityProviderStrategyItem: typeof CapacityProviderStrategyItem;
    static DeadLetterConfig: typeof DeadLetterConfig;
    static EcsParameters: typeof EcsParameters;
    static EventBridgeParameters: typeof EventBridgeParameters;
    static FlexibleTimeWindow: typeof FlexibleTimeWindow;
    static KinesisParameters: typeof KinesisParameters;
    static NetworkConfiguration: typeof NetworkConfiguration;
    static PlacementConstraint: typeof PlacementConstraint;
    static PlacementStrategy: typeof PlacementStrategy;
    static RetryPolicy: typeof RetryPolicy;
    static SageMakerPipelineParameter: typeof SageMakerPipelineParameter;
    static SageMakerPipelineParameters: typeof SageMakerPipelineParameters;
    static SqsParameters: typeof SqsParameters;
    static Target: typeof Target;
    constructor(properties: ScheduleProperties);
}
