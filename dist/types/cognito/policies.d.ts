import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface PoliciesProperties {
    PasswordPolicy?: Value<string>;
}
export default class Policies extends ResourceBase {
    constructor(properties: PoliciesProperties, dependsOn?: Value<string>);
}
