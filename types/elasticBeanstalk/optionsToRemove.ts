import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface OptionsToRemoveProperties {
    NameSpace: Value<string>
    OptionName: Value<string>
    Value: Value<string>
}

export default class OptionsToRemove extends ResourceBase {
    constructor(properties: OptionsToRemoveProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticBeanstalk::OptionsToRemove', properties, dependsOn)
    }
}