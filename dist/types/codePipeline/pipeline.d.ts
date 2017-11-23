import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class InputArtifact {
    Name: Value<string>;
    constructor(properties: InputArtifact);
}
export declare class ActionDeclaration {
    ActionTypeId: ActionTypeId;
    Configuration?: any;
    InputArtifacts?: List<InputArtifact>;
    Name: Value<string>;
    OutputArtifacts?: List<OutputArtifact>;
    RoleArn?: Value<string>;
    RunOrder?: Value<number>;
    constructor(properties: ActionDeclaration);
}
export declare class StageDeclaration {
    Actions: List<ActionDeclaration>;
    Blockers?: List<BlockerDeclaration>;
    Name: Value<string>;
    constructor(properties: StageDeclaration);
}
export declare class BlockerDeclaration {
    Name: Value<string>;
    Type: Value<string>;
    constructor(properties: BlockerDeclaration);
}
export declare class StageTransition {
    Reason: Value<string>;
    StageName: Value<string>;
    constructor(properties: StageTransition);
}
export declare class ArtifactStore {
    EncryptionKey?: EncryptionKey;
    Location: Value<string>;
    Type: Value<string>;
    constructor(properties: ArtifactStore);
}
export declare class ActionTypeId {
    Category: Value<string>;
    Owner: Value<string>;
    Provider: Value<string>;
    Version: Value<string>;
    constructor(properties: ActionTypeId);
}
export declare class OutputArtifact {
    Name: Value<string>;
    constructor(properties: OutputArtifact);
}
export declare class EncryptionKey {
    Id: Value<string>;
    Type: Value<string>;
    constructor(properties: EncryptionKey);
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
    constructor(properties?: PipelineProperties);
}
