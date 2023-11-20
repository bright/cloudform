import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ProfileProperties {
    ManagedPolicyArns?: List<Value<string>>;
    RequireInstanceProperties?: Value<boolean>;
    RoleArns: List<Value<string>>;
    SessionPolicy?: Value<string>;
    Enabled?: Value<boolean>;
    DurationSeconds?: Value<number>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Profile extends ResourceBase<ProfileProperties> {
    constructor(properties: ProfileProperties);
}
