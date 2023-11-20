import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ManifestOverridesPayload {
    PayloadData?: Value<string>;
    constructor(properties: ManifestOverridesPayload);
}
export declare class ManifestPayload {
    PayloadData?: Value<string>;
    constructor(properties: ManifestPayload);
}
export interface ApplicationInstanceProperties {
    DefaultRuntimeContextDevice: Value<string>;
    Description?: Value<string>;
    ApplicationInstanceIdToReplace?: Value<string>;
    ManifestOverridesPayload?: ManifestOverridesPayload;
    RuntimeRoleArn?: Value<string>;
    ManifestPayload: ManifestPayload;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class ApplicationInstance extends ResourceBase<ApplicationInstanceProperties> {
    static ManifestOverridesPayload: typeof ManifestOverridesPayload;
    static ManifestPayload: typeof ManifestPayload;
    constructor(properties: ApplicationInstanceProperties);
}
