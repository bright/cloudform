import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface InstanceProfileProperties {
    Path?: Value<string>;
    Roles: Value<string>[];
    InstanceProfileName?: Value<string>;
}
export default class InstanceProfile extends ResourceBase {
    constructor(properties: InstanceProfileProperties, dependsOn?: Value<string>);
}
