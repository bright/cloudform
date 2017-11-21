import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface CustomCookbooksSourceProperties {
    Password?: Value<string>;
    Revision?: Value<string>;
    SshKey?: Value<string>;
    Type?: Value<string>;
    Url?: Value<string>;
    Username?: Value<string>;
}
export default class CustomCookbooksSource extends ResourceBase {
    constructor(properties: CustomCookbooksSourceProperties, dependsOn?: Value<string>);
}
