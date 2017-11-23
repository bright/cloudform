/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface InputArtifactProperties {
    Name: Value<string>
}

export class InputArtifact extends ResourceBase {
    constructor(properties: InputArtifactProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodePipeline::InputArtifact', properties, dependsOn)
    }
}

export interface ActionDeclarationProperties {
    ActionTypeId: ActionTypeId
    Configuration?: any
    InputArtifacts?: List<InputArtifact>
    Name: Value<string>
    OutputArtifacts?: List<OutputArtifact>
    RoleArn?: Value<string>
    RunOrder?: Value<number>
}

export class ActionDeclaration extends ResourceBase {
    constructor(properties: ActionDeclarationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodePipeline::ActionDeclaration', properties, dependsOn)
    }
}

export interface StageDeclarationProperties {
    Actions: List<ActionDeclaration>
    Blockers?: List<BlockerDeclaration>
    Name: Value<string>
}

export class StageDeclaration extends ResourceBase {
    constructor(properties: StageDeclarationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodePipeline::StageDeclaration', properties, dependsOn)
    }
}

export interface BlockerDeclarationProperties {
    Name: Value<string>
    Type: Value<string>
}

export class BlockerDeclaration extends ResourceBase {
    constructor(properties: BlockerDeclarationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodePipeline::BlockerDeclaration', properties, dependsOn)
    }
}

export interface StageTransitionProperties {
    Reason: Value<string>
    StageName: Value<string>
}

export class StageTransition extends ResourceBase {
    constructor(properties: StageTransitionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodePipeline::StageTransition', properties, dependsOn)
    }
}

export interface ArtifactStoreProperties {
    EncryptionKey?: EncryptionKey
    Location: Value<string>
    Type: Value<string>
}

export class ArtifactStore extends ResourceBase {
    constructor(properties: ArtifactStoreProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodePipeline::ArtifactStore', properties, dependsOn)
    }
}

export interface ActionTypeIdProperties {
    Category: Value<string>
    Owner: Value<string>
    Provider: Value<string>
    Version: Value<string>
}

export class ActionTypeId extends ResourceBase {
    constructor(properties: ActionTypeIdProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodePipeline::ActionTypeId', properties, dependsOn)
    }
}

export interface OutputArtifactProperties {
    Name: Value<string>
}

export class OutputArtifact extends ResourceBase {
    constructor(properties: OutputArtifactProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodePipeline::OutputArtifact', properties, dependsOn)
    }
}

export interface EncryptionKeyProperties {
    Id: Value<string>
    Type: Value<string>
}

export class EncryptionKey extends ResourceBase {
    constructor(properties: EncryptionKeyProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodePipeline::EncryptionKey', properties, dependsOn)
    }
}

export interface PipelineProperties {
    ArtifactStore: ArtifactStore
    DisableInboundStageTransitions?: List<StageTransition>
    Name?: Value<string>
    RestartExecutionOnUpdate?: Value<boolean>
    RoleArn: Value<string>
    Stages: List<StageDeclaration>
}

export default class Pipeline extends ResourceBase {
    constructor(properties: PipelineProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodePipeline::Pipeline', properties, dependsOn)
    }
}
