import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface UserProfileProperties {
    AllowSelfManagement?: Value<boolean>;
    IamUserArn: Value<string>;
    SshPublicKey?: Value<string>;
    SshUsername?: Value<string>;
}
export default class UserProfile extends ResourceBase {
    constructor(properties: UserProfileProperties, dependsOn?: Value<string>);
}
