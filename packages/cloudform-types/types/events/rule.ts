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

export class BatchParameters {
    ArrayProperties?: BatchArrayProperties
    JobName!: Value<string>
    RetryStrategy?: BatchRetryStrategy
    JobDefinition!: Value<string>

    constructor(properties: BatchParameters) {
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
    Base?: Value<number>
    Weight?: Value<number>

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

export class EcsParameters {
    PlatformVersion?: Value<string>
    Group?: Value<string>
    EnableECSManagedTags?: Value<boolean>
    EnableExecuteCommand?: Value<boolean>
    PlacementConstraints?: List<PlacementConstraint>
    PropagateTags?: Value<string>
    TaskCount?: Value<number>
    PlacementStrategies?: List<PlacementStrategy>
    CapacityProviderStrategy?: List<CapacityProviderStrategyItem>
    LaunchType?: Value<string>
    ReferenceId?: Value<string>
    TagList?: List<ResourceTag>
    NetworkConfiguration?: NetworkConfiguration
    TaskDefinitionArn!: Value<string>

    constructor(properties: EcsParameters) {
        Object.assign(this, properties)
    }
}

export class HttpParameters {
    PathParameterValues?: List<Value<string>>
    HeaderParameters?: {[key: string]: Value<string>}
    QueryStringParameters?: {[key: string]: Value<string>}

    constructor(properties: HttpParameters) {
        Object.assign(this, properties)
    }
}

export class InputTransformer {
    InputPathsMap?: {[key: string]: Value<string>}
    InputTemplate!: Value<string>

    constructor(properties: InputTransformer) {
        Object.assign(this, properties)
    }
}

export class KinesisParameters {
    PartitionKeyPath!: Value<string>

    constructor(properties: KinesisParameters) {
        Object.assign(this, properties)
    }
}

export class NetworkConfiguration {
    AwsVpcConfiguration?: AwsVpcConfiguration

    constructor(properties: NetworkConfiguration) {
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

export class RedshiftDataParameters {
    StatementName?: Value<string>
    Sqls?: List<Value<string>>
    Database!: Value<string>
    SecretManagerArn?: Value<string>
    DbUser?: Value<string>
    Sql?: Value<string>
    WithEvent?: Value<boolean>

    constructor(properties: RedshiftDataParameters) {
        Object.assign(this, properties)
    }
}

export class RetryPolicy {
    MaximumRetryAttempts?: Value<number>
    MaximumEventAgeInSeconds?: Value<number>

    constructor(properties: RetryPolicy) {
        Object.assign(this, properties)
    }
}

export class RunCommandParameters {
    RunCommandTargets!: List<RunCommandTarget>

    constructor(properties: RunCommandParameters) {
        Object.assign(this, properties)
    }
}

export class RunCommandTarget {
    Values!: List<Value<string>>
    Key!: Value<string>

    constructor(properties: RunCommandTarget) {
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

export class SageMakerPipelineParameters {
    PipelineParameterList?: List<SageMakerPipelineParameter>

    constructor(properties: SageMakerPipelineParameters) {
        Object.assign(this, properties)
    }
}

export class SqsParameters {
    MessageGroupId!: Value<string>

    constructor(properties: SqsParameters) {
        Object.assign(this, properties)
    }
}

export class Target {
    InputPath?: Value<string>
    HttpParameters?: HttpParameters
    DeadLetterConfig?: DeadLetterConfig
    RunCommandParameters?: RunCommandParameters
    InputTransformer?: InputTransformer
    KinesisParameters?: KinesisParameters
    RoleArn?: Value<string>
    RedshiftDataParameters?: RedshiftDataParameters
    Input?: Value<string>
    SqsParameters?: SqsParameters
    EcsParameters?: EcsParameters
    BatchParameters?: BatchParameters
    Id!: Value<string>
    Arn!: Value<string>
    SageMakerPipelineParameters?: SageMakerPipelineParameters
    RetryPolicy?: RetryPolicy

    constructor(properties: Target) {
        Object.assign(this, properties)
    }
}

export interface RuleProperties {
    EventBusName?: Value<string>
    EventPattern?: {[key: string]: any}
    ScheduleExpression?: Value<string>
    Description?: Value<string>
    State?: Value<string>
    Targets?: List<Target>
    RoleArn?: Value<string>
    Name?: Value<string>
}

export default class Rule extends ResourceBase<RuleProperties> {
    static AwsVpcConfiguration = AwsVpcConfiguration
    static BatchArrayProperties = BatchArrayProperties
    static BatchParameters = BatchParameters
    static BatchRetryStrategy = BatchRetryStrategy
    static CapacityProviderStrategyItem = CapacityProviderStrategyItem
    static DeadLetterConfig = DeadLetterConfig
    static EcsParameters = EcsParameters
    static HttpParameters = HttpParameters
    static InputTransformer = InputTransformer
    static KinesisParameters = KinesisParameters
    static NetworkConfiguration = NetworkConfiguration
    static PlacementConstraint = PlacementConstraint
    static PlacementStrategy = PlacementStrategy
    static RedshiftDataParameters = RedshiftDataParameters
    static RetryPolicy = RetryPolicy
    static RunCommandParameters = RunCommandParameters
    static RunCommandTarget = RunCommandTarget
    static SageMakerPipelineParameter = SageMakerPipelineParameter
    static SageMakerPipelineParameters = SageMakerPipelineParameters
    static SqsParameters = SqsParameters
    static Target = Target

    constructor(properties?: RuleProperties) {
        super('AWS::Events::Rule', properties || {})
    }
}
