import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface SettingsProperties {
    EntityUrlTemplate?: Value<string>;
    ExecutionUrlTemplate?: Value<string>;
    RevisionUrlTemplate?: Value<string>;
    ThirdPartyConfigurationUrl?: Value<string>;
}
export declare class Settings extends ResourceBase {
    constructor(properties: SettingsProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ArtifactDetailsProperties {
    MaximumCount: Value<number>;
    MinimumCount: Value<number>;
}
export declare class ArtifactDetails extends ResourceBase {
    constructor(properties: ArtifactDetailsProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ConfigurationPropertiesProperties {
    Description?: Value<string>;
    Key: Value<boolean>;
    Name: Value<string>;
    Queryable?: Value<boolean>;
    Required: Value<boolean>;
    Secret: Value<boolean>;
    Type?: Value<string>;
}
export declare class ConfigurationProperties extends ResourceBase {
    constructor(properties: ConfigurationPropertiesProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface CustomActionTypeProperties {
    Category: Value<string>;
    ConfigurationProperties?: ConfigurationProperties[];
    InputArtifactDetails: ArtifactDetails;
    OutputArtifactDetails: ArtifactDetails;
    Provider: Value<string>;
    Settings?: Settings;
    Version?: Value<string>;
}
export default class CustomActionType extends ResourceBase {
    constructor(properties: CustomActionTypeProperties, dependsOn?: Value<string> | Value<string>[]);
}
