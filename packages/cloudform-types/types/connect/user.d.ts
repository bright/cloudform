import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class UserIdentityInfo {
    Email?: Value<string>;
    FirstName?: Value<string>;
    SecondaryEmail?: Value<string>;
    LastName?: Value<string>;
    Mobile?: Value<string>;
    constructor(properties: UserIdentityInfo);
}
export declare class UserPhoneConfig {
    AutoAccept?: Value<boolean>;
    PhoneType: Value<string>;
    DeskPhoneNumber?: Value<string>;
    AfterContactWorkTimeLimit?: Value<number>;
    constructor(properties: UserPhoneConfig);
}
export interface UserProperties {
    RoutingProfileArn: Value<string>;
    Username: Value<string>;
    PhoneConfig: UserPhoneConfig;
    InstanceArn: Value<string>;
    DirectoryUserId?: Value<string>;
    IdentityInfo?: UserIdentityInfo;
    HierarchyGroupArn?: Value<string>;
    SecurityProfileArns: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Password?: Value<string>;
}
export default class User extends ResourceBase<UserProperties> {
    static UserIdentityInfo: typeof UserIdentityInfo;
    static UserPhoneConfig: typeof UserPhoneConfig;
    constructor(properties: UserProperties);
}
