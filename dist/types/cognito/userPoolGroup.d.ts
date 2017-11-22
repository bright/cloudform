import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface UserPoolGroupProperties {
    GroupName?: Value<string>;
    Description?: Value<string>;
    UserPoolId: Value<string>;
    Precedence?: Value<number>;
    RoleArn?: Value<string>;
}
export default class UserPoolGroup extends ResourceBase {
    constructor(properties: UserPoolGroupProperties, dependsOn?: Value<string>);
}
