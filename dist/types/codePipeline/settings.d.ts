import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface SettingsProperties {
    EntityUrlTemplate?: Value<string>;
    ExecutionUrlTemplate?: Value<string>;
    RevisionUrlTemplate?: Value<string>;
    ThirdPartyConfigurationUrl?: Value<string>;
}
export default class Settings extends ResourceBase {
    constructor(properties: SettingsProperties, dependsOn?: Value<string>);
}
