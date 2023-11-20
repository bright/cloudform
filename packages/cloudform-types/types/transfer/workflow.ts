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
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CopyStepDetails {
    DestinationFileLocation?: S3FileLocation
    SourceFileLocation?: Value<string>
    Name?: Value<string>
    OverwriteExisting?: Value<string>

    constructor(properties: CopyStepDetails) {
        Object.assign(this, properties)
    }
}

export class CustomStepDetails {
    TimeoutSeconds?: Value<number>
    Target?: Value<string>
    SourceFileLocation?: Value<string>
    Name?: Value<string>

    constructor(properties: CustomStepDetails) {
        Object.assign(this, properties)
    }
}

export class DecryptStepDetails {
    DestinationFileLocation?: InputFileLocation
    Type?: Value<string>
    SourceFileLocation?: Value<string>
    Name?: Value<string>
    OverwriteExisting?: Value<string>

    constructor(properties: DecryptStepDetails) {
        Object.assign(this, properties)
    }
}

export class DeleteStepDetails {
    SourceFileLocation?: Value<string>
    Name?: Value<string>

    constructor(properties: DeleteStepDetails) {
        Object.assign(this, properties)
    }
}

export class EfsInputFileLocation {
    Path?: Value<string>
    FileSystemId?: Value<string>

    constructor(properties: EfsInputFileLocation) {
        Object.assign(this, properties)
    }
}

export class InputFileLocation {
    EfsFileLocation?: EfsInputFileLocation
    S3FileLocation?: S3InputFileLocation

    constructor(properties: InputFileLocation) {
        Object.assign(this, properties)
    }
}

export class S3FileLocation {
    S3FileLocation?: S3InputFileLocation

    constructor(properties: S3FileLocation) {
        Object.assign(this, properties)
    }
}

export class S3InputFileLocation {
    Bucket?: Value<string>
    Key?: Value<string>

    constructor(properties: S3InputFileLocation) {
        Object.assign(this, properties)
    }
}

export class S3Tag {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: S3Tag) {
        Object.assign(this, properties)
    }
}

export class TagStepDetails {
    SourceFileLocation?: Value<string>
    Tags?: List<S3Tag>
    Name?: Value<string>

    constructor(properties: TagStepDetails) {
        Object.assign(this, properties)
    }
}

export class WorkflowStep {
    CustomStepDetails?: CustomStepDetails
    CopyStepDetails?: CopyStepDetails
    DecryptStepDetails?: DecryptStepDetails
    Type?: Value<string>
    TagStepDetails?: TagStepDetails
    DeleteStepDetails?: DeleteStepDetails

    constructor(properties: WorkflowStep) {
        Object.assign(this, properties)
    }
}

export interface WorkflowProperties {
    Steps: List<WorkflowStep>
    Description?: Value<string>
    OnExceptionSteps?: List<WorkflowStep>
    Tags?: List<ResourceTag>
}

export default class Workflow extends ResourceBase<WorkflowProperties> {
    static CopyStepDetails = CopyStepDetails
    static CustomStepDetails = CustomStepDetails
    static DecryptStepDetails = DecryptStepDetails
    static DeleteStepDetails = DeleteStepDetails
    static EfsInputFileLocation = EfsInputFileLocation
    static InputFileLocation = InputFileLocation
    static S3FileLocation = S3FileLocation
    static S3InputFileLocation = S3InputFileLocation
    static S3Tag = S3Tag
    static TagStepDetails = TagStepDetails
    static WorkflowStep = WorkflowStep

    constructor(properties: WorkflowProperties) {
        super('AWS::Transfer::Workflow', properties)
    }
}
