"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class InputArtifact {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputArtifact = InputArtifact;
class BlockerDeclaration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BlockerDeclaration = BlockerDeclaration;
class ArtifactStoreMap {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ArtifactStoreMap = ArtifactStoreMap;
class OutputArtifact {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.OutputArtifact = OutputArtifact;
class EncryptionKey {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EncryptionKey = EncryptionKey;
class ActionDeclaration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ActionDeclaration = ActionDeclaration;
class StageDeclaration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StageDeclaration = StageDeclaration;
class StageTransition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StageTransition = StageTransition;
class ArtifactStore {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ArtifactStore = ArtifactStore;
class ActionTypeId {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ActionTypeId = ActionTypeId;
class Pipeline extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::CodePipeline::Pipeline', properties);
    }
}
Pipeline.InputArtifact = InputArtifact;
Pipeline.BlockerDeclaration = BlockerDeclaration;
Pipeline.ArtifactStoreMap = ArtifactStoreMap;
Pipeline.OutputArtifact = OutputArtifact;
Pipeline.EncryptionKey = EncryptionKey;
Pipeline.ActionDeclaration = ActionDeclaration;
Pipeline.StageDeclaration = StageDeclaration;
Pipeline.StageTransition = StageTransition;
Pipeline.ArtifactStore = ArtifactStore;
Pipeline.ActionTypeId = ActionTypeId;
exports.default = Pipeline;
