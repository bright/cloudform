import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface InstanceProfileProperties {
    Path?: Value<string>;
    InstanceProfileName?: Value<string>;
    Roles: List<Value<string>>;
}
export default class InstanceProfile extends ResourceBase<InstanceProfileProperties> {
    constructor(properties: InstanceProfileProperties);
}
