import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface OptionSettingsProperties {
    Name?: Value<string>;
    Value?: Value<string>;
}
export default class OptionSettings extends ResourceBase {
    constructor(properties: OptionSettingsProperties, dependsOn?: Value<string>);
}
