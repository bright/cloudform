import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface ConnectionSettingsProperties {
    IdleTimeout?: Value<number>;
}
export default class ConnectionSettings extends ResourceBase {
    constructor(properties: ConnectionSettingsProperties, dependsOn?: Value<string>);
}
