import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface OptionSettingProperties {
    Name?: Value<string>;
    Value?: Value<string>;
}
export declare class OptionSetting extends ResourceBase {
    constructor(properties: OptionSettingProperties, dependsOn?: Value<string>);
}
export interface OptionConfigurationProperties {
    DBSecurityGroupMemberships?: Value<string>[];
    OptionName: Value<string>;
    OptionSettings?: OptionSetting;
    OptionVersion?: Value<string>;
    Port?: Value<number>;
    VpcSecurityGroupMemberships?: Value<string>[];
}
export declare class OptionConfiguration extends ResourceBase {
    constructor(properties: OptionConfigurationProperties, dependsOn?: Value<string>);
}
export interface OptionGroupProperties {
    EngineName: Value<string>;
    MajorEngineVersion: Value<string>;
    OptionConfigurations: OptionConfiguration[];
    OptionGroupDescription: Value<string>;
    Tags?: ResourceTag[];
}
export default class OptionGroup extends ResourceBase {
    constructor(properties: OptionGroupProperties, dependsOn?: Value<string>);
}
