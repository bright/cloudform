/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'

export interface OptionSettingProperties {
    Name?: Value<string>
    Value?: Value<string>
}

export class OptionSetting extends ResourceBase {
    constructor(properties: OptionSettingProperties, dependsOn?: Value<string>) {
        super('AWS::RDS::OptionSetting', properties, dependsOn)
    }
}

export interface OptionConfigurationProperties {
    DBSecurityGroupMemberships?: Value<string>[]
    OptionName: Value<string>
    OptionSettings?: OptionSetting
    OptionVersion?: Value<string>
    Port?: Value<number>
    VpcSecurityGroupMemberships?: Value<string>[]
}

export class OptionConfiguration extends ResourceBase {
    constructor(properties: OptionConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::RDS::OptionConfiguration', properties, dependsOn)
    }
}

export interface OptionGroupProperties {
    EngineName: Value<string>
    MajorEngineVersion: Value<string>
    OptionConfigurations: OptionConfiguration[]
    OptionGroupDescription: Value<string>
    Tags?: ResourceTag[]
}

export default class OptionGroup extends ResourceBase {
    constructor(properties: OptionGroupProperties, dependsOn?: Value<string>) {
        super('AWS::RDS::OptionGroup', properties, dependsOn)
    }
}