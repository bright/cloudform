import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ArtifactDetails {
    MinimumCount: Value<number>;
    MaximumCount: Value<number>;
    constructor(properties: ArtifactDetails);
}
export declare class ConfigurationProperties {
    Secret: Value<boolean>;
    Type?: Value<string>;
    Description?: Value<string>;
    Required: Value<boolean>;
    Queryable?: Value<boolean>;
    Key: Value<boolean>;
    Name: Value<string>;
    constructor(properties: ConfigurationProperties);
}
export declare class Settings {
    EntityUrlTemplate?: Value<string>;
    ExecutionUrlTemplate?: Value<string>;
    RevisionUrlTemplate?: Value<string>;
    ThirdPartyConfigurationUrl?: Value<string>;
    constructor(properties: Settings);
}
export interface CustomActionTypeProperties {
    Category: Value<string>;
    InputArtifactDetails: ArtifactDetails;
    Version: Value<string>;
    OutputArtifactDetails: ArtifactDetails;
    ConfigurationProperties?: List<ConfigurationProperties>;
    Settings?: Settings;
    Tags?: List<ResourceTag>;
    Provider: Value<string>;
}
export default class CustomActionType extends ResourceBase<CustomActionTypeProperties> {
    static ArtifactDetails: typeof ArtifactDetails;
    static ConfigurationProperties: typeof ConfigurationProperties;
    static Settings: typeof Settings;
    constructor(properties: CustomActionTypeProperties);
}
