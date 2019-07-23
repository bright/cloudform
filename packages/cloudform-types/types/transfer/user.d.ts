import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare type SshPublicKey = Value<string>;
export interface UserProperties {
    Policy?: Value<string>;
    Role: Value<string>;
    HomeDirectory?: Value<string>;
    ServerId: Value<string>;
    UserName: Value<string>;
    SshPublicKeys?: List<SshPublicKey>;
    Tags?: List<ResourceTag>;
}
export default class User extends ResourceBase<UserProperties> {
    constructor(properties: UserProperties);
}
