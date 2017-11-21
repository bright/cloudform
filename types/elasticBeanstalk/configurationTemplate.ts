import {ResourceBase} from '../resource'
import {Value} from '../internal'
import OptionSetting from './optionSetting'
import SourceConfiguration from './sourceConfiguration'



export interface ConfigurationTemplateProperties {
    ApplicationName: Value<string>
    Description?: Value<string>
    EnvironmentId?: Value<string>
    OptionSettings?: OptionSetting[]
    SolutionStackName?: Value<string>
    SourceConfiguration?: SourceConfiguration
}

export default class ConfigurationTemplate extends ResourceBase {
    constructor(properties: ConfigurationTemplateProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticBeanstalk::ConfigurationTemplate', properties, dependsOn)
    }
}