import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CopyStepDetails {
    DestinationFileLocation?: S3FileLocation;
    SourceFileLocation?: Value<string>;
    Name?: Value<string>;
    OverwriteExisting?: Value<string>;
    constructor(properties: CopyStepDetails);
}
export declare class CustomStepDetails {
    TimeoutSeconds?: Value<number>;
    Target?: Value<string>;
    SourceFileLocation?: Value<string>;
    Name?: Value<string>;
    constructor(properties: CustomStepDetails);
}
export declare class DecryptStepDetails {
    DestinationFileLocation?: InputFileLocation;
    Type?: Value<string>;
    SourceFileLocation?: Value<string>;
    Name?: Value<string>;
    OverwriteExisting?: Value<string>;
    constructor(properties: DecryptStepDetails);
}
export declare class DeleteStepDetails {
    SourceFileLocation?: Value<string>;
    Name?: Value<string>;
    constructor(properties: DeleteStepDetails);
}
export declare class EfsInputFileLocation {
    Path?: Value<string>;
    FileSystemId?: Value<string>;
    constructor(properties: EfsInputFileLocation);
}
export declare class InputFileLocation {
    EfsFileLocation?: EfsInputFileLocation;
    S3FileLocation?: S3InputFileLocation;
    constructor(properties: InputFileLocation);
}
export declare class S3FileLocation {
    S3FileLocation?: S3InputFileLocation;
    constructor(properties: S3FileLocation);
}
export declare class S3InputFileLocation {
    Bucket?: Value<string>;
    Key?: Value<string>;
    constructor(properties: S3InputFileLocation);
}
export declare class S3Tag {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: S3Tag);
}
export declare class TagStepDetails {
    SourceFileLocation?: Value<string>;
    Tags?: List<S3Tag>;
    Name?: Value<string>;
    constructor(properties: TagStepDetails);
}
export declare class WorkflowStep {
    CustomStepDetails?: CustomStepDetails;
    CopyStepDetails?: CopyStepDetails;
    DecryptStepDetails?: DecryptStepDetails;
    Type?: Value<string>;
    TagStepDetails?: TagStepDetails;
    DeleteStepDetails?: DeleteStepDetails;
    constructor(properties: WorkflowStep);
}
export interface WorkflowProperties {
    Steps: List<WorkflowStep>;
    Description?: Value<string>;
    OnExceptionSteps?: List<WorkflowStep>;
    Tags?: List<ResourceTag>;
}
export default class Workflow extends ResourceBase<WorkflowProperties> {
    static CopyStepDetails: typeof CopyStepDetails;
    static CustomStepDetails: typeof CustomStepDetails;
    static DecryptStepDetails: typeof DecryptStepDetails;
    static DeleteStepDetails: typeof DeleteStepDetails;
    static EfsInputFileLocation: typeof EfsInputFileLocation;
    static InputFileLocation: typeof InputFileLocation;
    static S3FileLocation: typeof S3FileLocation;
    static S3InputFileLocation: typeof S3InputFileLocation;
    static S3Tag: typeof S3Tag;
    static TagStepDetails: typeof TagStepDetails;
    static WorkflowStep: typeof WorkflowStep;
    constructor(properties: WorkflowProperties);
}
