/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface RunCommandParametersProperties {
    RunCommandTargets: List<RunCommandTarget>
}

export class RunCommandParameters extends ResourceBase {
    constructor(properties: RunCommandParametersProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Events::RunCommandParameters', properties, dependsOn)
    }
}

export interface TargetProperties {
    Arn: Value<string>
    EcsParameters?: EcsParameters
    Id: Value<string>
    Input?: Value<string>
    InputPath?: Value<string>
    InputTransformer?: InputTransformer
    KinesisParameters?: KinesisParameters
    RoleArn?: Value<string>
    RunCommandParameters?: RunCommandParameters
}

export class Target extends ResourceBase {
    constructor(properties: TargetProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Events::Target', properties, dependsOn)
    }
}

export interface RunCommandTargetProperties {
    Key: Value<string>
    Values: List<Value<string>>
}

export class RunCommandTarget extends ResourceBase {
    constructor(properties: RunCommandTargetProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Events::RunCommandTarget', properties, dependsOn)
    }
}

export interface InputTransformerProperties {
    InputPathsMap?: {[key: string]: Value<string>}
    InputTemplate: Value<string>
}

export class InputTransformer extends ResourceBase {
    constructor(properties: InputTransformerProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Events::InputTransformer', properties, dependsOn)
    }
}

export interface KinesisParametersProperties {
    PartitionKeyPath: Value<string>
}

export class KinesisParameters extends ResourceBase {
    constructor(properties: KinesisParametersProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Events::KinesisParameters', properties, dependsOn)
    }
}

export interface EcsParametersProperties {
    TaskCount?: Value<number>
    TaskDefinitionArn: Value<string>
}

export class EcsParameters extends ResourceBase {
    constructor(properties: EcsParametersProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Events::EcsParameters', properties, dependsOn)
    }
}

export interface RuleProperties {
    Description?: Value<string>
    EventPattern?: any
    Name?: Value<string>
    RoleArn?: Value<string>
    ScheduleExpression?: Value<string>
    State?: Value<string>
    Targets?: List<Target>
}

export default class Rule extends ResourceBase {
    constructor(properties: RuleProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Events::Rule', properties, dependsOn)
    }
}
