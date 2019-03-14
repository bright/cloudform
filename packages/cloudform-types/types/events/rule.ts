/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class SqsParameters {
    MessageGroupId!: Value<string>

    constructor(properties: SqsParameters) {
        Object.assign(this, properties)
    }
}

export class RunCommandParameters {
    RunCommandTargets!: List<RunCommandTarget>

    constructor(properties: RunCommandParameters) {
        Object.assign(this, properties)
    }
}

export class Target {
    Arn!: Value<string>
    EcsParameters?: EcsParameters
    Id!: Value<string>
    Input?: Value<string>
    InputPath?: Value<string>
    InputTransformer?: InputTransformer
    KinesisParameters?: KinesisParameters
    RoleArn?: Value<string>
    RunCommandParameters?: RunCommandParameters
    SqsParameters?: SqsParameters

    constructor(properties: Target) {
        Object.assign(this, properties)
    }
}

export class RunCommandTarget {
    Key!: Value<string>
    Values!: List<Value<string>>

    constructor(properties: RunCommandTarget) {
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

export class EcsParameters {
    TaskCount?: Value<number>
    TaskDefinitionArn!: Value<string>

    constructor(properties: EcsParameters) {
        Object.assign(this, properties)
    }
}

export interface RuleProperties {
    Description?: Value<string>
    EventPattern?: {[key: string]: any}
    Name?: Value<string>
    RoleArn?: Value<string>
    ScheduleExpression?: Value<string>
    State?: Value<string>
    Targets?: List<Target>
}

export default class Rule extends ResourceBase<RuleProperties> {
    static SqsParameters = SqsParameters
    static RunCommandParameters = RunCommandParameters
    static Target = Target
    static RunCommandTarget = RunCommandTarget
    static InputTransformer = InputTransformer
    static KinesisParameters = KinesisParameters
    static EcsParameters = EcsParameters

    constructor(properties?: RuleProperties) {
        super('AWS::Events::Rule', properties)
    }
}
