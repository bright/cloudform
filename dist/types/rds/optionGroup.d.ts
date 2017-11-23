import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface OptionSettingProperties {
    Name?: Value<string>;
    Value?: Value<string>;
}
export declare class OptionSetting extends ResourceBase {
    constructor(properties: OptionSettingProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface OptionConfigurationProperties {
    DBSecurityGroupMemberships?: List<Value<string>>;
    OptionName: Value<string>;
    OptionSettings?: OptionSetting;
    OptionVersion?: Value<string>;
    Port?: Value<number>;
    VpcSecurityGroupMemberships?: List<Value<string>>;
}
export declare class OptionConfiguration extends ResourceBase {
    constructor(properties: OptionConfigurationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface OptionGroupProperties {
    EngineName: Value<string>;
    MajorEngineVersion: Value<string>;
    OptionConfigurations: List<OptionConfiguration>;
    OptionGroupDescription: Value<string>;
    Tags?: ResourceTag[];
}
export default class OptionGroup extends ResourceBase {
    constructor(properties: OptionGroupProperties, dependsOn?: Value<string> | Value<string>[]);
}
