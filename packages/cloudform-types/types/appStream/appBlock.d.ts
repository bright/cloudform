import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class S3Location {
    S3Bucket: Value<string>;
    S3Key?: Value<string>;
    constructor(properties: S3Location);
}
export declare class ScriptDetails {
    TimeoutInSeconds: Value<number>;
    ScriptS3Location: S3Location;
    ExecutablePath: Value<string>;
    ExecutableParameters?: Value<string>;
    constructor(properties: ScriptDetails);
}
export interface AppBlockProperties {
    SetupScriptDetails?: ScriptDetails;
    Description?: Value<string>;
    PostSetupScriptDetails?: ScriptDetails;
    DisplayName?: Value<string>;
    SourceS3Location: S3Location;
    Tags?: List<ResourceTag>;
    PackagingType?: Value<string>;
    Name: Value<string>;
}
export default class AppBlock extends ResourceBase<AppBlockProperties> {
    static S3Location: typeof S3Location;
    static ScriptDetails: typeof ScriptDetails;
    constructor(properties: AppBlockProperties);
}
