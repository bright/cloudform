"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class InputArtifact extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::InputArtifact', properties, dependsOn);
    }
}
exports.InputArtifact = InputArtifact;
class ActionDeclaration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::ActionDeclaration', properties, dependsOn);
    }
}
exports.ActionDeclaration = ActionDeclaration;
class StageDeclaration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::StageDeclaration', properties, dependsOn);
    }
}
exports.StageDeclaration = StageDeclaration;
class BlockerDeclaration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::BlockerDeclaration', properties, dependsOn);
    }
}
exports.BlockerDeclaration = BlockerDeclaration;
class StageTransition extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::StageTransition', properties, dependsOn);
    }
}
exports.StageTransition = StageTransition;
class ArtifactStore extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::ArtifactStore', properties, dependsOn);
    }
}
exports.ArtifactStore = ArtifactStore;
class ActionTypeId extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::ActionTypeId', properties, dependsOn);
    }
}
exports.ActionTypeId = ActionTypeId;
class OutputArtifact extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::OutputArtifact', properties, dependsOn);
    }
}
exports.OutputArtifact = OutputArtifact;
class EncryptionKey extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::EncryptionKey', properties, dependsOn);
    }
}
exports.EncryptionKey = EncryptionKey;
class Pipeline extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodePipeline::Pipeline', properties, dependsOn);
    }
}
exports.default = Pipeline;
