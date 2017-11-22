import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface SourceConfigurationProperties {
    ApplicationName: Value<string>;
    TemplateName: Value<string>;
}
export declare class SourceConfiguration extends ResourceBase {
    constructor(properties: SourceConfigurationProperties, dependsOn?: Value<string>);
}
export interface ConfigurationOptionSettingProperties {
    Namespace: Value<string>;
    OptionName: Value<string>;
    ResourceName?: Value<string>;
    Value?: Value<string>;
}
export declare class ConfigurationOptionSetting extends ResourceBase {
    constructor(properties: ConfigurationOptionSettingProperties, dependsOn?: Value<string>);
}
export interface ConfigurationTemplateProperties {
    ApplicationName: Value<string>;
    Description?: Value<string>;
    EnvironmentId?: Value<string>;
    OptionSettings?: ConfigurationOptionSetting[];
    PlatformArn?: Value<string>;
    SolutionStackName?: Value<string>;
    SourceConfiguration?: SourceConfiguration;
}
export default class ConfigurationTemplate extends ResourceBase {
    constructor(properties: ConfigurationTemplateProperties, dependsOn?: Value<string>);
}
