import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface OptionSettingProperties {
    Namespace: Value<string>
    OptionName: Value<string>
    Value: Value<string>
}

export default class OptionSetting extends ResourceBase {
    constructor(properties: OptionSettingProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticBeanstalk::OptionSetting', properties, dependsOn)
    }
}