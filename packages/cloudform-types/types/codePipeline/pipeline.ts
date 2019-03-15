/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class InputArtifact {
    Name!: Value<string>

    constructor(properties: InputArtifact) {
        Object.assign(this, properties)
    }
}

export class ActionDeclaration {
    ActionTypeId!: ActionTypeId
    Configuration?: {[key: string]: any}
    InputArtifacts?: List<InputArtifact>
    Name!: Value<string>
    OutputArtifacts?: List<OutputArtifact>
    Region?: Value<string>
    RoleArn?: Value<string>
    RunOrder?: Value<number>

    constructor(properties: ActionDeclaration) {
        Object.assign(this, properties)
    }
}

export class StageDeclaration {
    Actions!: List<ActionDeclaration>
    Blockers?: List<BlockerDeclaration>
    Name!: Value<string>

    constructor(properties: StageDeclaration) {
        Object.assign(this, properties)
    }
}

export class BlockerDeclaration {
    Name!: Value<string>
    Type!: Value<string>

    constructor(properties: BlockerDeclaration) {
        Object.assign(this, properties)
    }
}

export class ArtifactStoreMap {
    ArtifactStore!: ArtifactStore
    Region!: Value<string>

    constructor(properties: ArtifactStoreMap) {
        Object.assign(this, properties)
    }
}

export class StageTransition {
    Reason!: Value<string>
    StageName!: Value<string>

    constructor(properties: StageTransition) {
        Object.assign(this, properties)
    }
}

export class ArtifactStore {
    EncryptionKey?: EncryptionKey
    Location!: Value<string>
    Type!: Value<string>

    constructor(properties: ArtifactStore) {
        Object.assign(this, properties)
    }
}

export class ActionTypeId {
    Category!: Value<string>
    Owner!: Value<string>
    Provider!: Value<string>
    Version!: Value<string>

    constructor(properties: ActionTypeId) {
        Object.assign(this, properties)
    }
}

export class OutputArtifact {
    Name!: Value<string>

    constructor(properties: OutputArtifact) {
        Object.assign(this, properties)
    }
}

export class EncryptionKey {
    Id!: Value<string>
    Type!: Value<string>

    constructor(properties: EncryptionKey) {
        Object.assign(this, properties)
    }
}

export interface PipelineProperties {
    ArtifactStore?: ArtifactStore
    ArtifactStores?: List<ArtifactStoreMap>
    DisableInboundStageTransitions?: List<StageTransition>
    Name?: Value<string>
    RestartExecutionOnUpdate?: Value<boolean>
    RoleArn: Value<string>
    Stages: List<StageDeclaration>
}

export default class Pipeline extends ResourceBase<PipelineProperties> {
    static InputArtifact = InputArtifact
    static ActionDeclaration = ActionDeclaration
    static StageDeclaration = StageDeclaration
    static BlockerDeclaration = BlockerDeclaration
    static ArtifactStoreMap = ArtifactStoreMap
    static StageTransition = StageTransition
    static ArtifactStore = ArtifactStore
    static ActionTypeId = ActionTypeId
    static OutputArtifact = OutputArtifact
    static EncryptionKey = EncryptionKey

    constructor(properties: PipelineProperties) {
        super('AWS::CodePipeline::Pipeline', properties)
    }
}
