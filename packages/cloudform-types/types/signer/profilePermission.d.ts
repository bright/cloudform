import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ProfilePermissionProperties {
    ProfileName: Value<string>;
    ProfileVersion?: Value<string>;
    Action: Value<string>;
    Principal: Value<string>;
    StatementId: Value<string>;
}
export default class ProfilePermission extends ResourceBase<ProfilePermissionProperties> {
    constructor(properties: ProfilePermissionProperties);
}
