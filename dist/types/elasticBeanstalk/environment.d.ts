import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface OptionSettingProperties {
    Namespace: Value<string>;
    OptionName: Value<string>;
    ResourceName?: Value<string>;
    Value?: Value<string>;
}
export declare class OptionSetting extends ResourceBase {
    constructor(properties: OptionSettingProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface TierProperties {
    Name?: Value<string>;
    Type?: Value<string>;
    Version?: Value<string>;
}
export declare class Tier extends ResourceBase {
    constructor(properties: TierProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface EnvironmentProperties {
    ApplicationName: Value<string>;
    CNAMEPrefix?: Value<string>;
    Description?: Value<string>;
    EnvironmentName?: Value<string>;
    OptionSettings?: OptionSetting[];
    PlatformArn?: Value<string>;
    SolutionStackName?: Value<string>;
    Tags?: ResourceTag[];
    TemplateName?: Value<string>;
    Tier?: Tier;
    VersionLabel?: Value<string>;
}
export default class Environment extends ResourceBase {
    constructor(properties: EnvironmentProperties, dependsOn?: Value<string> | Value<string>[]);
}
