import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface InstanceProfileProperties {
    InstanceProfileName?: Value<string>;
    Path?: Value<string>;
    Roles: Value<string>[];
}
export default class InstanceProfile extends ResourceBase {
    constructor(properties: InstanceProfileProperties, dependsOn?: Value<string> | Value<string>[]);
}
