import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface ConfigurationManagerProperties {
    Name?: Value<string>;
    Version?: Value<string>;
}
export default class ConfigurationManager extends ResourceBase {
    constructor(properties: ConfigurationManagerProperties, dependsOn?: Value<string>);
}
