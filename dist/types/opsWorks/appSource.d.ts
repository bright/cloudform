import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface AppSourceProperties {
    Password?: Value<string>;
    Revision?: Value<string>;
    SshKey?: Value<string>;
    Type?: Value<string>;
    Url?: Value<string>;
}
export default class AppSource extends ResourceBase {
    constructor(properties: AppSourceProperties, dependsOn?: Value<string>);
}
