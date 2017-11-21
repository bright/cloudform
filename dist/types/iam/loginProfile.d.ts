import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface LoginProfileProperties {
    Password: Value<string>;
    PasswordResetRequired?: Value<boolean>;
}
export default class LoginProfile extends ResourceBase {
    constructor(properties: LoginProfileProperties, dependsOn?: Value<string>);
}
