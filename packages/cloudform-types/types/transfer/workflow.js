"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowStep = exports.TagStepDetails = exports.S3Tag = exports.S3InputFileLocation = exports.S3FileLocation = exports.InputFileLocation = exports.EfsInputFileLocation = exports.DeleteStepDetails = exports.DecryptStepDetails = exports.CustomStepDetails = exports.CopyStepDetails = void 0;
const resource_1 = require("../resource");
class CopyStepDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CopyStepDetails = CopyStepDetails;
class CustomStepDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomStepDetails = CustomStepDetails;
class DecryptStepDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DecryptStepDetails = DecryptStepDetails;
class DeleteStepDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DeleteStepDetails = DeleteStepDetails;
class EfsInputFileLocation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EfsInputFileLocation = EfsInputFileLocation;
class InputFileLocation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.InputFileLocation = InputFileLocation;
class S3FileLocation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3FileLocation = S3FileLocation;
class S3InputFileLocation {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3InputFileLocation = S3InputFileLocation;
class S3Tag {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Tag = S3Tag;
class TagStepDetails {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagStepDetails = TagStepDetails;
class WorkflowStep {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.WorkflowStep = WorkflowStep;
class Workflow extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Transfer::Workflow', properties);
    }
}
exports.default = Workflow;
Workflow.CopyStepDetails = CopyStepDetails;
Workflow.CustomStepDetails = CustomStepDetails;
Workflow.DecryptStepDetails = DecryptStepDetails;
Workflow.DeleteStepDetails = DeleteStepDetails;
Workflow.EfsInputFileLocation = EfsInputFileLocation;
Workflow.InputFileLocation = InputFileLocation;
Workflow.S3FileLocation = S3FileLocation;
Workflow.S3InputFileLocation = S3InputFileLocation;
Workflow.S3Tag = S3Tag;
Workflow.TagStepDetails = TagStepDetails;
Workflow.WorkflowStep = WorkflowStep;
