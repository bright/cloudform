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
export declare class SqsParameters {
    MessageGroupId: Value<string>;
    constructor(properties: SqsParameters);
}
export declare class Target {
    Arn: Value<string>;
    EcsParameters?: EcsParameters;
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
export interface RuleProperties {
    Description?: Value<string>;
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
    static SqsParameters: typeof SqsParameters;
    static Target: typeof Target;
    static KinesisParameters: typeof KinesisParameters;
    static EcsParameters: typeof EcsParameters;
    static AwsVpcConfiguration: typeof AwsVpcConfiguration;
    constructor(properties?: RuleProperties);
}
