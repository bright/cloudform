import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class OptionSetting {
    ResourceName?: Value<string>;
    Value?: Value<string>;
    Namespace: Value<string>;
    OptionName: Value<string>;
    constructor(properties: OptionSetting);
}
export declare class Tier {
    Type?: Value<string>;
    Version?: Value<string>;
    Name?: Value<string>;
    constructor(properties: Tier);
}
export interface EnvironmentProperties {
    PlatformArn?: Value<string>;
    ApplicationName: Value<string>;
    Description?: Value<string>;
    EnvironmentName?: Value<string>;
    OperationsRole?: Value<string>;
    Tier?: Tier;
    OptionSettings?: List<OptionSetting>;
    VersionLabel?: Value<string>;
    TemplateName?: Value<string>;
    SolutionStackName?: Value<string>;
    CNAMEPrefix?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Environment extends ResourceBase<EnvironmentProperties> {
    static OptionSetting: typeof OptionSetting;
    static Tier: typeof Tier;
    constructor(properties: EnvironmentProperties);
}
