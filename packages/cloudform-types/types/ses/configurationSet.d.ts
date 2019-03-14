import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ConfigurationSetProperties {
    Name?: Value<string>;
}
export default class ConfigurationSet extends ResourceBase<ConfigurationSetProperties> {
    constructor(properties?: ConfigurationSetProperties);
}
