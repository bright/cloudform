import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface InputArtifactProperties {
    Name: Value<string>;
}
export declare class InputArtifact extends ResourceBase {
    constructor(properties: InputArtifactProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ActionDeclarationProperties {
    ActionTypeId: ActionTypeId;
    Configuration?: any;
    InputArtifacts?: List<InputArtifact>;
    Name: Value<string>;
    OutputArtifacts?: List<OutputArtifact>;
    RoleArn?: Value<string>;
    RunOrder?: Value<number>;
}
export declare class ActionDeclaration extends ResourceBase {
    constructor(properties: ActionDeclarationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface StageDeclarationProperties {
    Actions: List<ActionDeclaration>;
    Blockers?: List<BlockerDeclaration>;
    Name: Value<string>;
}
export declare class StageDeclaration extends ResourceBase {
    constructor(properties: StageDeclarationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface BlockerDeclarationProperties {
    Name: Value<string>;
    Type: Value<string>;
}
export declare class BlockerDeclaration extends ResourceBase {
    constructor(properties: BlockerDeclarationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface StageTransitionProperties {
    Reason: Value<string>;
    StageName: Value<string>;
}
export declare class StageTransition extends ResourceBase {
    constructor(properties: StageTransitionProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ArtifactStoreProperties {
    EncryptionKey?: EncryptionKey;
    Location: Value<string>;
    Type: Value<string>;
}
export declare class ArtifactStore extends ResourceBase {
    constructor(properties: ArtifactStoreProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ActionTypeIdProperties {
    Category: Value<string>;
    Owner: Value<string>;
    Provider: Value<string>;
    Version: Value<string>;
}
export declare class ActionTypeId extends ResourceBase {
    constructor(properties: ActionTypeIdProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface OutputArtifactProperties {
    Name: Value<string>;
}
export declare class OutputArtifact extends ResourceBase {
    constructor(properties: OutputArtifactProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface EncryptionKeyProperties {
    Id: Value<string>;
    Type: Value<string>;
}
export declare class EncryptionKey extends ResourceBase {
    constructor(properties: EncryptionKeyProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface PipelineProperties {
    ArtifactStore: ArtifactStore;
    DisableInboundStageTransitions?: List<StageTransition>;
    Name?: Value<string>;
    RestartExecutionOnUpdate?: Value<boolean>;
    RoleArn: Value<string>;
    Stages: List<StageDeclaration>;
}
export default class Pipeline extends ResourceBase {
    constructor(properties: PipelineProperties, dependsOn?: Value<string> | Value<string>[]);
}
