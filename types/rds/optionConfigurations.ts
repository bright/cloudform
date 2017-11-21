import {ResourceBase} from '../resource'
import {Value} from '../internal'
import OptionSettings from './optionSettings'



export interface OptionConfigurationsProperties {
    DBSecurityGroupMemberships?: Value<string>[]
    OptionName: Value<string>
    OptionSettings?: OptionSettings
    Port?: Value<number>
    VpcSecurityGroupMemberships?: Value<string>[]
}

export default class OptionConfigurations extends ResourceBase {
    constructor(properties: OptionConfigurationsProperties, dependsOn?: Value<string>) {
        super('AWS::RDS::OptionConfigurations', properties, dependsOn)
    }
}