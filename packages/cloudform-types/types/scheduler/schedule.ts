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

export class EcsParameters {
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
    NetworkConfiguration?: NetworkConfiguration
    Tags?: {[key: string]: any}
    TaskDefinitionArn!: Value<string>

    constructor(properties: EcsParameters) {
        Object.assign(this, properties)
    }
}

export class EventBridgeParameters {
    DetailType!: Value<string>
    Source!: Value<string>

    constructor(properties: EventBridgeParameters) {
        Object.assign(this, properties)
    }
}

export class FlexibleTimeWindow {
    Mode!: Value<string>
    MaximumWindowInMinutes?: Value<number>

    constructor(properties: FlexibleTimeWindow) {
        Object.assign(this, properties)
    }
}

export class KinesisParameters {
    PartitionKey!: Value<string>

    constructor(properties: KinesisParameters) {
        Object.assign(this, properties)
    }
}

export class NetworkConfiguration {
    AwsvpcConfiguration?: AwsVpcConfiguration

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

export class RetryPolicy {
    MaximumRetryAttempts?: Value<number>
    MaximumEventAgeInSeconds?: Value<number>

    constructor(properties: RetryPolicy) {
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
    MessageGroupId?: Value<string>

    constructor(properties: SqsParameters) {
        Object.assign(this, properties)
    }
}

export class Target {
    Input?: Value<string>
    SqsParameters?: SqsParameters
    DeadLetterConfig?: DeadLetterConfig
    EcsParameters?: EcsParameters
    EventBridgeParameters?: EventBridgeParameters
    Arn!: Value<string>
    KinesisParameters?: KinesisParameters
    SageMakerPipelineParameters?: SageMakerPipelineParameters
    RetryPolicy?: RetryPolicy
    RoleArn!: Value<string>

    constructor(properties: Target) {
        Object.assign(this, properties)
    }
}

export interface ScheduleProperties {
    GroupName?: Value<string>
    StartDate?: Value<string>
    ScheduleExpression: Value<string>
    Target: Target
    Description?: Value<string>
    KmsKeyArn?: Value<string>
    State?: Value<string>
    FlexibleTimeWindow: FlexibleTimeWindow
    ScheduleExpressionTimezone?: Value<string>
    EndDate?: Value<string>
    Name?: Value<string>
}

export default class Schedule extends ResourceBase<ScheduleProperties> {
    static AwsVpcConfiguration = AwsVpcConfiguration
    static CapacityProviderStrategyItem = CapacityProviderStrategyItem
    static DeadLetterConfig = DeadLetterConfig
    static EcsParameters = EcsParameters
    static EventBridgeParameters = EventBridgeParameters
    static FlexibleTimeWindow = FlexibleTimeWindow
    static KinesisParameters = KinesisParameters
    static NetworkConfiguration = NetworkConfiguration
    static PlacementConstraint = PlacementConstraint
    static PlacementStrategy = PlacementStrategy
    static RetryPolicy = RetryPolicy
    static SageMakerPipelineParameter = SageMakerPipelineParameter
    static SageMakerPipelineParameters = SageMakerPipelineParameters
    static SqsParameters = SqsParameters
    static Target = Target

    constructor(properties: ScheduleProperties) {
        super('AWS::Scheduler::Schedule', properties)
    }
}
