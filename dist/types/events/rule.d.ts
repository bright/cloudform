import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface RunCommandParametersProperties {
    RunCommandTargets: RunCommandTarget[];
}
export declare class RunCommandParameters extends ResourceBase {
    constructor(properties: RunCommandParametersProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface TargetProperties {
    Arn: Value<string>;
    EcsParameters?: EcsParameters;
    Id: Value<string>;
    Input?: Value<string>;
    InputPath?: Value<string>;
    InputTransformer?: InputTransformer;
    KinesisParameters?: KinesisParameters;
    RoleArn?: Value<string>;
    RunCommandParameters?: RunCommandParameters;
}
export declare class Target extends ResourceBase {
    constructor(properties: TargetProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface RunCommandTargetProperties {
    Key: Value<string>;
    Values: Value<string>[];
}
export declare class RunCommandTarget extends ResourceBase {
    constructor(properties: RunCommandTargetProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface InputTransformerProperties {
    InputPathsMap?: {
        [key: string]: Value<string>;
    };
    InputTemplate: Value<string>;
}
export declare class InputTransformer extends ResourceBase {
    constructor(properties: InputTransformerProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface KinesisParametersProperties {
    PartitionKeyPath: Value<string>;
}
export declare class KinesisParameters extends ResourceBase {
    constructor(properties: KinesisParametersProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface EcsParametersProperties {
    TaskCount?: Value<number>;
    TaskDefinitionArn: Value<string>;
}
export declare class EcsParameters extends ResourceBase {
    constructor(properties: EcsParametersProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface RuleProperties {
    Description?: Value<string>;
    EventPattern?: any;
    Name?: Value<string>;
    RoleArn?: Value<string>;
    ScheduleExpression?: Value<string>;
    State?: Value<string>;
    Targets?: Target[];
}
export default class Rule extends ResourceBase {
    constructor(properties: RuleProperties, dependsOn?: Value<string> | Value<string>[]);
}
