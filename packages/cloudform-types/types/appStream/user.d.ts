import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface UserProperties {
    UserName: Value<string>;
    FirstName?: Value<string>;
    MessageAction?: Value<string>;
    LastName?: Value<string>;
    AuthenticationType: Value<string>;
}
export default class User extends ResourceBase<UserProperties> {
    constructor(properties: UserProperties);
}
