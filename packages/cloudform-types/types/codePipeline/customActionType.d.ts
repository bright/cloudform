import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ArtifactDetails {
    MaximumCount: Value<number>;
    MinimumCount: Value<number>;
    constructor(properties: ArtifactDetails);
}
export declare class ConfigurationProperties {
    Description?: Value<string>;
    Key: Value<boolean>;
    Name: Value<string>;
    Queryable?: Value<boolean>;
    Required: Value<boolean>;
    Secret: Value<boolean>;
    Type?: Value<string>;
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
    ConfigurationProperties?: List<ConfigurationProperties>;
    InputArtifactDetails: ArtifactDetails;
    OutputArtifactDetails: ArtifactDetails;
    Provider: Value<string>;
    Settings?: Settings;
    Version: Value<string>;
}
export default class CustomActionType extends ResourceBase<CustomActionTypeProperties> {
    static ArtifactDetails: typeof ArtifactDetails;
    static ConfigurationProperties: typeof ConfigurationProperties;
    static Settings: typeof Settings;
    constructor(properties: CustomActionTypeProperties);
}
