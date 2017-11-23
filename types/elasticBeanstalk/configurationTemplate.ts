/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface SourceConfigurationProperties {
    ApplicationName: Value<string>
    TemplateName: Value<string>
}

export class SourceConfiguration extends ResourceBase {
    constructor(properties: SourceConfigurationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticBeanstalk::SourceConfiguration', properties, dependsOn)
    }
}

export interface ConfigurationOptionSettingProperties {
    Namespace: Value<string>
    OptionName: Value<string>
    ResourceName?: Value<string>
    Value?: Value<string>
}

export class ConfigurationOptionSetting extends ResourceBase {
    constructor(properties: ConfigurationOptionSettingProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticBeanstalk::ConfigurationOptionSetting', properties, dependsOn)
    }
}

export interface ConfigurationTemplateProperties {
    ApplicationName: Value<string>
    Description?: Value<string>
    EnvironmentId?: Value<string>
    OptionSettings?: List<ConfigurationOptionSetting>
    PlatformArn?: Value<string>
    SolutionStackName?: Value<string>
    SourceConfiguration?: SourceConfiguration
}

export default class ConfigurationTemplate extends ResourceBase {
    constructor(properties: ConfigurationTemplateProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ElasticBeanstalk::ConfigurationTemplate', properties, dependsOn)
    }
}
