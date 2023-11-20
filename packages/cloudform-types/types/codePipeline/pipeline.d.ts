import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ActionDeclaration {
    ActionTypeId: ActionTypeId;
    Configuration?: {
        [key: string]: any;
    };
    InputArtifacts?: List<InputArtifact>;
    Name: Value<string>;
    Namespace?: Value<string>;
    OutputArtifacts?: List<OutputArtifact>;
    Region?: Value<string>;
    RoleArn?: Value<string>;
    RunOrder?: Value<number>;
    constructor(properties: ActionDeclaration);
}
export declare class ActionTypeId {
    Category: Value<string>;
    Owner: Value<string>;
    Provider: Value<string>;
    Version: Value<string>;
    constructor(properties: ActionTypeId);
}
export declare class ArtifactStore {
    EncryptionKey?: EncryptionKey;
    Location: Value<string>;
    Type: Value<string>;
    constructor(properties: ArtifactStore);
}
export declare class ArtifactStoreMap {
    ArtifactStore: ArtifactStore;
    Region: Value<string>;
    constructor(properties: ArtifactStoreMap);
}
export declare class BlockerDeclaration {
    Name: Value<string>;
    Type: Value<string>;
    constructor(properties: BlockerDeclaration);
}
export declare class EncryptionKey {
    Id: Value<string>;
    Type: Value<string>;
    constructor(properties: EncryptionKey);
}
export declare class InputArtifact {
    Name: Value<string>;
    constructor(properties: InputArtifact);
}
export declare class OutputArtifact {
    Name: Value<string>;
    constructor(properties: OutputArtifact);
}
export declare class StageDeclaration {
    Actions: List<ActionDeclaration>;
    Blockers?: List<BlockerDeclaration>;
    Name: Value<string>;
    constructor(properties: StageDeclaration);
}
export declare class StageTransition {
    Reason: Value<string>;
    StageName: Value<string>;
    constructor(properties: StageTransition);
}
export interface PipelineProperties {
    ArtifactStore?: ArtifactStore;
    ArtifactStores?: List<ArtifactStoreMap>;
    DisableInboundStageTransitions?: List<StageTransition>;
    Name?: Value<string>;
    RestartExecutionOnUpdate?: Value<boolean>;
    RoleArn: Value<string>;
    Stages: List<StageDeclaration>;
    Tags?: List<ResourceTag>;
}
export default class Pipeline extends ResourceBase<PipelineProperties> {
    static ActionDeclaration: typeof ActionDeclaration;
    static ActionTypeId: typeof ActionTypeId;
    static ArtifactStore: typeof ArtifactStore;
    static ArtifactStoreMap: typeof ArtifactStoreMap;
    static BlockerDeclaration: typeof BlockerDeclaration;
    static EncryptionKey: typeof EncryptionKey;
    static InputArtifact: typeof InputArtifact;
    static OutputArtifact: typeof OutputArtifact;
    static StageDeclaration: typeof StageDeclaration;
    static StageTransition: typeof StageTransition;
    constructor(properties: PipelineProperties);
}
