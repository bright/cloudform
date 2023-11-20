import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ConfigurationOptionSetting {
    ResourceName?: Value<string>;
    Value?: Value<string>;
    Namespace: Value<string>;
    OptionName: Value<string>;
    constructor(properties: ConfigurationOptionSetting);
}
export declare class SourceConfiguration {
    ApplicationName: Value<string>;
    TemplateName: Value<string>;
    constructor(properties: SourceConfiguration);
}
export interface ConfigurationTemplateProperties {
    EnvironmentId?: Value<string>;
    PlatformArn?: Value<string>;
    ApplicationName: Value<string>;
    Description?: Value<string>;
    OptionSettings?: List<ConfigurationOptionSetting>;
    SourceConfiguration?: SourceConfiguration;
    SolutionStackName?: Value<string>;
}
export default class ConfigurationTemplate extends ResourceBase<ConfigurationTemplateProperties> {
    static ConfigurationOptionSetting: typeof ConfigurationOptionSetting;
    static SourceConfiguration: typeof SourceConfiguration;
    constructor(properties: ConfigurationTemplateProperties);
}
