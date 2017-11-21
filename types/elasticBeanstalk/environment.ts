import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'
import OptionSetting from './optionSetting'
import OptionsToRemove from './optionsToRemove'
import Tier from './tier'



export interface EnvironmentProperties {
    Description?: Value<string>
    ApplicationName: Value<string>
    CNAMEPrefix?: Value<string>
    EnvironmentName?: Value<string>
    OptionSettings?: OptionSetting[]
    OptionsToRemove?: OptionsToRemove[]
    SolutionStackName?: Value<string>
    TemplateName?: Value<string>
    Tier?: Tier
    VersionLabel?: Value<string>
    Tags?: ResourceTag[]
}

export default class Environment extends ResourceBase {
    constructor(properties: EnvironmentProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticBeanstalk::Environment', properties, dependsOn)
    }
}