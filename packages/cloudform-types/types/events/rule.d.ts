import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class RunCommandParameters {
    RunCommandTargets: List<RunCommandTarget>;
    constructor(properties: RunCommandParameters);
}
export declare class NetworkConfiguration {
    AwsVpcConfiguration?: AwsVpcConfiguration;
    constructor(properties: NetworkConfiguration);
}
export declare class RunCommandTarget {
    Key: Value<string>;
    Values: List<Value<string>>;
    constructor(properties: RunCommandTarget);
}
export declare class InputTransformer {
    InputPathsMap?: {
        [key: string]: Value<string>;
    };
    InputTemplate: Value<string>;
    constructor(properties: InputTransformer);
}
export declare class BatchRetryStrategy {
    Attempts?: Value<number>;
    constructor(properties: BatchRetryStrategy);
}
export declare class SqsParameters {
    MessageGroupId: Value<string>;
    constructor(properties: SqsParameters);
}
export declare class HttpParameters {
    HeaderParameters?: {
        [key: string]: Value<string>;
    };
    PathParameterValues?: List<Value<string>>;
    QueryStringParameters?: {
        [key: string]: Value<string>;
    };
    constructor(properties: HttpParameters);
}
export declare class Target {
    Arn: Value<string>;
    BatchParameters?: BatchParameters;
    EcsParameters?: EcsParameters;
    HttpParameters?: HttpParameters;
    Id: Value<string>;
    Input?: Value<string>;
    InputPath?: Value<string>;
    InputTransformer?: InputTransformer;
    KinesisParameters?: KinesisParameters;
    RoleArn?: Value<string>;
    RunCommandParameters?: RunCommandParameters;
    SqsParameters?: SqsParameters;
    constructor(properties: Target);
}
export declare class KinesisParameters {
    PartitionKeyPath: Value<string>;
    constructor(properties: KinesisParameters);
}
export declare class BatchArrayProperties {
    Size?: Value<number>;
    constructor(properties: BatchArrayProperties);
}
export declare class EcsParameters {
    Group?: Value<string>;
    LaunchType?: Value<string>;
    NetworkConfiguration?: NetworkConfiguration;
    PlatformVersion?: Value<string>;
    TaskCount?: Value<number>;
    TaskDefinitionArn: Value<string>;
    constructor(properties: EcsParameters);
}
export declare class AwsVpcConfiguration {
    AssignPublicIp?: Value<string>;
    SecurityGroups?: List<Value<string>>;
    Subnets: List<Value<string>>;
    constructor(properties: AwsVpcConfiguration);
}
export declare class BatchParameters {
    ArrayProperties?: BatchArrayProperties;
    JobDefinition: Value<string>;
    JobName: Value<string>;
    RetryStrategy?: BatchRetryStrategy;
    constructor(properties: BatchParameters);
}
export interface RuleProperties {
    Description?: Value<string>;
    EventBusName?: Value<string>;
    EventPattern?: {
        [key: string]: any;
    };
    Name?: Value<string>;
    RoleArn?: Value<string>;
    ScheduleExpression?: Value<string>;
    State?: Value<string>;
    Targets?: List<Target>;
}
export default class Rule extends ResourceBase<RuleProperties> {
    static RunCommandParameters: typeof RunCommandParameters;
    static NetworkConfiguration: typeof NetworkConfiguration;
    static RunCommandTarget: typeof RunCommandTarget;
    static InputTransformer: typeof InputTransformer;
    static BatchRetryStrategy: typeof BatchRetryStrategy;
    static SqsParameters: typeof SqsParameters;
    static HttpParameters: typeof HttpParameters;
    static Target: typeof Target;
    static KinesisParameters: typeof KinesisParameters;
    static BatchArrayProperties: typeof BatchArrayProperties;
    static EcsParameters: typeof EcsParameters;
    static AwsVpcConfiguration: typeof AwsVpcConfiguration;
    static BatchParameters: typeof BatchParameters;
    constructor(properties?: RuleProperties);
}
