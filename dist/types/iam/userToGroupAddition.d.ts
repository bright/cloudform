import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface UserToGroupAdditionProperties {
    GroupName: Value<string>;
    Users: Value<string>[];
}
export default class UserToGroupAddition extends ResourceBase {
    constructor(properties: UserToGroupAdditionProperties, dependsOn?: Value<string> | Value<string>[]);
}
